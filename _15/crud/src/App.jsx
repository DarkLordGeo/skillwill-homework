import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskAdd from "./components/TaskAdd";

function App() {

  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/tasks/:id" element={<TaskForm />} />
      <Route path="/add" element={<TaskAdd />} />
    </Routes>
  );
}

export default App;
