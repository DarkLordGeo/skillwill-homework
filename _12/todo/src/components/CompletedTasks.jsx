import React, { Component } from 'react'

class CompletedTasks extends Component {
    render() {
        const { task, id, deleteCompleted, addTodo } = this.props
        return (
            <div>
                <ul>
                    <li>{task}</li>
                    <button onClick={() => addTodo(id)}>Add to todo</button>
                    <button onClick={() => deleteCompleted(id)}>Delete</button>
                </ul>
            </div>
        )
    }
}

export default CompletedTasks
