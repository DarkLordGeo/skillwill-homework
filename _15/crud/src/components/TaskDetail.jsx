import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTasks } from '../api'

const TaskDetail = () => {
    const { id } = useParams()
    const [task, setTask] = useState(null)

    // console.log(id)

    useEffect(() => {
        if (id) {
            fetchTasks(id)
                .then((taskData) => {
                    setTask(taskData)
                })
                .catch((error) => {
                    console.log('error', error)
                })
        }
    }, [id])

    if (!task) return <p>loading...</p>

    return (
        <div>
            <h2>task details</h2>
        </div>
    )
}

export default TaskDetail
