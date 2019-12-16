import React from 'react';
import maxBy from 'lodash/maxBy';
import reduce from 'lodash/reduce';

class TodoHandler extends React.Component {

    constructor(props){
        super(props);
    }

    onAdd = ( newData ) =>{
        const { tasks , modify } = this.props;
        let curTasks = tasks;
        let id = 0 ;
        if ( curTasks.length ) id = maxBy(curTasks,"id").id +1 ;
        let newTask = {
            id,
            task_name: newData.task_name,
            task_description: newData.task_description,
            timer: 0,
            running: false,
            isDone:false,
            state: 1 
        };
        curTasks.push(newTask);
        
        modify(curTasks);

    } 

    onDelete = (id) => {
        const { tasks , modify } = this.props;
        
        const newTask = reduce(tasks,(result ,value ) =>{
            if ( value.id !== id ) result.push(value);
            return result ;
        },[]);
     
        modify(newTask);
    
    }

    toggleTimer = (id , isRunning , curtimer ) => {
      
       const { tasks , modify } = this.props ;

       const newTask = reduce (tasks,(result,value)=> {
        value.running = false ;
        if ( value.id === id ) {
          if ( !isRunning )  value.running = true;
          value.timer = curtimer; 
        }
        result.push(value);
        return result;
       },[]);

      //console.log(newTask);
       modify(newTask);
    }
}

  
export default TodoHandler ;
