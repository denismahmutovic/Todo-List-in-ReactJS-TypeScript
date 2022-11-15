import React,{FC, useState} from 'react';
import './App.css';

const App:FC = ()=>{
const [task,setTask] =  useState <string>("")
const [deadline,setDealine] =  useState <string>("")
const [todo,setTodoList] =  useState ([])
 





  return(
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
         <input type={"text"} placeholder="task " />
         <input type={"number "} placeholder="Deadline (in days) " />
         </div>  
         <button>Add</button>
         </div>
      <div className='todoList'  ></div>
    </div>
  )
}

export default App;
