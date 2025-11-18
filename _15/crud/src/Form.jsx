import React, { useState } from 'react'

const Form = ({ onFormSubmit }) => {

    const [task, setTask] = useState()
    const [completed, setCompleted] = useState()



    const onSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(task, completed)
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='task'
                onChange={(e) => setTask(e.target.value)}
            />
            <input
                type="checkbox"
                onChange={(e) => setCompleted(e.target.checked)}
            />
            <button>add task</button>
        </form>
    )
}

export default Form
