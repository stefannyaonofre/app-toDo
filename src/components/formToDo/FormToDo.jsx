import React from 'react';
import useForm from '../hooks/useForm.jsx';

const FormToDo = () => {

    const [dataForm, handleChange, resetForm] = useForm({name:''}); 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dataForm);
        resetForm();
    }

  return (
    <div>
        <h2>Escribe tu ToDo</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Ingrese una nueva tarea' name="name" onChange={handleChange} value={dataForm.name} />
            <button type="submit">Crear ToDo</button>
        </form>
    </div>
  )
}

export default FormToDo