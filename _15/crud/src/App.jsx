import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {

  // const [tasks, setTasks] = useState([])


  // const submitData = (task, completed) => {

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify([{ task, completed }])
  //   };

  //   fetch('http://localhost:3000/tasks', requestOptions)
  //     .then(res => {
  //       if (!res) throw new Error("failed")
  //       return res.json()
  //     })
  //     .then(res => setTasks((prev) => [...prev, {
  //       task: res[0].task,
  //       completed: res[0].completed,
  //       id: res.id
  //     }]))
  //     .catch(err => console.log(err))

  // }

  // useEffect(() => {
  //   const requestOptions = {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   };


  //   fetch('http://localhost:3000/tasks', requestOptions)
  //     .then(res => {
  //       if (!res) throw new Error("failed")
  //       return res.json()
  //     })
  //     .then(res => setTasks(
  //       res.map((item) => (
  //         { task: item[0].task, completed: item[0].completed, id: item.id }
  //       ))
  //     ))
  //     .catch(err => console.log(err))

  // }, [])


  // const taskElement = tasks.map((item) => item)
  // console.log(taskElement)

  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/tasks/:id" element={<TaskForm />} />
      
    </Routes>
  );
}

export default App;
