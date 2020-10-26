import React, {useCallback, useEffect, useRef, useState} from 'react';
import './App.css';
import './css/TaskList.css'
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import {useSpring, animated, useTransition} from "react-spring";

function App() {

    const props = useSpring({
        to: async (next, cancel) => {
            await next({opacity: 1, color: '#ffffee'})
            await next({opacity: 1, color: '#61dafb'})
        },
        from: {opacity: 0, color: 'black'}
    })

    const ref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0}, { opacity: 0, height: 0}],
        update: {color: '#28b4d7' },
    })

    const reset = useCallback(() => {
        ref.current.map(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set(['Liste', 'de', 'tâches']), 2000))
        ref.current.push(setTimeout(() => set(['Liste', 'tâches']), 5000))
        ref.current.push(setTimeout(() => set(['Liste', 'de mes', 'tâches']), 8000))
    }, [])

    useEffect(() => void reset(), [])

  return (
      <div className="container">
        <div>
            {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
            <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
                <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
            </animated.div>
              ))}
        </div>
        <animated.div style={props}><h1 className="title">Liste de tâches</h1></animated.div>
        <NewTaskForm/>
        <TaskList/>
      </div>
  );
}

export default App;
