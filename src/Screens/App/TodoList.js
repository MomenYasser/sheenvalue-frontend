import React from 'react'
import TodoItem from './TodoItem';


class TodoList extends React.Component {
   constructor(props){
       super(props);
   }
    render() {
       
       // console.log(tasks);
        return (
            <div>             
                {[].map(task => (  <TodoItem key={task.id} task={task}/> ))}
            </div>
        );
    }
}

export default TodoList;