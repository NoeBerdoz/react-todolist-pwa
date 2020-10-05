import React, {createContext, useState, useContext} from "react";
import { v4 } from "uuid";

// Create context to access states
const TaskContext = createContext()
// Create hook to make easier access to tasks array for other components
export const useTasks = () => useContext(TaskContext)

export default function TaskProvider({ children }) {
    // useState returns an array of two objects, the value & the state
    const [tasks, setTasks] = useState([])

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

    return (
        <TaskContext.Provider value={{ tasks, addTask, setStatusTask }}>
            { children }
        </TaskContext.Provider>
    )

}
