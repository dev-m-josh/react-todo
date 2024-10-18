import React from 'react'

export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <div className='todo'>
    <label>
     <input type='checkbox' checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
     <p>{title}</p>
   </label>
   <button onClick={()=> deleteTodo(id)} className='delete'>Delete</button>
    </div>
  )
}
