import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Link, useNavigate } from 'react-router-dom'
import { deleteTask } from '../api'
import { useLanguage } from '../context/LanguageContext'

const TaskList = () => {

    const { language, toggleLanguage } = useLanguage()

    const translation = {
        en: {
            placeholder_author: "author",
            placeholder_assigned: "Assigned to",
            completed: "Completed",
            additional_info: "Additional info",
            button: "Save task and update"

        },
        ka: {
            placeholder_author: "ავტორი",
            placeholder_assigned: "მინიჭებულია",
            completed: "შესრულებულია",
            additional_info: "დამატებითი ინფორმაცია",
            button: "შეინახე დავალება და განაახლე"
        }
    }


    const [tasks, setTasks] = useState([])
    const { response, error, loading } = useFetch({ url: `http://localhost:3000/tasks/`, method: "GET" })

    const navigate = useNavigate()
    useEffect(() => {
        setTasks(response)
    }, [response, loading])

    const deleteTaskButton = (id) => {
        deleteTask(id)
        setTasks((tasks.filter((task) => task.id !== id)))
            ?.then((res) => console.log(res))
    }

    if (loading && !response) return <p>Loading . . . </p>
    if (error || !response) return <p>Something went wrong</p>

    return (
        <div>
            <button onClick={() => navigate('/add')}>Add task</button>
            <h1>Tasks</h1>
            {tasks?.map((item) => (
                <div key={item.id}>
                    <span style={{ display: "flex", justifyContent: "center" }}>
                        <b>ID:</b>
                        <p>{item.id}</p>
                    </span>

                    <p><b>{translation[language].placeholder_author}</b>: {item.name}</p>
                    <p><b>{translation[language].placeholder_assigned}</b> {item.assignedTo}</p>

                    <p><b>{translation[language].completed}</b>{item.isCompleted ? 'completed' : 'not completed'}</p>
                    <p><b>{translation[language].additional_info} </b>{item.additionalInfo} </p>
                    <Link to={`/tasks/${item.id}`}>
                        Task details
                    </Link>
                    <br />
                    <button onClick={() => deleteTaskButton(item.id)}>delete task</button>
                </div>
            ))}

        </div>
    )
}

export default TaskList
