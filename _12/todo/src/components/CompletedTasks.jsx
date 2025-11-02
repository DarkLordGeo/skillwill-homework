import React, { PureComponent } from 'react'

class CompletedTasks extends PureComponent {

    render() {
        const { task, id, deleteCompleted, addTodo } = this.props
        console.log("Child 2 rerenders")
        console.log('task to add id:', id)
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
