"use client"

import { useEffect, useState } from "react"

export default function Todo() {
  const [todo, setTodo] = useState({})

  useEffect(() => {
    async function fetchTodo () {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      const todo = await response.json()
      setTodo(todo)
    }

    fetchTodo();
  }, [])

  return (
    <div className="todos">
      <h1>todo title: {todo.title}</h1>
    </div>
  )
}