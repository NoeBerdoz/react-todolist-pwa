import React, { useState } from "react";
import { useTasks } from "../services/TaskProvider";

export default function NewTaskForm() {

    const [task, setTask] = useState('')
    const { addTask } = useTasks()

    const submit = e => {
        e.preventDefault()
        addTask(task)

        // clear input after submit
        setTask('')
    }

    return (
        <form onSubmit={submit}>
            <input type="text" value={task} onChange={e => setTask(e.target.value)} required />
            <button>Ajouter</button>
        </form>
    )

}
