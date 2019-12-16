import React from 'react'
import TodoItem from './TodoItem';


class TodoList extends React.Component {
   constructor(props){
       super(props);
   }
    render() {
        const { tasks } = this.props;
       // console.log(tasks);
        return (
            <div>             
                {tasks.map(task => (  <TodoItem key={task.id} task={task}/> ))}
            </div>
        );
    }
}

export default TodoList;