import { Component } from "react";

class App extends Component {

  state = {
    input_value: "",
    tasks: [{}]
    // tasks: [{ id: 1, task_name: "Go to grocery" }],
    // completed_tasks: [{}]
  }

  onChange = (e) => {
    const new_task = e.target.value
    this.setState({
      input_value: new_task
    })
  }


  Add_task = (e) => {
    e.preventDefault()
    const task = {
      task: this.state.input_value
    }

    this.setState({
      tasks: [...this.state.tasks, task]
    })

    console.log(this.state.tasks)
  }

  // Add_task = (event) => {
  //   event.preventDefault()

  //   const task = {
  //     id: this.state.tasks.length + 1,
  //     task: this.state.input_value
  //   }

  //   this.setState({
  //     tasks: [...this.state.tasks, task]
  //   })
  //   console.log(this.state.tasks)
  // }

  render() {
    return (
      <div>
        <h1>
          Todo app
        </h1>
        <form onSubmit={this.Add_task}>
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.input_value} />

          <button style={{ marginLeft: "10px" }}>
            Add task
          </button>
        </form>
        <p>
          Tasks:
        </p>
        <p>
          {this.state.input_value}
        </p>

        {/* <ul>
          {this.state.tasks.map(({ id, task_name }) => (
            <li key={id}>
              {task_name}
            </li>
          ))}
        </ul> */}
        {/* {this.state.tasks} */}
      </div >
    )
  }
}
export default App