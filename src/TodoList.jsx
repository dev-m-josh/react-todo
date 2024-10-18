import React from 'react'
import TodoItem from './TodoItem'
import './App.css'

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className='list'>
    {todos.length === 0 && "No Todos"}
    {todos.map(todo =>{
      return (
        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      )
    })}
  </div>
  )
}
