import './style.css'
import { useEffect, useState } from 'react'
import NewTodoForm from './NewTodoForm'
import { TodoList } from './Todolist'
import { ShowPercentage } from './ShowPercentage'

export default function App () {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })


  useEffect (() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])

  function addTodo (title) {
      setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title , completed: false },
      ]
    })
  }

  function toggleTodo (id, completed) {
    setTodos (currentTodos => {
      return currentTodos.map (todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo (id) {
    setTodos (currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }

  function deleteAll ()  {
    localStorage.removeItem(todos)
    setTodos([])
  }

  return (
    <>
<NewTodoForm onSubmit={addTodo} />
<div className='form-column'>
<h1 className="header" >Todo List </h1>
<button className='delete-all-btn' onClick={deleteAll}>Delete All</button>  
</div>
<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
<ShowPercentage todos={todos} />
</>
)
}