import React from "react";
import Task from "./Task";
import { useTasks } from "../services/TaskProvider";

export default function TaskList() {
    // Extract tasks
    const { tasks } = useTasks()

    return (
        <table>
            <tbody>
            {
                // For each tasks we create a component
                tasks.map((task, i) =>
                    <Task key={i} {...task}/>
                )
            }
            </tbody>
        </table>
    )
}
