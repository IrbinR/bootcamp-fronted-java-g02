import { useState } from "react"
// TODO: Realizar la edición de una tarea
const App = () => {
  // const DEFAULT_TODOS = [
  //   {
  //     id: '1',
  //     title: 'Aprender Javascript',
  //     completed: false
  //   },
  //   {
  //     id: '2',
  //     title: 'Aprender Java',
  //     completed: true
  //   },
  //   {
  //     id: '3',
  //     title: 'Aprender CSS y HTML', 
  //     completed: false
  //   }
  // ]

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  )
  //const[todos, setTodos] = useState(DEFAULT_TODOS)
  const [input, setInput] = useState('')
  const handleChange = (event) => {
    // Estamos capturando lo que escribimos en la caja de texto
    //console.log(event.target.value);
    const value = event.target.value
    setInput(value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    
    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    const updatedTodos = [ ...todos, newTodo]
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setInput('')
  }
  const handleRemoveTodo = (event) => {
    const idSelected = event.target.dataset.id
    //console.log('Elimininando una tarea ...', idSelected)
    const newTodos = todos.filter(todo=> todo.id !== idSelected)
    console.log(newTodos);
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }
  const handleCompleteTodo = (event) => {
    console.log('Completando tarea...');
    const idSelected = event.target.dataset.id
    const isChecked = event.target.checked

    const newTodos = todos.map(todo => {
      if(todo.id === idSelected) {
        return {...todo, completed: isChecked}
      }
      return todo
    })
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }
  const completedTodos = todos.filter(todo => todo.completed === true)

  const handleClearTodos = () => {
    // DONE: Necesitamos remover las tareas que estan completadas
    console.log('limpiando tareas...');
    const incompletedTodos = todos.filter(todo => todo.completed === false)
    setTodos(incompletedTodos)
    localStorage.setItem('todos', JSON.stringify(incompletedTodos))
  }
  return (
    <main className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg p-4 shadow-2xl">
      <h1 className="text-2xl font-bold text-center">TODO APP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="¿Qué deseas hacer hoy?" required className="w-full border my-3 p-3 rounded-lg" onChange={handleChange}  value={input}/>
        {/*input*/}
      </form>

      <div className="flex justify-between items-center">
        <span>
          {completedTodos.length} de {todos.length}
        </span>
        <button className="bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-700 duration-300" onClick={handleClearTodos}>
          Limpiar tareas completadas
        </button>
      </div>

      <section className="mt-4">
        <ul className="flex flex-col gap-2">
          {todos.map( todo => {
            return (
              <li className="flex" key={todo.id}>
                <input type="checkbox"  className="mr-2" data-id={todo.id} onChange={handleCompleteTodo} checked={todo.completed}/>
                <div className="w-full flex justify-between items-center">
                  <div className={todo.completed ? 'line-through' : ''}>
                    {todo.title}
                  </div>
                  <button className="bg-red-300 rounded-lg px-1 py-1"  data-id={todo.id} onClick={handleRemoveTodo}>
                    ❌
                  </button>
                </div>
              </li>
            )
          })}
          
           
        </ul>
      </section>
      <pre className="border mt-6 bg-slate-50 rounded-md">{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App