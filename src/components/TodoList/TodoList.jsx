import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getTodos , search} from '../store/actions/todoAction'
import Task from './Task/Task'
import NewTask from './New Task/NewTask'
class TodoList extends Component{
    state = {
        keyword : ''
    }

    componentDidMount() {
       this.props.getTodos()
    }
    get list(){
        const {keyword} = this.state
        if (this.props.searchKeyword){
            return this.props.filtered
        }
        return this.props.todos
    }
    onSearch = (keyword) => {

        this.props.search(keyword)
        // this.setState({keyword})
    }
    render(){
        const viewTodos = this.props.isSearch ? this.props.filtered : this.props.todos
        const todos = 
         this.list.map((task,index) => {
            return <Task key={index} 
                         index = {index}
                         name ={task.task_name}
                         descritpion = {task.task_description}/>
        })

        
        return <div>
        <NewTask onSearch = {this.onSearch}/>

          {todos}
        </div>
    }

}
const mapStateToProps = state =>({
    todos : state.todo.todos,
    isSearch : state.todo.isSearch,
    filtered : state.todo.filtered,
    searchKeyword: state.todo.searchKeyword
})

export default connect(mapStateToProps,{getTodos,search} )(TodoList);