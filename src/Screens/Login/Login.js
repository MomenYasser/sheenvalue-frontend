import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../../ReduxShbeeb/Actions';
import FormBuilder from '../../Components/Form/Builder/Builder'
import {
    isRequired,
    isEmail,
    minLength,
} from '../../Services/Validations';
import Router from '../../Router/Router';
import styles from './Styles'
import asEntity from '../../Hocs/asEntity'

class Login extends FormBuilder {
    constructor(props) {
        super(props);
        this.initForm({
            forms: {
                loginForm:{
                    email: {
                        value: '',
                        validators: [isRequired(),isEmail()]
                    },
                    password: {
                        value: '',
                        validators: [isRequired(),minLength(8)]
                    },
                }

            }
        })
    }


    onLogin=(e,formType="loginForm") => {
        e.preventDefault();
        if (this.validateForm(formType)) {
            this.props.$store.post(this.formValues(formType));
        }
    }

    entityDidPost(data) {
        Router.navigate('/home');
    }

    entityDidCatch(method,{ errors }) {
        alert("Somethin went wrong");
    }
    render() {
        const { TextInput }=this;

        return (
            <div style={styles.formContainer}>
                <form onSubmit={this.onLogin}>
                    <TextInput name={'email'} label={'Email'} formType={'loginForm'}/>
                    <TextInput type='password' name={'password'} label={'Password'} formType={'loginForm'} />
                    <button>Login</button>
                </form>
            </div>

        )
    }
}



export default asEntity({ storeKey: 'Login',keepEntity:true })(Login);
