// useRef kia hai ?
// ya real dom mein se element ko select krleta hai 
// forwardRef kya hai ?
// ya bhi real dom mein se element select krta ha bus diffrence ya hai ka
// ya parent mein reh kar child component ka element ko dom se select krleta hai
// props ka zarya 
// React 19 se phela du props dena perta tha lakin react 19 ka bad thora easy hogia or ek props dena prta tha.


import { yellow } from "@mui/material/colors";
const User = (props)=>{
    
    return(
        <>
        <h1>forward ref before react 19</h1>
        <input type="text" ref={props.reff} style={{border:'1px solid green'}}/>
        </>
    )
}

export default User;



// before react 19 forward ref
// import { yellow } from "@mui/material/colors";
// import { forwardRef } from "react";

// const User = (props , ref)=>{
    
//     return(
//         <>
//         <h1>forward ref before react 19</h1>
//         <input type="text" ref={ref} style={{border:'1px solid green'}}/>
//         <br />
//         </>
//     )
// }

// export default forwardRef(User);




// UseRef Hook ?
// import { yellow } from "@mui/material/colors";
// import { useRef } from "react";

// const User = ()=>{
//     const inputRef = useRef();

//     const handleFocus = ()=>{
//         console.log(inputRef)
//         inputRef.current.focus()
//         inputRef.current.style.backgroundColor = "yellow"
//     }
//     return(
//         <>
//         <h1>forward ref</h1>
//         <input type="text" ref={inputRef} style={{border:'1px solid green'}}/>
//         <br />
//         <button style={{backgroundColor:'yellow'}} onClick={handleFocus}>focus</button>
//         </>
//     )
// }

// export default User;