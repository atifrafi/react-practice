import { useState } from "react"

const RadioAndDropdown = ()=>{
    const [gender, setGender] =useState("")
    const [option, setOption]=useState("")

    return (
        <>
        <h1>Radio and Dropdown in React</h1>
        {/* radio code */}
        <label htmlFor="">
            <input type="radio" value='male' name="gender" checked={gender==='male'}
            onChange={(e)=>setGender(e.target.value)}/>
            Male
        </label>
        <label htmlFor="">
            <input type="radio" value='female' name="gender" checked={gender==='female'}
            onChange={(e)=>setGender(e.target.value)}/> 
            Female
        </label>
        <h3>preview</h3>
        <p>{gender}</p>
        {/* radio code */}
        {/* ------------------------------ */}
        {/* dropdown code */}
        <select value={option} onChange={(e)=>setOption(e.target.value)}>
            <option value="none">none</option>
            <option value="car">car</option>
            <option value="bike">bike</option>
            <option value="plane">plane</option>
            <option value="train">train</option>
        </select>
        <h3>preview</h3>
        <p>{option}</p>
        {/* dropdown code */}
        </>
    )
}

export default RadioAndDropdown;