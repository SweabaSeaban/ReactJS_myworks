import { useEffect, useState } from 'react'
import './style.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

function App() {
  
  const [todos,setTodos]=useState(()=>{
    const localVal=localStorage.getItem("ITEMS")
    if(localVal==null) return []

    return JSON.parse(localVal)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function addTodo(title){
    setTodos((currentTodos)=>{
      return [
        ...currentTodos,
        {
          id:crypto.randomUUID(),title,completed:false
        },
      ]
    })
  }

  function toggleTodo(id,completed)
  {
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id)
        {
          return{...todo,completed}
        }
        console.log(todo)
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(t=>t.id!==id)
    })
  }
  
  return (
    <div>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">
        Todo List
      </h1>
      <TodoList todos={todos} 
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
