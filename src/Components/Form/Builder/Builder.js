import React from 'react';
import reduce from 'lodash/reduce';
import forEach from 'lodash/forEach';

import TextInput from '../Fields/TextInput';


class FormBuilder extends React.Component {
    initForm(data){
        this.state={
            ...data,
            forms:this.initState(data.forms), //form:[{login:{_name:{value:'',validators:[,,,]}}}]
            
        }
        this.initComponent()
    }
    // set errorMessags for each key
    initState(forms){
        const newForm = reduce(forms, (res, field, key) => {
                res[key]={
                    ...reduce(field, (res1, fields, key) => {
                        res1[key]={
                            ...fields,
                            errorMessages:[]
                        }
                        return res1
                    }, {})
                }

                return res
            }, {});
        console.log('NEWFORM  ',newForm)
        return newForm

    }
    initComponent() {
        const components = {
            TextInput
        };        

        forEach(components, (Component, componentName) => {
            this[componentName] = props => (
                <Component
                    {...props}
                    {...this.commonProps(props)}
                />
            )
        })
    }
    commonProps(props) {
        const {name,formType}= props
        var form=this.state.forms[formType]
        return {
            value:form[name].value,
            errorMessages:form[name].errorMessages,
            onChangeState:this.onChangeState,
            errorForm:this.state.errorForm,
        };
    }
    onChangeState=(key,value,formType)=>{
        this.setState({
            forms:{
                ...this.state.forms,
                [formType]:
                {
                    ...this.state.forms[formType],
                    [key]:{
                        ...this.state.forms[formType][key],
                        value:value
                    }
                } 
            }
        })
    }
    validateForm(formType){
        // exe validators functions
        // set error messages

        var form=this.state.forms[formType]
        var isError=false
        var newForm=reduce(form, (res, fields, key) => {
            var errorMessages=[]
            fields.errorMessages=[]
            fields.validators.map((validator)=>{
                var validatorRes=validator(fields.value)
                if(!validatorRes.valid)
                {
                    errorMessages.push(validatorRes.message)
                    isError=true
                }
            })
            res[key]={...form[key],errorMessages}
            return res
        }, {});
        if(isError)
            this.setState({forms:{...this.state.forms,[formType]:newForm},errorForm:true})
        else
            this.setState({errorForm:false})
        return !isError

    }
    getFormFieldValue(field,formType){
        var form=this.state.forms[formType]

        return form[field].value
    }
    formValues(formType) {
        var form=this.state.forms[formType]

        const test = reduce(form, (result, field, key) => {
            result[key] = field.value;

            return result;
        }, {});

        return test;
    }
    
}

export default FormBuilder;