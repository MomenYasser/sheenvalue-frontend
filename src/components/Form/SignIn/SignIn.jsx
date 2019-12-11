import React from 'react'
import Form from '../Form'
import {isEmail,isRequired,minLength} from '../../Services/Validators'
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
                validators: [ isRequired(), minLength(10) ],
            },
        },
    })
      console.log(this.state.form)
  }
  onSubmit = e => {
    e.preventDefault();

    if (this.isFormValid) {
        // Do something
        console.log(this.formValues);
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
export default SignIn