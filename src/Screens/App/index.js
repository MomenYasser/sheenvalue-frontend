import React from 'react';
import AppHeader from '../../Components/Header/AppHeader';
import Addtask from './AddTask';
import TodoList from './TodoList';
import TodoHandler from '../../Components/TodoItem/TodoHandler';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions';

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
const mapStateToProps = state =>{
    return {
        tasks : state.root.tasks
   };
  } 

  const mapDispatchToProps = {
    modify : actions.modify
  };
  
export default connect (mapStateToProps , mapDispatchToProps)  (AppScreen);