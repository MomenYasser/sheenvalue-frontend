import React, { Component } from "react";
import { connect } from "react-redux";
import { filterTodos, addTodo } from "../../store/actions/todoAction";
import "./NewTask.css";
import Form from "../../Form/Form";
class NewTask extends Form {
  state = {
    inputValue: { title: "", desc: "" }
  };
  onChangeTitle = e => {
    e.preventDefault();
    this.setState({ inputValue:{...this.state.inputValue, title:e.target.value } });
    this.props.onSearch(e.target.value);
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputValue);
  };
  onChangeDesc = e => {
    e.preventDefault();
    this.setState({ inputValue:{...this.state.inputValue, desc:e.target.value } });

  };
  render() {
    return (
      <div className="container">
        <input
          type="text"
          className="taskInput"
          onChange={this.onChangeTitle}
          placeholder="Task Title..."
        />
        <input
          type="text"
          className="taskInput"
          onChange={this.onChangeDesc}
          placeholder="Task Description..."
        />
        <button className="submitBtn" onClick={this.onSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(mapStateToProps, { filterTodos, addTodo })(NewTask);
