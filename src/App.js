
import { useEffect, useState } from 'react';
import './App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfbmFtZSI6IkJvYiBTbWl0aCIsInVzZXJfZW1haWwiOiJib2Iuc21pdGhAMjQuY29tIiwidXNlcl9wYXNzd29yZCI6IkJsdWVTa3khODgifSwiaWF0IjoxNzI5NzkyMDU2fQ.sj1jw2-C4vuHHCZldlH6Qh97VBpPHgpsv6Z7TG6W77I'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() =>{
    const fetchTodos = async ()=>{
      try {
        const response = await axios.get('http://localhost:3500/todos?page=1&pageSize=10');
        setTodos(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchTodos()
  }, []);

  //add new todo
  async function addTodo(todo_title) {
    const newTodo = {todo_title, todo_status: false};

    try {
      const response = await axios.post('http://localhost:3500/todos', JSON.stringify(newTodo), {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      setTodos((prevTodos) => [...prevTodos, response.data])
    } catch (error) {
      console.error(error);
    }
  }

  // Log todos to see if the new todo is added
  useEffect(() => {
    console.log(todos); 
  }, [todos]);
  


  function toggleTodo(id, todo_status) {
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.todo_id === id){
          return {...todo, todo_status}
        }
        return todo
      })
    })
  }

  
  function deleteTodo(id) {
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.todo_id !== id)
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
