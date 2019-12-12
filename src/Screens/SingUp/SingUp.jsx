import React from "react";
import Logic from "../../components/Form/FormObjectLogic";
import {isSame,minLength,isEmail,isRequired} from "../../Services/Validators"

class SingUp extends Logic {
  constructor(props) {
    super(props);

    
    this.state={
      form: {
        email: {
          value: "",
          validators: [isEmail(), isRequired()]
        },
        password: {
          value: "",
          validators: [
             minLength(5),
             isRequired(), 
             isSame(
               ()=>{return this.state.form.confirmpassword.value},
               " Password Field is not same as  Confirm Password  "
               )],
          pass:true,
  
        },
        confirmpassword: {
          value: "",
          validators: [isRequired()],
          pass:true,
  
        }
      }
    };
    this.initFields();

  };
  submit = e => {
    e.preventDefault();
    this.validate();
  };

  render() {
    const { TextField } = this;
    return (
      <form onSubmit={this.submit}>
      <h1>Login</h1>

      <TextField placeholder={"Email"} name={"email"} />

      <TextField placeholder={"Password"} name={"password"} pass/>

      <TextField placeholder={"Confirm Password"} name={"confirmpassword"} pass/>

      <button className="submitButton">Submit</button>
    </form>
    );
  }
}

export default SingUp;
