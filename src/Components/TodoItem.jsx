import React from 'react'

export default function TodoItem(props) {
    // console.log('props', props.todo.status);
  return (
    <div className='bg-white border border-blue-100 h-10 w-10/12 mt-4  rounded shadow-md p-2'>
        <input onChange={(event)=>props.updateStatus(event, props.todo.title)} type="checkbox"  className='float-left w-10 h-5'/>
        <h2 className='float-left'>{ (props.todo) ? props.todo.title : '' }</h2>
        
        <button onClick={() => props.removeTodo(props.todo.title)} className='bg-red-600 px-3 float-right rounded ml-4 text-white'>Delete</button>
        { (props.todo && props.todo.status) ? <div className='float-right bg-green-600 px-3 rounded text-white'>Done</div> : 
        <div className='float-right bg-yellow-600 px-3  rounded text-white'>Pending</div> }
    </div>
  )
}
