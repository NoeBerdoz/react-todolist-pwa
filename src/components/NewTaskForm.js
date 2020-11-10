import React, { useState } from "react";
import { useTasks } from "../services/TaskProvider";
import {useSpring, animated} from "react-spring";

export default function NewTaskForm() {

    const [task, setTask] = useState('')
    const { addTask } = useTasks()

    const submit = e => {
        e.preventDefault()
        addTask(task)

        // clear input after submit
        setTask('')
    }

    const formAnimation = useSpring({
        transform: 'translateX(0%)',
        from: {
            transform: 'translateY(-100%)'
        }
    })

    const buttonAnimation = useSpring({
        transform: 'translateX(0%)',
        from: {
            transform: 'translateX(50%)'
        }
    })



    return (
        <form onSubmit={submit}>
            <animated.input style={formAnimation} type="text" value={task} onChange={e => setTask(e.target.value)} required />
            <animated.button style={buttonAnimation}>Ajouter</animated.button>
        </form>
    )

}
