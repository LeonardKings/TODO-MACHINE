import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../Context/TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    
    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
        addTodo(newTodoValue);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO!</label>
            <textarea 
            placeholder='Limpiar los zapatos'
            value={newTodoValue}
            onChange={onChange}
            ></textarea>
            <div className='TodoForm-buttonContainer'>
                <button type='button'
                className='
                TodoForm-button
                TodoForm-button--cancelButton'
                    onClick={onCancel}
                >Cancelar</button>
                <button type='submit'
                className='
                TodoForm-button
                TodoForm-button--addButton'>Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };