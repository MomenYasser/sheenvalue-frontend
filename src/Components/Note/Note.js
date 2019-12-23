import React from 'react';
import styles from './Styles'

function Note({
task,
onDeleteTask
}) {
    return (
    <div style={styles.taskContainer}>
        <label style={{margin:'20px' ,color:"red"}} onClick={()=>onDeleteTask(task)}>X</label>
        <div style={{width:'100%',height:'40%'}}>
            <label style={{color:'white',display: "block",textAlign:'center'}}>{task.name}</label>
        </div > 
        <div style={{width:'100%',height:'50%'}}>
            <label style={{display: "block",textAlign:'center',color:'white'}}>{task.description}</label>
        </div > 
    </div>
    );
}

export default Note;