import React from 'react';

export default function todo({
  task_name,
  removeHandelr
}) {
  return (
    <>
       <div className="todoDiv">
         {task_name}
         <button onClick={removeHandelr}>remove</button>
       </div>
    </>
  );
}
