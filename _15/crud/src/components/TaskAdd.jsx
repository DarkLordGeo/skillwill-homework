import { useState, useEffect } from 'react'
import useRequest from '../hooks/useRequests'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const TaskAdd = () => {
    const { language } = useLanguage()

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

    const [data, setData] = useState()

    const navigate = useNavigate()
    const { load, sendRequest } = useRequest({ url: `http://localhost:3000/tasks/`, method: "POST" })

    const [task, setTask] = useState({
        name: '',
        isCompleted: false,
        assignedTo: '',
        additionalInfo: ''
    })
    const submitData = (e) => {
        e.preventDefault()
        sendRequest(task)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={(e) => submitData(e)}>
                <input type="text"
                    placeholder={translation[language].placeholder_author}
                    onChange={(e) => setTask({ ...task, name: e.target.value })} defaultValue={data?.name}
                    value={task.name}
                />
                <br />
                <input type="text"
                    placeholder={translation[language].placeholder_assigned}
                    onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
                    // defaultValue={data?.assignedTo}
                    value={task.assignedTo}
                />
                <br />
                <input type="checkbox"
                    placeholder={translation[language].completed}
                    onChange={(e) => setTask({ ...task, isCompleted: e.target.checked })}
                    // defaultValue={data?.isCompleted}
                    value={task.isCompleted}
                />
                <br />
                <input type="text"
                    placeholder={translation[language].additional_info}
                    onChange={(e) => setTask({ ...task, additionalInfo: e.target.value })}
                    // defaultValue={data?.additionalInfo}
                    value={task.additionalInfo}
                />
                <br />
                <button type='submit'>{translation[language].button}</button>
            </form>
        </div>
    )
}

export default TaskAdd
