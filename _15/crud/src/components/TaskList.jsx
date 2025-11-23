import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const TaskList = () => {

    const [tasks, setTasks] = useState([])
    const { response, error, loading } = useFetch({ url: `http://localhost:3000/tasks/`, method: "GET" })

    // console.log(response)


    useEffect(() => {
        setTasks(response)
    }, [response])

    if (loading && !response) return <p>Loading . . . </p>
    if (error || !response) return <p>Something went wrong</p>

    return (
        <div>
            {tasks?.map((item) => (
                <>
                    <p>{item.id}</p>
                    <Link to={`/tasks/${item.id}`}>
                        Task details
                    </Link>
                </>
            ))}
        </div>
    )
}

export default TaskList
