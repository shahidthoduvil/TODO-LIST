import React, { useEffect, useState } from 'react'
import './Todo.css';
import ListTask from './ListTask';
import AddTask from './AddTask';



const Todo = () => {
    const[tasks,setTasks]=useState([]);
  
    const addTask=(tittle)=>{
        const newTask=[...tasks,{tittle}]
        setTasks(newTask);
    }

    const removeTask=(index)=>{
        if(window.confirm(`Are you sure you want to delete the task?`)){
            const newTask=[...tasks];
            newTask.splice(index,1);
            setTasks(newTask);
        }
            
        

    }
    
  return (
    <div className='todo-container'>
        <div className='header'>TODO LIST</div>
        <div className='add-task'>
            <AddTask addTask={addTask}/>
        </div>
        <div className='tasks'>
            {tasks.map((task,index)=>(
                  <ListTask task={task} removeTask={removeTask} index={index} key={index}/>
            ))}
           
        </div>
    </div>
  )
}


export default Todo