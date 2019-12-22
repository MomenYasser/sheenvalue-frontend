import React from 'react';

import {
    isRequired,
    isEmail,
    minLength,
} from '../../Services/Validators';

import FormBuilder from '../../Components/Form/Builder';
import asEntity from '../../HOCs/asEntity';

class LoginScreen extends FormBuilder {
    constructor(props) {
        super(props);

        this.initState({
            form: {
                email: {
                    value: '',
                    validators: [ isRequired(), isEmail() ],
                },
                password: {
                    value: '',
                    validators: [ isRequired(), minLength(10) ],
                },
            },
        });
    }

    onSubmit = e => {
        e.preventDefault();

        if (this.isFormValid) {
            // Do something
            this.login();
            
        } else {
           this.showFormErrors(); 
        }
    }

    render() {
        const { TextField } = this;        

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                
                <TextField
                    label={'Email'}
                    name={'email'}
                />

                <TextField
                    label={'Password'}
                    name={'password'}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default asEntity({key:"login"}) (LoginScreen);