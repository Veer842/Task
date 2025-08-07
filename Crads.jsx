import React,{useContext, useRef} from 'react'
import { itemContext } from '../App'
import '../App.css'
function Crads() {
  const card = useContext(itemContext);
  console.log(card)
  const refs = useRef();
  const handledelete = (id)=>{
  refs.current.style.display = "none";
  }
  return (
    <div className='w-full flex flex-wrap justify-center align-middle gap-3 overflow-hidden'>
     {card?.map((items)=>{
      if(items.id <= 6){
      return(
        <div key={items.id} className='border-2 my-2 w-[40%]' ref={refs}>
          <div className='deletitem' onClick={()=>handledelete(items.id)}>&#10006;</div>
<p className='text-xl font-medium text-gray-700 p-2'>{items.body}</p>
<p className='text-lg font-bold text-indigo-400'>{items.title}</p>
        </div>
      )
     }})}
    </div> 
  )
}

export default Crads
