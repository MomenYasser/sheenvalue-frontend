import React from 'react';

import {
    isRequired,
    minLength,
} from '../../Services/Validators';

import FormBuilder from '../../Components/Form/Builder';
import asEntity from '../../Hocs/asEntity';
class SignupScreen extends FormBuilder {
    constructor(props) {
        super(props);

        this.initState({
            form: {
                username: {
                    value: '',
                    validators: [ isRequired('Koko'), minLength(3) ],
                },
                password: {
                    value: '',
                    validators: [ isRequired(), minLength(10) ],
                },
                gender: {
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
            this.props.$store.post(this.formValues);
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
                    label={'Password'}
                    name={'password'}
                />

                <TextField
                    label={'Gender'}
                    name={'gender'}
                />

                <button>Submit</button>
            </form>
        )
    }
}

export default asEntity({ storeKey: "Signup" })(SignupScreen);