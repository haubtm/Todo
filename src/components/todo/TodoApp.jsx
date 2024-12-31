import ReactLogo from '../../assets/react.svg'
import TodoData from './TodoData'
import TodoNew from './TodoNew'
import { useState } from "react"
import './todo.css'

const TodoApp = () => {
    const [toDoList, setToDoList] = useState([])

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 10000000),
            name: name,
        }
        setToDoList([...toDoList, newTodo])
    }

    const deleteTodo = (id) => {
        const newTodoList = toDoList.filter((item) => item.id !== id)
        setToDoList(newTodoList)
    }

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo list</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />
            {toDoList.length > 0 ?
                <TodoData
                    toDoList={toDoList}
                    deleteTodo={deleteTodo}
                />
                :
                <div className="todo-image">
                    <img className='logo' src={ReactLogo} alt="" />
                </div>
            }
        </div>
    )
}

export default TodoApp