import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import useRequest from '../hooks/useRequests'

const TaskList = () => {

    const [tasks, setTasks] = useState([])
    const { response, error, loading } = useFetch({ url: `http://localhost:3000/tasks/`, method: "GET" })



    useEffect(() => {
        setTasks(response)
    }, [response])


    if (loading && !response) return <p>Loading . . . </p>
    if (error || !response) return <p>Something went wrong</p>

    // console.log(tasks)

    return (
        <div>
            <h1>Tasks</h1>
            {tasks?.map((item) => (
                <div key={item.id}>
                    <span style={{display:"flex",justifyContent:"center"}}>
                        <b>ID:</b>
                        <p>{item.id}</p>
                    </span>

                    <p><b>Task author</b>: {item.name}</p>
                    <p><b>Task assigned to:</b> {item.assignedTo}</p>

                    <p><b>Completed</b>{item.isCompleted ? 'completed' : 'not completed'}</p>
                    <p><b>Additional info </b>{item.additionalInfo} </p>
                    <Link to={`/tasks/${item.id}`}>
                        Task details
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default TaskList
