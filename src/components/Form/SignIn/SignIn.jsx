import React from 'react'
import Form from '../Form'
import {isEmail,isRequired,minLength} from '../../Services/Validators'
import Router from '../../Router/Router'
import {loggedIn} from '../../myStore/actions/accountAction'
import {connect} from 'react-redux'
import asEntity from "../../HOCs/asEntity";
class SignIn extends Form{
  constructor(props) {
      super(props)
      this.initState({
        form: {
            email: {
                value: '',
                validators: [ isRequired(), isEmail() ],
            },
            password: {
                value: '',
                validators: [ isRequired(), minLength(5) ],
            },
        },
    })
  }
  onSubmit = e => {
    e.preventDefault();

    if (this.isFormValid) {
        // Do something
        this.props.$store.post(this.formValues);
        console.log(this.props.$store.didPost)


    } else {
       this.showFormErrors(); 
 
}

};

    validateEmpty = () =>{
        for(let key in this.state.Form){
            if(this.state.Form[key]==='')
            alert('Please Fill all Fields')
            break
        }
    }
    entityDidGet(data){

    }
    entityDidCatch(data){
        alert(data.errors)
    }
    entityDidPost(data){
        console.log(data)
            Router.go('/todo-list')
    }
    render(){
        const {TextField} = this
        return    <form onSubmit={this.onSubmit}>
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
    }
}
const mapStateToProps = state =>{
    return{
      isLoggedIn: state.account.isLoggedIn
    }
  };
export default asEntity({storeKey:'Login'})( SignIn )