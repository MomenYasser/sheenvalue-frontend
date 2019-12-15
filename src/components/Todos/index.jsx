import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTodo, addTodo,valueChange } from "../../Redux/Actions/todo";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

class Todos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="todos">
          {this.props.todos.map((todo, index) => {
            return (
              <Todo
                key={index+toString(todo)}
                {...todo}
                removeHandelr={() => this.props.removeTodo(index)}
                valueChange={this.props.valueChange.bind(this,index)}
              />
            );
          })}
        </div>
        <AddTodo  addHandelr={this.props.addTodo}></AddTodo>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  };
};

const mapDispatchToProprs = {
  removeTodo: removeTodo,
  addTodo: addTodo,
  valueChange: valueChange,
};

export default connect(mapStateToProps, mapDispatchToProprs)(Todos);
