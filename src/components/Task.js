import React from "react";
import { useTasks } from "../services/TaskProvider";
import {useSpring, animated} from "react-spring";

export default function Task(taskProps) {

    const { setStatusTask } = useTasks()
    const { removeTask } = useTasks()

    const checkTask = e => setStatusTask(taskProps.id, e.target.checked)

    const buttonXAnimation = useSpring({
        transform: 'opacity: 1',
        from: {
            transform: 'opacity: 0'
        }
    })

    return(
        <tr>
            <td>
                <input type="checkbox" onChange={checkTask} checked={taskProps.complete}/>
            </td>
            <td>
                <span className={ taskProps.complete ? 'task-done' : ''}>{ taskProps.task }</span>
            </td>
            <td><animated.button style={buttonXAnimation} onClick={() => removeTask(taskProps)}>X</animated.button></td>
        </tr>
    )

}
