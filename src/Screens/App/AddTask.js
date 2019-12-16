import React from 'react';

import {
    isRequired,
    minLength,
} from '../../Services/Validators';

import FormBuilder from '../../Components/Form/Builder';

class Addtask extends FormBuilder {
    constructor(props) {
        super(props);

        this.initState({
            form: {
                task_name: {
                    value: '',
                    validators: [ isRequired(), minLength(3) ],
                },
                task_description: {
                    value: '',
                    validators: [ isRequired(), minLength(3) ],
                },
            },
        });
    }

    onSubmit = e => {
        e.preventDefault();

        if (this.isFormValid) {
            this.props.onAddTask(this.formValues);
        } else {
           this.showFormErrors(); 
        }
    }

    render() {
        const { TextField } = this;        

        return (
            <form onSubmit={this.onSubmit} style={{textAlign:'center'}}>
                <h1>Add Task</h1>
                
                <TextField
                    label={'Task Name'}
                    name={'task_name'}
                />

                <TextField
                    label={'Task Description'}
                    name={'task_description'}
                />
                <br/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Addtask;