import React, { Component } from 'react'

class TaskList extends Component {

    render() {
        const { task, id, completeTask } = this.props
        return (
            <div>
                Task: {task}
                <br />
                Id: {id}
                <br />
                <button onClick={() => completeTask(id)}>Done</button>
            </div>
        )
    }
}

export default TaskList
