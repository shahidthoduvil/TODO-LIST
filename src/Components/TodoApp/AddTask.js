import React, { useEffect, useState } from 'react'

const AddTask = ({addTask,tasks}) => {
    const [value,setValue]=useState("");
    const [taskSet, setTaskSet] = useState(new Set(tasks));
   
   

    const additem=()=>{
        if(value.trim()===''){
            alert('please enter a value');
             return;
        }
      
         
    if (taskSet.has(value.toLowerCase())) {
        alert('Task already exists');
        return;
      }
  
      addTask(value);
      setTaskSet(prevSet => new Set(prevSet).add(value.toLowerCase()));
      setValue('');
    };
  return (
    <>
        <div className='input-container'>
        <input  className="input"type="text" placeholder='Add a new task'
        value={value
        }
        onChange={(e)=>(setValue(e.target
        .value))}/>
        <button onClick={additem}className='add-btn'>ADD</button>
        </div>
    </>
  )
}

export default AddTask