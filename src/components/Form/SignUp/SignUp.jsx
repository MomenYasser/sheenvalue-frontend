import React, { Component } from 'react'
import Form from '../Form'
import {isRequired,minLength, isEmail} from '../../Services/Validators'
class SignUp extends Form {
    constructor(props) {
        super(props);
        
        this.initState({
            form: {
                username: {
                    value: '',
                    validators: [ isRequired('Koko'), minLength(3),isEmail() ],
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
    isEqual = (value1 ) => {
        return value1 === this.state.form.password.value
    }
    onSubmit = e => {
        e.preventDefault();

        if (this.isFormValid) {
            // Do something
            console.log(this.formValues);
        } else {
           this.showFormErrors(); 
        }
    }
    render(){
        const {TextField} = this
        return(
          
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
export default SignUp