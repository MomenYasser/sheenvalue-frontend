import React from "react";
import Logic from "../../components/Form/FormObjectLogic";
import { minLength, isEmail, isRequired } from "../../Services/Validators";
import Router from "../../components/Router"


class Login extends Logic {
  constructor(props) {
    super(props);
    this.state = {
    form: {
        email: {
          value: "",
          validators: [isEmail(), isRequired()]
        },
        password: {
          value: "",
          validators: [minLength(5), isRequired()],
        }
      }
    };
    this.initFields();

  };

  submit = e => {
    e.preventDefault();
    const valid = this.validate();
    if (valid) {
      localStorage.setItem("Token", "12345");
      this.props.setLoged(true);
      Router.go("/home");
    }
  };

  render() {
    const { TextField } = this;

    return (
      <form onSubmit={this.submit}>
        <h1>Login</h1>

        <TextField placeholder={"Email"} name={"email"} />

        <TextField placeholder={"Password"} name={"password"} pass />

        <button className="submitButton">Submit</button>
      </form>
    );
  }
}

export default Login;
