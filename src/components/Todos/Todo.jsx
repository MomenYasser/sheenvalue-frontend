import React from "react";

const Todo = props => {
  const onChange = e => {
    e.preventDefault();
    props.valueChange({ value: e.target.value, index: props.index });
  };
  return (
    <>
      <div className="todoDiv">
        <input type="text" value={props.task_name} onChange={onChange} />
        <p>{props.task_description}</p>
        <button onClick={props.removeHandelr}>remove</button>
      </div>
    </>
  );
};

export default Todo;
