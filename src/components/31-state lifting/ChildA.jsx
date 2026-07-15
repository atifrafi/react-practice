import { useState } from "react"

const ChildA = ({msgsender})=>{
    
    const handleChange =(e)=>{
        msgsender(
            e.target.value
        )
    }
    
    return(
        <>
        {/* Child A component */}
        <h2>Child A</h2>
        <input type="text" placeholder="send massage to child B" onChange={handleChange}/>
        <p>{msgsender}</p>
        </>
    )
}

export default ChildA;