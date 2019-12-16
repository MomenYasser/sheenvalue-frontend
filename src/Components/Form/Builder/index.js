import React from 'react';

import reduce from 'lodash/reduce';
import forEach from 'lodash/forEach';


import TextField from '../Fields/Text';
import Router from '../../Router';

class FormBuilder extends React.Component {
    
    initState(data) {   
        this.state = {
            showFormErrors: false,
           form: this.initFormState(data.form),
        };

        this.initFields();
    }

    componentDidMount() {
        this.validateForm();
    }

    onChange = (name, value) => {
        this.setState({
            form: {
                ...this.state.form,
                [name]: {
                    ...this.state.form[name],
                    value 
                },
            },
        }, () => this.validateForm())
    }

    validateForm = () => {
        const { form } = this.state;
        let password  = '' ;
        if ( form.hasOwnProperty("password"))
         password = form["password"].value;

        const validatedForm = reduce(form, (result, field, key) => {
            const errors = [];

            field.validators.forEach(validator => {
                let item ;

                if ( key ==="confirmPassword") item = validator(field.value,password);
                else item = validator(field.value);

                if (!item.valid) {
                    errors.push(item.message);
                }
            })

            result[key] = { ...form[key], errors };

            return result;
        }, {});

        

        this.setState({ form: validatedForm });
    }

    showFormErrors() {
        this.setState({ showFormErrors: true });
    }

    get formValues() {
        const { form } = this.state;

        const test = reduce(form, (result, field, key) => {
            result[key] = field.value;

            return result;
        }, {});

        return test;
    }

   
    get isFormValid() {
        let isValid = true;

        const { form } = this.state;

        for (const key in form) {
            if (form.hasOwnProperty(key)) {
                const field = form[key];
                
                if (field.errors.length > 0) {
                    isValid = false;
                } 
            }
        }

        return isValid;
    }

    commonFieldProps({ name, ...rest }) {
        const { form } = this.state;   
        
        return {
            value: form[name].value,
            showFormErrors: this.state.showFormErrors,
            onChange: this.onChange,
            errors: form[name].errors,
            ...rest,
        };
    }

    initFormState(form) {
        const structure = reduce(form, (result, field, key) => {
            const fieldItem = {
                ...field,
                errors: [],
            };

            result[key] = fieldItem;

            return result;
        }, {});

        return structure;
    }

    initFields() {
        const fields = {
            TextField
        };        

        forEach(fields, (Component, FieldName) => {
            this[FieldName] = props => (
                <Component
                    {...props}
                    {...this.commonFieldProps(props)}
                />
            )
        })
    }

    login() {
        const { email , password } = this.formValues ;
        /**
         * 
         * 
         */
        Router.go('/app');
    }

}

export default FormBuilder;