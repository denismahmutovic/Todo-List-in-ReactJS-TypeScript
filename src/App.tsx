import React,{FC} from 'react';
import './App.css';

const App:FC = ()=>{
  return(
    <div className='app'>
      <div className='header'>
         <input type={"text"} placeholder="task " />
         <input type={"number "} placeholder="D  m   eadline (in days) " />
         <button>Add Task</button>
         </div>
      <div className='todoList'  ></div>
    </div>
  )
}

export default App;
