import {createContext, useState ,useEffect } from 'react';
import './App.css'
import Crads from './Component/Crads';
import { Link } from 'react-router';

const itemContext = createContext();

function App() {
  const [item, setItem] = useState()

useEffect(()=>{
  const timer = setTimeout(async()=>{
    const response =await fetch('https://jsonplaceholder.typicode.com/posts');
     const data = await response.json();
     setItem(data);
  },5000)
  return () => clearTimeout(timer);
},[])

  return (
    <itemContext.Provider value={item}>
    <Crads />
    <div className='flex justify-center align-middle'>
    
     <button className='btn m-2'>
        1
      </button>
     
      <button className='btn m-2'>
       2
      </button>
      <button className='btn m-2'>
        3
      </button>
    </div>
    </itemContext.Provider>
  )
}

export default App
export {itemContext}
