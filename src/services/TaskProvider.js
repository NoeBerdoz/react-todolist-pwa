import React, {createContext, useState, useContext, useEffect} from "react";
import { v4 } from "uuid";

// Create context to access states
const TaskContext = createContext()
// Create hook to make easier access to tasks array for other components
export const useTasks = () => useContext(TaskContext)

export default function TaskProvider({ children }) {
    // useState returns an array of two objects, the value & the state
    const savedItems = JSON.parse(localStorage.getItem('items'));
    const [tasks, setTasks] = useState(savedItems || [])


    useEffect(() => {
       localStorage.setItem('items', JSON.stringify(tasks));
    });

    const addTask = task =>
        setTasks([
            ...tasks,
            {
                id: v4(),
                task,
                complete: false
            }
        ])

    const setStatusTask = (id, status) => {
        setTasks(tasks.map(t => t.id === id ? {...t, complete: status} : t))
    }

    const removeTask = (taskToBeDeleted) => {
        setTasks(tasks.filter((task) => taskToBeDeleted !== task));
        console.log(taskToBeDeleted)
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, setStatusTask, removeTask }}>
            { children }
        </TaskContext.Provider>
    )

}
