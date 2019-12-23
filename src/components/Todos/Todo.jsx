import React from 'react';

const Todo = ({
  task_name,
  task_description,
  removeHandelr,
  valueChange,
  index
}) => {
  const onChange =(e)=>{
    e.preventDefault();
    valueChange({value:e.target.value,index:index})
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

