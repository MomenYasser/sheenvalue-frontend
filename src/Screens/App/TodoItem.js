import React from 'react';
import DropMenu from '../../Components/TodoItem/DropMenu';
import ButtonTimer from '../../Components/TodoItem/ButtonTimer';
import TodoHandler from '../../Components/TodoItem/TodoHandler';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions';


class TodoItem extends TodoHandler {


 
    render() {
        const { task } = this.props;
        return (
            <div style={style}>
             
                   {task.task_name} {' '}
                   {task.task_description || ''}

                      <ButtonTimer  id={task.id}  onPress={this.toggleTimer} on={task.running} timer={task.timer}/>
                      
                      <DropMenu id={task.id} onDelete={this.onDelete}/>
                   
            
            </div>
        );
    }
}
const style = {
    background: '#F4F4F4',

    padding: '20px',
    borderBottom: '1px #ccc dotted',
}

const mapStateToProps = state =>{
    return {
        tasks : state.root.tasks
   };
  } 

  const mapDispatchToProps = {
    modify : actions.modify
  };
  
export default connect (mapStateToProps,mapDispatchToProps)  (TodoItem);