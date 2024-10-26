import React from 'react'

export default function TodoItem({ todo_status, todo_id, todo_title, toggleTodo, deleteTodo}) {
  return (
    <div key={todo_id} className='todo'>
    <label>
     <input type='checkbox' checked={todo_status} onChange={() => toggleTodo(todo_id, todo_status)} />
     <p>{todo_title}</p>
   </label>
   <button onClick={()=> deleteTodo(todo_id)} className='delete'>Delete</button>
    </div>
  )
}
