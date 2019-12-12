import React ,{ Component } from "react";
import forEach from "lodash/forEach"
import TextField from "../Form/Text/TextField"
class Logic extends Component {
  inputHandler = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: {
          ...this.state.form[e.target.name],
          value: e.target.value
        }
      }
    });
  };
  async getTokens(api,data) {
    //const response = await fetch(api,data);
    // return response;
    return("1234")
  }
  commonFieldProps({ name, ...rest }) {
    const { form } = this.state;   
    
    return {
        value: form[name].value,
        onChange: this.inputHandler,
        ...rest,
    };
}

  initFields() {
    const fields = {
        TextField,
    };        

    forEach(fields, (Component, FieldName) => {
        this[FieldName] = props => (
            <Component
                {...props}
                {...this.commonFieldProps(props)}
            />
        )
    })
}
  validate = () => {
    let temp = { message: "logedin" };
    const { form } = this.state;   

    for (const key in form) {
      const field = form[key];
      for (const validator in field.validators) {
        temp = field.validators[validator](field.value);
        if (!temp.valid) {
          alert(temp.message);
          return false;
        }
      }
    }
    return true
  };
}

export default Logic;
