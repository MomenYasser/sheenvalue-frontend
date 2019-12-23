import React from "react";
import Logic from "../../components/Form/FormObjectLogic";
import { minLength, isEmail, isRequired } from "../../Services/Validators";
import Router from "../../components/Router";
import asEntity from '../../Hocs/asEntity';
// import { connect } from "react-redux";
// import { logedin } from "../../Redux/Actions/Register";

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
          validators: [minLength(5), isRequired()]
        }
      }
    };
    this.initFields();
  }

  submit = e => {
    e.preventDefault();
    const valid = this.validate();
    if(valid){
      this.props.$store.post(this.formValues);
    }
  };
  entityDidPost(data) {
    console.log('entityDidPost', data);
    localStorage.setItem("Token",data.token)
    // this.props.setAuth(true)
    Router.go("/home");

}

  entityDidCatch(method, { errors }) {
      alert("Somethin went wrong");
  }

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

// const mapStateToProps = state => {
//   return {
//     LOGED: state.Register.LOGED
//   };
// };

// const mapDispatchToProprs = {
//   logedin: logedin,
// };

// export default connect(mapStateToProps, mapDispatchToProprs)(Login);
export default asEntity({ storeKey: "Login" })(Login);
