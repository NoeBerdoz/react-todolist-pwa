import React from "react";
import { useTasks } from "../services/TaskProvider";


export default function Task({ id, task, complete }) {

    const { setStatusTask } = useTasks()
    const { removeTask } = useTasks()

    const checkTask = e => setStatusTask(id, e.target.checked)


    return(
        <tr>
            <td>
                <input type="checkbox" onChange={checkTask}/>
            </td>
            <td>
                <span className={ complete ? 'task-done' : ''}>{ task }</span>
            </td>
            <td><button onClick={() => removeTask(task)}>X</button></td>
        </tr>
    )

}
