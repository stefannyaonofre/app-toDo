import React from 'react'

const ListOfTodos = ({list}) => {
  return (
    <div>
        <ol>
            {list.map((tarea) => (
                <li key={tarea.id}>
                    <input type="checkbox" checked={tarea.completed}/>
                    <label>{tarea.name}</label>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default ListOfTodos