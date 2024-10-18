
import { useEffect, useState } from 'react';
import './App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(() =>{
    const localValue = localStorage.getItem("ITEM");
    if (localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() =>{
    localStorage.setItem("ITEM", JSON.stringify(todos)) 
  }, [todos])

  function addTodo(title) {
        setTodos((currentTodos) =>{
        return [...currentTodos, {id: crypto.randomUUID(), title, completed: false},
          ]
        })
  }


  function toggleTodo(id, completed) {
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
  <div className='container'>
    <h1 htmlFor='item'>To Do List</h1>
    <NewTodoForm onSubmit={addTodo} />
      <h2>Task List</h2>
    <TodoList todos ={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </div>
  );
}

export default App;
