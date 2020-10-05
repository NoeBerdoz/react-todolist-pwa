import React from 'react';
import './App.css';
import './css/TaskList.css'
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";


function App() {
  return (
      <div className="container">
        <h1 className="title">Liste de tâches</h1>
        <NewTaskForm/>
        <TaskList/>
      </div>
  );
}

export default App;
