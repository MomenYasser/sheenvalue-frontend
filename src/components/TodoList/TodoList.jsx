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
    entityDidDelete(data){
        console.log(data.result)
        alert(data.result.result)
        // this.setState({todos:this.props.$store.deleteData})
    }
    addTodo = (data) => {

        this.props.$store.post(data);
    }
    deleteTask = (index) =>{
        this.props.$store.deleteMethod({todos:this.state.todos,index})
    }
    render(){
        const stateData = this.state.todos;
        let deleteData =this.state.todos
        
        const todos = this.state.todos !== undefined?
  
        
        this.state.todos.map((task,index) => {
            return <div key ={index} onClick = { (e) => this.deleteTask((e,index))}><Task key={index} 
                         index = {index}
                         name ={task.task_name }
                      
                         descritpion = {task.task_description}/>
                         </div>
        }):<p style={{textAlign:'center'}}>Loading...</p>;
        
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