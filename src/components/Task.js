import React from "react";
import { useTasks } from "../services/TaskProvider";


export default function Task(taskProps) {

    const { setStatusTask } = useTasks()
    const { removeTask } = useTasks()

    const checkTask = e => setStatusTask(taskProps.id, e.target.checked)


    return(
        <tr>
            <td>
                <input type="checkbox" onChange={checkTask}/>
            </td>
            <td>
                <span className={ taskProps.complete ? 'task-done' : ''}>{ taskProps.task }</span>
            </td>
            <td><button onClick={() => removeTask(taskProps)}>X</button></td>
        </tr>
    )

}
