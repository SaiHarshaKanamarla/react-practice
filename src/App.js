import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Task from './components/Task';
import AddTask from './components/AddTask';
import Navbar from './components/Navbar';
import { useState } from 'react';
import NotFound from './components/NotFound';
import EditTask from './components/EditTask';

function App() {

  const [tasks, setTasks] = useState([
    { "id": 1, "name": "Task 1", "taskDesc": "This is Task 1" },
    { "id": 2, "name": "Task 2", "taskDesc": "This is Task 2" },
    { "id": 3, "name": "Task 3", "taskDesc": "This is Task 3" },
    { "id": 4, "name": "Task 4", "taskDesc": "This is Task 4" }
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(updatedTasks);
  }

  function updatedTask(updatedTask) {
    console.log("This is edit task");
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  }
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Task tasks={tasks} deleteTask={deleteTask} />} />
          <Route exact path='/add-task' element={<AddTask addTask={addTask} />} />
          <Route exact path='/edit-task' element={<EditTask updatedTask={updatedTask} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
