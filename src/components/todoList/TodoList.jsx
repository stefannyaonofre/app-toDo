import React, { useState } from 'react'
import FormToDo from '../formToDo/FormToDo.jsx'
import ListOfTodos from '../listOfTodos/ListOfTodos.jsx'

const TodoList = () => {
    const initialValue = [
        {
            id: 1,
            name: "Ver la grabacion de la clase",
            completed: false
        },
        {
            id: 2,
            name: "Hacer almuerzo",
            completed: true
        },
        {
            id: 3,
            name: "Enviar el workshop",
            completed: false
        }
    ]
    const [todo, setTodo] = useState(initialValue);
  return (
    <div>
        <FormToDo />
        <ListOfTodos list={todo} />
    </div>
  )
}

export default TodoList