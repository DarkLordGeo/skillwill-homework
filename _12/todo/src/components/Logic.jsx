import { useCallback, useState } from "react"
import React from "react"

const TodoItem = React.memo(({ task, onDelete, onDone, id }) => {
    return (
        <li>
            {task}
            <button onClick={() => onDelete(id)}>delete</button>
            <button onClick={() => onDone(task)}>done</button>
        </li>
    )
})

const DoneTask = React.memo(({ task, onDelete, onReset, id }) => {
    return (
        <li>
            {task}
            <button onClick={() => onDelete(id)}>delete</button>
            <button onClick={() => onReset(id)}>reset</button>
        </li>
    )
})


const FuncTodo = () => {
    
    const [tasks, setTasks] = useState([])
    const [currentTask, setCurrentTask] = useState("")
    const [doneTasks, setDoneTasks] = useState([])


    const handleChange = useCallback((event) => {
        setCurrentTask(event.target.value)
    })


    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        const task = [...tasks, currentTask]
        setTasks(task)
        setCurrentTask("")
    }, [currentTask, tasks])


    const handleDelete = useCallback((id) => {
        const updatedTasks = tasks.filter((_, index) => index !== id)
        setTasks(updatedTasks)
    }, [tasks])


    const handleDone = useCallback((selectedTask) => {
        setTasks((prevTasks) => prevTasks.filter((t) => t !== selectedTask))
        setDoneTasks((prevDone) => [...prevDone, selectedTask])
    }, [])


    const handleDoneDelete = useCallback((id) => {
        const updatedTasks = doneTasks.filter((_, index) => index !== id)
        setDoneTasks(updatedTasks)
    }, [doneTasks])


    const handleReset = useCallback((id) => {
        const resetTask = doneTasks[id]
        const updatedTasks = [...tasks, resetTask]
        const updateDoneTasks = doneTasks.filter((_, index) => index !== id)
        setTasks(updatedTasks)
        setDoneTasks(updateDoneTasks)
    }, [doneTasks, tasks])
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={currentTask}
                />
            </form>
            <button onClick={handleSubmit}>add</button>
            <h1>Todo</h1>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        id={index}
                        task={task}
                        onDelete={handleDelete}
                        onDone={handleDone}
                    />
                ))}
            </ul>
            <h1>Completed:</h1>
            <ul>
                {doneTasks.map((task, index) => (
                    <DoneTask
                        key={index}
                        id={index}
                        task={task}
                        onDelete={handleDoneDelete}
                        onReset={handleReset}
                    />
                ))}
            </ul>
        </div>
    )

}

export default FuncTodo


