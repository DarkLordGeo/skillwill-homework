import React, { Component, PureComponent } from 'react'

class TaskList extends PureComponent {

    render() {
        const { task, id, completeTask } = this.props
        console.log("Child 1 rerenders")

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
