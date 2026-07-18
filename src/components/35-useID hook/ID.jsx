import { useId } from "react"

const ID = ()=>{
    // note 
    // use id kis lia use hoti hai 
    // stable or unique id ju rerender pr change nhi ho
    // islia useid hook use krta hai 
    // useid react 19 ka part hai
    const name= useId()
    const email= useId()
    return(
        <>
        <h1>use id hook</h1>
        <label htmlFor={name}>name</label>
        <input type="text" id={name} />
        <br /><br />
        <label htmlFor={email}>email</label>
        <input type="email" id={email} />
        </>
    )
}

export default ID