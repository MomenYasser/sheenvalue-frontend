import React, { Component } from "react";
// import { connect } from "react-redux";
// import { removeTodo, addTodo,valueChange } from "../../Redux/Actions/todo";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

class Todos extends Component {
   removeTodo=(data)=>{
    this.props.$store.delete(data);
   }
   addTodo=(data)=>{
    this.props.$store.post(data);
   }
   valueChange=(data)=>{
     this.props.$store.put(data)
   }
  render() {
    return (
      <React.Fragment>
        <div className="todos">
          {this.props.todos.map((todo, index) => {
            return (
              <Todo
                key={index+toString(todo)}
                index={index}
                {...todo}
                removeHandelr={() => this.removeTodo(index)}
                valueChange={this.valueChange}
              />
            );
          })}
        </div>
        <AddTodo  addHandelr={this.addTodo}></AddTodo>
      </React.Fragment>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     todos: state.todo.todos
//   };
// };

// const mapDispatchToProprs = {
//   removeTodo: removeTodo,
//   addTodo: addTodo,
//   valueChange: valueChange,
// };

// export default connect(mapStateToProps, mapDispatchToProprs)(Todos);
export default  Todos;

