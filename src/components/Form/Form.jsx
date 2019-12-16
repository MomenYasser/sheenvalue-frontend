import React, { Component } from "react";
import "./form.css";
import { reduce, forEach } from "lodash";
import TextField from './Fields/Text'
class Form extends Component {
  initState = data => {
    this.state = {
      showFormErros: false,
      form: this.initFormState(data.form)
    };
    this.initFields();
    console.log(this.state)

  };
  
  componentDidMount() {
    this.validateForm()
  }

  get isFormValid () {
    this.validateForm()
    let isValid = true;
    const {form} = this.state;
    console.log(form)
    for (const key in form) {
        if (form.hasOwnProperty(key)) {
            const field = form[key];
            if(field.errors.length>0){
               isValid = false
            }
        }
        
    }
    return isValid;
  };
  validateForm = () =>{
    const { form } = this.state;
    const validatedForm = reduce(form, (result, field, key) => {
        const errors = [];
        field.validators.forEach(validator => {
            const item = validator(field.value);

            if (!item.valid) {
                errors.push(item.message);
            }
        })

        result[key] = { ...form[key], errors };

        return result;
    }, {});
    this.setState({ form: validatedForm });
  }
  initFormState = form => {
    const structure = reduce( form, (result, field, key) => {
        const fieldItem = {
          ...field,
          errors: []
        };
        result[key] = fieldItem;
        return result
        },
      {}
    );
    return structure;
  };
  initFields = () => {
    const fields = {
      TextField
    };
    forEach(fields, (Component, fieldName) => {
      this[fieldName] = props => {
       return <Component {...props} {...this.commonFieldProps(props)} />;
      };
    });
  };

  commonFieldProps = ({ name, ...rest }) => {
    const { form } = this.state;

    return {
      value: form[name].value,
      showFormErrors: this.state.showFormErrors,
      onChange: this.onChange,
      errors: form[name].errors,
      ...rest
    };
  };
  isRequired = value => {
    return value !== "";
  };
  isEmail = email => {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return email.search(filter) === 0;
  };
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
  get formValues(){
      const {form} = this.state;
      const test = reduce(form ,(result, field , key) => {
          result[key] = field.value;
          return result
      },{})
      return test

  }
  showFormErrors = ()=> this.setState({showFormErrors:true})

  // renderInput = (name, label, onchange, type = "text") => {
  //   const { form } = this.state || true;
  //   // const isValid = form !== undefined && form[name].isValid;

  //   return (
  //     <div>
  //       <Input
  //         change={onchange}
  //         name={name}
  //         type={type}
  //         label={label}
  //       //   isValid={isValid}
  //       />
  //     </div>
  //   );
  // };
  // renderButton = title => {
  //   return <button className="submitButton">{title}</button>;
  // };
}
export default Form;
