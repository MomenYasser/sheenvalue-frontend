import React from 'react'
import Form from '../Form'
import {isEmail,isRequired,minLength} from '../../Services/Validators'
import Router from '../../Router/Router'
import {loggedIn} from '../../store/actions/accountAction'
import {connect} from 'react-redux'
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
        Router.go('/todo-list')
        this.props.loggedIn()
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
  }
export default connect(mapStateToProps,{loggedIn})( SignIn )