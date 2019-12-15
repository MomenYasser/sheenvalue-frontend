import React ,{useState}from 'react';

const Todo = ({
  task_name,
  task_description,
  removeHandelr,
  valueChange
}) => {
  const onChange =(e)=>{
    e.preventDefault();
    valueChange(e.target.value)
  }
  return (
    <>
    <div className="todoDiv">
      <input type="text" value={task_name} onChange={onChange}/>
      {task_description===""
      ? null
      : <p>{task_description}</p>
      }
      <button onClick={removeHandelr}>remove</button>
    </div>
 </>
  );
}

export default Todo;

