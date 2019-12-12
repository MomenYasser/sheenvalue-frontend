import React from 'react';

export default function todo({
  task_name,
  task_description,
  removeHandelr
}) {
  return (
    <>
       <div className="todoDiv">
         <h5>
            {task_name}
         </h5>
         {task_description===""
         ? null
         : <p>{task_description}</p>
         }
         <button onClick={removeHandelr}>remove</button>
       </div>
    </>
  );
}
