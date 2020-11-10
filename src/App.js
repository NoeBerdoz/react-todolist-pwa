import React, {useCallback, useEffect, useRef, useState} from 'react';
import './App.css';
import './css/TaskList.css'
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import {animated, useTransition} from "react-spring";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

function App() {

    const ref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
        enter: [
            { opacity: 1, height: 20, innerHeight: 20 },
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
          <MDBContainer>
              <MDBRow>
                  <MDBCol size="3">
                      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                          <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
                              <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                          </animated.div>
                      ))}
                  </MDBCol>
                  <MDBCol size="7">
                    <NewTaskForm/>
                  </MDBCol>
              </MDBRow>
              <MDBRow>
                  <TaskList/>
              </MDBRow>
              <p>Made by Noé Berdoz</p>
          </MDBContainer>

      </div>

  );
}

export default App;
