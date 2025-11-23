import { useState, useEffect } from 'react'
import useRequest from '../hooks/useRequests'
import { useNavigate } from 'react-router-dom'


const TaskAdd = () => {

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
                    placeholder='Author'
                    onChange={(e) => setTask({ ...task, name: e.target.value })} defaultValue={data?.name}
                    value={task.name}
                />
                <br />
                <input type="text"
                    placeholder='Assigned to'
                    onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
                    // defaultValue={data?.assignedTo}
                    value={task.assignedTo}
                />
                <br />
                <input type="checkbox"
                    placeholder='Completed'
                    onChange={(e) => setTask({ ...task, isCompleted: e.target.checked })}
                    // defaultValue={data?.isCompleted}
                    value={task.isCompleted}
                />
                <br />
                <input type="text"
                    placeholder='Additional info'
                    onChange={(e) => setTask({ ...task, additionalInfo: e.target.value })}
                    // defaultValue={data?.additionalInfo}
                    value={task.additionalInfo}
                />
                <br />
                <button type='submit'>Save task and update</button>
            </form>
        </div>
    )
}

export default TaskAdd
