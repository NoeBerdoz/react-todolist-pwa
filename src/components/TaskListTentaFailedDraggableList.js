
import { render } from "react-dom";
import React, { useRef } from "react";
import Task from "./Task";
import { useTasks } from "../services/TaskProvider";
import {useGesture} from "react-use-gesture";
import clamp from "lodash-es/clamp";
import swap from "lodash-move";
import { useSprings, animated, interpolate } from "react-spring";


export default function TaskList() {

    // Extract tasks
    const { tasks } = useTasks()

    /*
    // ANIMATION DRAGGABLE LIST

    // Return fitting place for dragged item
    const fn = (order, down, originalIndex, curIndex, y) => index =>
        down && index === originalIndex
            ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex'}
            : { y: order.indexOf(index) * 100, scale:1, zIndex: '0', shadow: 1, immediate: false }

    const order = useRef(items.map((_, index) => index)) // Item order as local reference
    const [springs, setSprings] = useSprings(items.length, fn(order.current))
    console.log(items.length)
    const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
        const curIndex = order.current.indexOf(originalIndex)
        const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length -1)
        const newOrder = swap(order.current, curIndex, curRow)
        setSprings(fn(newOrder, down, originalIndex, curIndex, y))
        if (!down) order.current = newOrder
    })

    */
    return (
        <table>
            <tbody>
            {
                // For each tasks we create a component
                tasks.map((task, i) =>
                    <Task key={i} {...task}/>
                )
            }
            { /*
            <div className="listContent">

            {springs.map(({ zIndex, shadow, y, scale }, i) => (
                    <animated.div
                        {...bind(i)}
                        key={i}
                        style={{
                            zIndex,
                            boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
                            transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`)
                        }}
                        children={items[i]}
                    />
                ))}
            </div>

             */}

            </tbody>
        </table>
    )
}