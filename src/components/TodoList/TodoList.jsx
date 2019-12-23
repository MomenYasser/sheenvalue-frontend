import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getTodos , search} from '../myStore/actions/todoAction'
import Task from './Task/Task'
import NewTask from './New Task/NewTask'
import asEntity from "../HOCs/asEntity";
class TodoList extends Component{
    state = {
        keyword : ''
    };

    componentDidMount() {
       // this.props.getTodos()
        this.props.$store.get()
    }
    get list(){
        const {keyword} = this.state;
        if (this.props.searchKeyword){
            return this.props.filtered
        }
        return this.props.todos
    }
    onSearch = (keyword) => {

        this.props.search(keyword)
        // this.setState({keyword})
    };
    entityDidGet(data){
        this.setState({todos:data.todos})
    }
    entityDidCatch(data){
        alert(data)
    }
    entityDidPost(data){
        console.log(data)
        let res = data.todo
        this.setState({todos: this.state.todos.concat(res)})
    }
    addTodo = (data) => {

        this.props.$store.post(data);
    }
    render(){
        const todos = this.state.todos !== undefined?
        this.state.todos.map((task,index) => {
            return <Task key={index} 
                         index = {index}
                         name ={task.task_name }
                         descritpion = {task.task_description}/>
        }):<p style={{textAlign:'center'}}>Loading...</p>;
        const stateData = this.state.todos;
        
        return <div>
        <NewTask onSearch = {this.onSearch} addTodo={(stateData )=>{this.addTodo(stateData)}}/>

          {todos}
        </div>
    }

}
const mapStateToProps = state =>({
    todos : state.todo.todos,
    isSearch : state.todo.isSearch,
    filtered : state.todo.filtered,
    searchKeyword: state.todo.searchKeyword
});

export default asEntity({storeKey:'Todos'})(TodoList);