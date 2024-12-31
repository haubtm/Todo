import React, { useState } from 'react'

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState('hau')
    const { addNewTodo } = props

    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput('')
    }

    const handleOnChange = () => {
        setValueInput(event.target.value)
    }

    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput} />
            <button onClick={handleClick}>Add</button>
            <div>
                My text is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew