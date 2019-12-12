import React from "react";
import logic from "../../components/Form/FormObjectLogic";

class AddTodo extends logic {
    constructor(props) {
        super(props);
        this.state = {
        form: {
            name: {
              value: "",
            },
            description: {
              value: "",
            }
          }
        };
        this.initFields();
    
      };
      submit=(e)=>{
         e.preventDefault();
         console.log(this.state.form)
         const { name,description } = this.state.form
         this.props.addHandelr(name.value,description.value)
          
      }
      render() {
        const { TextField } = this;
        return (
          <form onSubmit={this.submit}>
                  
          <TextField placeholder={"task"} name={"name"} />
          <TextField placeholder={"description"} name={"description"} />
    
    
    
          <button className="submitButton">Submit</button>
        </form>
        );
      }
}

export default AddTodo;
