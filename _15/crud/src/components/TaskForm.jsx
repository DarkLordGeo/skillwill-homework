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

import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const TaskForm = () => {

  const { id } = useParams()
  const [editing, setEditing] = useState(false)
  const { response, error, loading } = useFetch({ url: `http://localhost:3000/tasks/`, method: "GET" })

  const toggleEdit = () => {
    setEditing(!editing)
  }


  return (
    <div>
      <p>{id}</p>
      <button onClick={() => toggleEdit()}>{editing ? 'save' : 'edit'}</button>
      <Link to={'/'}>Go back</Link>
      {editing ?
        <form>
          <input type="text" />
        </form>
        : <p>not editing</p>
      }

    </div>
  )
}

export default TaskForm
