import { use, useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import TaskItem from './TaskItem';

function App() {

  const [tasks, setTasks] = useState([])


  const submitData = (task, completed) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([{ task, completed }])
    };

    fetch('http://localhost:3000/tasks', requestOptions)
      .then(res => {
        if (!res) throw new Error("failed")
        return res.json()
      })
      .then(res => setTasks((prev) => [...prev, {
        task: res[0].task,
        completed: res[0].completed,
        id: res.id
      }]))
      .catch(err => console.log(err))

  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };


    fetch('http://localhost:3000/tasks', requestOptions)
      .then(res => {
        if (!res) throw new Error("failed")
        return res.json()
      })
      .then(res => setTasks(
        res.map((item) => (
          { task: item[0].task, completed: item[0].completed, id: item.id }
        ))
      ))
      .catch(err => console.log(err))

  }, [])


  const taskElement = tasks.map((item) => item)
  console.log(taskElement)

  return (
    <div className="App">

      <Form onFormSubmit={submitData} />
      {tasks.map(({ task, completed, id }) => (
        <TaskItem task={task} prevStatus={completed} key={id} />
      ))}

    </div>
  );
}

export default App;
