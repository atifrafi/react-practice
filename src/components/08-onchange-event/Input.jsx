import { useState } from "react";

const Input = () => {
    const [name, setName] = useState("")
    const hangleInputChange = (eventObject) => {
        setName(eventObject.target.value)
        console.log(eventObject.target.value)
    }
    return (
        <>
        <h1>OnChange Event</h1>
        <input type="text" value={name} onChange={hangleInputChange} placeholder="Enter Name" />
        <button onClick={()=>setName("")}>Clear</button>
        <h1>Live Preview : {name}</h1>
        </>
    )
}

export default Input;