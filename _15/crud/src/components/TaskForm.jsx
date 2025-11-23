// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { createTask, updateTask } from '../api'
// const TaskForm = () => {

//     const navigate = useNavigate()
//     const { id } = useParams()

//     console.log(id)
//     const isEditMode = !!id === undefined ? 'sample task' : id


//     const [task, setTask] = useState({
//         name: '',
//         isCompleted: false,
//         deadline: '',
//         assignedTo: '',
//         additionalInfo: ''
//     })

//     useEffect(() => {
//         if (isEditMode) {
//         }
//     }, [id, isEditMode])

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setTask({ ...task, [name]: value })
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()

//         if (isEditMode) {
//             updateTask(id, task)
//                 .then(() => navigate('/'))
//         } else {
//             createTask(task)
//                 .then(() => {
//                     navigate('/')
//                 })
//         }
//     }

//     return (
//         <div>
//             <h2>{isEditMode ? 'edit task' : 'add task'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <button type='submit'>{isEditMode ? 'update' : 'create'}</button>
//             </form>
//         </div>
//     )
// }

// export default TaskForm

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import useRequest from '../hooks/useRequests'

const TaskForm = () => {

  const { id } = useParams()
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const [editing, setEditing] = useState(false)
  const { response, error, loading } = useFetch({ url: `http://localhost:3000/tasks/${id}`, method: "GET" })
  const { load, sendRequest } = useRequest({ url: `http://localhost:3000/tasks/${id}`, method: "PUT" })


  const [task, setTask] = useState({
    name: '',
    isCompleted: false,
    assignedTo: '',
    additionalInfo: ''
  })


  useEffect(() => {
    setTask(({
      name: response?.name,
      isCompleted: response?.isCompleted,
      assignedTo: response?.assignedTo,
      additionalInfo: response?.additionalInfo
    }))
  }, [response])

  useEffect(() => {
    setData(response)
  }, [response])


  const toggleEdit = () => {
    console.log(editing)
    setEditing(!editing)
  }

  const submitData = (e) => {
    e.preventDefault()
    sendRequest(task)
      .then(() => navigate('/'))
      .catch(err => console.log(err))
  }
  console.log('response:', response)

  if (loading && !response) return <p>Loading . . . </p>
  if (error || !response) return <p>Something went wrong</p>

  return (
    <div>
      <div key={data?.id}>
        <p>{data?.id}</p>
        <p><b>Task author:</b> {data?.name}</p>
        <p><b>Task assigned to:</b> {data?.assignedTo}</p>
        <p><b>Completed: </b>{data?.isCompleted ? 'completed' : 'not completed'}</p>
        <p><b>Additional info: </b>{data?.additionalInfo} </p>
      </div>
      <Link to={'/'}>Go back</Link>
      {editing ?
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

        : <></>
      }
      <button onClick={() => toggleEdit()} type='submit' >{editing ? 'Save' : 'Edit'}</button>
    </div>
  )
}

export default TaskForm
