import React from 'react'
import FormBuilder from '../../Components/Form/Builder/Builder'
import {
    isRequired,
    isEmail,
    minLength,
    isMatch,
} from '../../Services/Validations';
import styles from './Styles'
import asEntity from '../../Hocs/asEntity'

class Signup extends FormBuilder {
    constructor(props) {
        super(props);
        this.initForm({
            forms: {
                signUpForm: {
                    username: {
                        value: '',
                        validators: [isRequired()]
                    },
                    email: {
                        value: '',
                        validators: [isRequired(),isEmail()]
                    },
                    password: {
                        value: '',
                        validators: [isRequired(),minLength(8)]
                    },
                    confirmPassword: {
                        value: '',
                        validators: [isRequired(),isMatch(() => this.getFormFieldValue('password','signUpForm'))]
                    },
                }

            }
        })
    }
    onSignup=(e,formType="signUpForm")=> {
        e.preventDefault();

        if (this.validateForm(formType))
            alert(JSON.stringify(this.formValues(formType)));
    }
    render() {
        const { TextInput }=this;

        return (
            <div style={styles.formContainer}>
                <form onSubmit={this.onSignup}>
                    <TextInput name={'username'} label={'Username'} formType={'signUpForm'} />
                    <TextInput name={'email'} label={'Email'} formType={'signUpForm'} />
                    <TextInput type='password' name={'password'} label={'Password'} formType={'signUpForm'} />
                    <TextInput type='password' name={'confirmPassword'} label={'Confirm Password'} formType={'signUpForm'} />
                    <button>Signup</button>
                </form>
            </div>

        )
    }
}

export default asEntity({ storeKey: "Signup" })(Signup);
