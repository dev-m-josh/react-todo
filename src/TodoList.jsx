import React from 'react'
import TodoItem from './TodoItem';
import './App.css'

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className='list'>
    {todos.length === 0 && "No Todos"}
    {todos.map(todo =>{
      return (
        <TodoItem {...todo}
        key={todo.todo_id}
        todo_id={todo.todo_id} 
        todo_title={todo.todo_title} 
        todo_status={todo.todo_status}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} />
      )
    })}
  </div>
  )
}
