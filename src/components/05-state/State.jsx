// note :
// state kia hai ? or state or variable ma kya farq hai ?
// state same variable ki tarha data store krta hai
// lakin variable static data store krta hai jab ka state dynamic data store krta hai
// state ka data change hota hai dynamically 
// state ek hook hai
// syntax :
// const [state , setState] = useState('initail value')
// inital value hi state ki value hai 
// setState ek function ha ju state ki value ko change krna ka lia use hota hai

import { useState } from "react"


function State (){
    const [name, setName] = useState('no name')
    const [count, setCount] = useState(0)
    // store object in state
    const [user, setUser] = useState({username: 'atif', skill: 'react'})
    // store array in state
    const [task, setTask] = useState(['task1','task2','task3'])
    const namechange = () => {
        setName('atif')
        console.log('atif')
    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>count: {count}</h1>
            <p>{user.username}</p> {/* object */}
            <p>{task}</p> {/* array  */}
            <button onClick={namechange}>name change button</button>
            <button onClick={()=>setCount(count + 1)}>increment</button>
            <button onClick={()=>setCount(count - 1)}>decrement</button>
            <button onClick={()=>setCount(0)}>reset</button>

        </div>
    )
}

export default State;