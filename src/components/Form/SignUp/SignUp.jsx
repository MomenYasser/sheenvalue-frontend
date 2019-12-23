import React, { Component } from 'react'
import Form from '../Form'
import {connect} from 'react-redux'
import {loggedIn} from '../../myStore/actions/accountAction'
import {isRequired,minLength, isEmail} from '../../Services/Validators'
import Router from '../../Router/Router'
import asEntity from "../../HOCs/asEntity";
class SignUp extends Form {
    constructor(props) {
        super(props);
        
        this.initState({
            form: {
                username: {
                    value: '',
                    validators: [ isRequired('User Name Here'), minLength(3),isEmail() ],
                },
                password: {
                    value: '',
                    validators: [ isRequired(), minLength(10) ],
                },
                gender: {
                    value: '',
                    validators: [ isRequired()],
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
            // this.props.loggedIn()
            // console.log(this.formValues)
            // Router.go('/todo-list')
            this.props.$store.post(this.formValues)
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
const mapStateToProps = state =>{
    return{
      isLoggedIn: state.account.isLoggedIn
    }
  }
export default asEntity({storeKey:'SignUp'})( SignUp );