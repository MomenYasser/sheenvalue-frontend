import React from 'react';
import AppHeader from '../../Components/Header/AppHeader';
import Addtask from './AddTask';
import TodoList from './TodoList';
import TodoHandler from '../../Components/TodoItem/TodoHandler';
import { connect } from 'react-redux';
import asEntity from '../../HOCs/asEntity';

class AppScreen extends TodoHandler {
    
    constructor(props){
        super(props);
       
    }
    
  
    render() {
        const { tasks } = this.props; 
        
        return (
            <div>
                <AppHeader/>
                <Addtask onAddTask={this.onAdd} />
                <TodoList tasks={tasks} />               
            </div>
        )
    }
}

export default asEntity() (AppScreen);