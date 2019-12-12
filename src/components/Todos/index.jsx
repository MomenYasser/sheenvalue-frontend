import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTodo, addTodo } from "../../Redux/Actions/todo";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

class Todos extends Component {
  state = {

  };
  render() {
    return (
      <React.Fragment>
        <div className="todos">
          {this.props.todos.map((todo, index) => {
            return (
              <Todo
                {...todo}
                key={todo.id}
                removeHandelr={() => this.props.removeTodo(index)}
              />
            );
          })}
        </div>
        <AddTodo addHandelr={this.props.addTodo}></AddTodo>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProprs = {
  removeTodo: removeTodo,
  addTodo: addTodo
};

export default connect(mapStateToProps, mapDispatchToProprs)(Todos);
