import React, { useState } from 'react'

export default function TodoForm(props) {

    const [todoTitle, setTodoTitle] = useState('')

  return (
    <div className='content-center mx-auto mt-11'>
        <input type="text" value={todoTitle} onChange={(event)=>setTodoTitle(event.target.value)}  className='w-7/12 border p-2 h-8 shaodow-md border-blue-400 rounded-md'/>
        <button className='bg-blue-200 w-3/12  h-8 rounded-md ml-3 border shadow-md' onClick={()=>{props.addTodo(todoTitle); setTodoTitle('')}}>Add</button>
    </div>
  )
}
