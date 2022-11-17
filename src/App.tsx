import React,{FC, ChangeEvent, useState} from 'react';
import './App.css';
import {ITask} from "./Interfaces"
const App:FC = ()=>{
const [task,setTask] =  useState <string>("")
const [deadline,setDealine] = useState <number>(0)
const [todoList,setTodoList] =  useState <ITask[]>([])
 
const handleChange=(event:ChangeEvent<HTMLInputElement>):void =>{
  if(event.target.name === "task"){ 
    setTask(event.target.value);
  }else{
    setDealine(Number(event.target.value))
  }   
   
}
const addTask =():void =>{
  const newTask = {taskName:task,deadline:deadline};
  setTodoList([...todoList,newTask])
  setTask("")
  setDealine(0)
   
} 


  


  return(
    <div className='App'>
      <div className='header'>
        <div className='in putContainer'>
         <input type={"text"} name="task" value={task} onChange={handleChange} placeholder="task "/>  
         <input type={"number "} name="deadlime" value={deadline } onChange={handleChange} placeholder="Deadline (in days) " />
         </div>  
         <button onClick={addTask}>Add</button>
         </div>
      <div className='todoList'  ></div>
    </div>
  )
}

export default App;
