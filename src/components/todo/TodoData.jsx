

const TodoData = (props) => {
    const { toDoList, deleteTodo } = props


    return (
        <div className='todo-data'>
            {toDoList.map((item) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button onClick={() => deleteTodo(item.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData