import React from 'react';

import {
    isRequired,
    isEmail,
    minLength,
    isEqual
} from '../../Services/Validators';

import FormBuilder from '../../Components/Form/Builder';
import asEntity from '../../HOCs/asEntity';

class SignupScreen extends FormBuilder {
    constructor(props) {
        super(props);

        this.initState({
            form: {
                username: {
                    value: '',
                    validators: [ isRequired(), minLength(3) ],
                },
                password: {
                    value: '',
                    validators: [ isRequired(), minLength(10) ],
                },
                confirmPassword: {
                    value: '',
                    validators: [ isRequired() ,isEqual()],
                },
                email: {
                    value: '',
                    validators: [ isRequired(), isEmail() ],
                }
            },
        });
    }

    onSubmit = e => {
        e.preventDefault();

        if (this.isFormValid ) {
            // Do something
           
            console.log(this.formValues);
        } else {
           this.showFormErrors(); 
        }
    }

    render() {
        const { TextField } = this;        

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Signup</h1>

                <TextField
                    label={'Username'}
                    name={'username'}
                />
                
                <TextField
                    label={'Email'}
                    name={'email'}
                />

                <TextField
                    label={'Password'}
                    name={'password'}
                />

                <TextField
                    label={'ConfirmPassword'}
                    name={'confirmPassword'}
                />
                

                <button>Submit</button>
            </form>
        )
    }
}

export default asEntity ({key:"signup"}) (SignupScreen) ;