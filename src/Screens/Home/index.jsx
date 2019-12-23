import React, { Component } from 'react';
import Todos from '../../components/Todos';
import Search from '../../components/Todos/Search';
import asEntity from "../../Hocs/asEntity"
class Home extends Component {
    state={
        todos:[],
    }
    componentDidMount(){
        console.log(this.props.$store)
        this.props.$store.get();
    }
    entityDidGet(data) {
        this.setState({todos:[...this.state.todos,...data.todos]})  
    }
    entityDidPost(data) {
        this.setState({
            todos:[
            ...this.state.todos,
            {
              task_name: data.name,
              task_description: data.description,
              id: this.state.todos.length,
              done: false
            }
        ]})  
    }
    entityDidDelete(data){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== data.id)})
    }
    entityDidPut(data){
     let todos=[...this.state.todos];
    //  todos[data.index].task_name=data.value;
    todos[data.index]={...todos[data.index],task_name:data.value}
    console.log(todos)
     this.setState({todos:todos})
    }
    render() { 
        return (
            <>
              <Search/>
              <Todos todos={this.state.todos} $store={this.props.$store}/> 
           </>
        );
    }
}
 
export default asEntity({ storeKey: "todos" })(Home);