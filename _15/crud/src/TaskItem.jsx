import React from 'react'
import { useState } from 'react'

const TaskItem = ({ task, key }) => {

    const [editing, setEditing] = useState(false)
    const [editedTask, setEditedTask] = useState('')
    const [checked, setChecked] = useState(false)

    const handleEdit = () => {
        setEditing(true)
    }

    const handleSave = () => {
        setEditing(false)
    }

    return (
        <div key={key}>
            {editing ? (
                <div>
                    <input
                        type="text"
                        // value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <button onClick={handleSave}>save</button>
                    <br />
                    <b>editing task</b>
                </div>

            ) :
                <div>
                    <p>{task}</p>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    {checked ? "completed" :
                        "not completed"}
                    <button onClick={handleEdit}>edit</button>
                </div>
            }

        </div>
    )
}

export default TaskItem
