import React, { Component } from 'react'
import TaskList from './TaskList'
import CompletedTasks from './CompletedTasks'

class Logic extends Component {
    state = {
        inputValue: "",
        tasks: [],
        completed: []
    }

    inputValueUpdate = (e) => {
        const value = e.target.value;
        this.setState({
            inputValue: value
        })
    }

    addTask = (e) => {
        e.preventDefault()
        const task = {
            id: this.state.tasks.length + 1,
            task_info: this.state.inputValue
        }

        this.setState({
            tasks: [...this.state.tasks, task],
            inputValue: "",
        })
    }

    addCompleted = (id) => {
        const completedTaskId = this.state.tasks.find(task => task.id === id);
        const completedTask = {
            id: this.state.completed.length + 1,
            completed_task: completedTaskId.task_info
        }

        this.setState({
            completed: [...this.state.completed, completedTask]
        })
        const taskToDelete = this.state.tasks.filter((task) => task.id !== id);
        this.setState({
            tasks: taskToDelete,
        });
    }

    deleteCompleted = (id) => {
        const taskToDelete = this.state.completed.filter((task) => task.id !== id);
        this.setState({
            completed: taskToDelete,
        });
    }

    addTodo = (id) => {
        const task = {
            id: this.state.tasks.length + 1,
            task_info: this.state.completed[id - 1].completed_task
        }
        this.setState({
            tasks: [...this.state.tasks, task],
        })

        const taskToDelete = this.state.completed.filter((task) => task.id !== id);
        this.setState({
            completed: taskToDelete,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTask}>
                    <input type="text"
                        onChange={this.inputValueUpdate}
                        value={this.state.inputValue}
                    />
                </form>
                <button onClick={this.addTask}>Add task</button>
                <p>Tasks:</p>
                <br />
                <ul>

                    <h1>To do</h1>
                    {this.state.tasks.map((task) => (
                        <li key={task.id}>
                            <TaskList
                                task={task.task_info}
                                id={task.id}
                                completeTask={this.addCompleted}
                            />
                        </li>
                    ))}
                    <h1>Completed task</h1>
                    <br />

                    {this.state.completed.map((task) => (
                        <li key={task.id}>
                            <CompletedTasks
                                task={task.completed_task}
                                id={task.id}
                                deleteCompleted={this.deleteCompleted}
                                addTodo={this.addTodo}
                            />
                        </li>
                    ))}

                </ul>

            </div>
        )
    }
}

export default Logic
