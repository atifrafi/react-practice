// note:
// uncontrolled component kya hai ?
// jisko dom control krta hai wo uncontrol component hai
// controll comp mein tu hum form input ko react state se controll krta tha islia wo control comp hai
// lakin yaha hum js dom ya useRef hook krta hai ju ka uncontroll component hai
// isko bara project mein use krna chaiya kyo ka ya rerender nhi hota 
// jabka react state render hota hai 
// useRef ka use data access krna ka lia hota hai dom mein se
// fast setup ha lakin less control hai
// form data dom ka through handle hota hai
// useful for simple form quick prototypes
// important baat :
// dekho jab hum react state ka use krta hai component ko controll component banana ka lia tu
// wo react virtual dom mein changes hoti hai jiska react ko pata hota hai.
// lakin jab hum useFef ya dom element get krta hai tu wo real dom mein changes krta hai jiska 
// react ko nhi pata jiski waja se wo uncontroll hojata hai is lia usko uncontrolled component kheta hai

import { useRef } from "react";


const UForm = ()=>{
    const nameRef = useRef(null)
    const passwordRef = useRef(null)

    const handleSubmit = (e)=>{
        e.preventDefault();

        // using dom get input value
        // const name = document.getElementById('name').value;
        // const password = document.getElementById('password').value;

        const name = nameRef.current.value;
        const password = passwordRef.current.value;

        alert(`submit ${name} ${password}`)

        // after submit field empty
        nameRef.current.value = "";
        passwordRef.current.value = "";

    }

    return(
        <>
        <h2>uncontrolled component</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" ref={nameRef} placeholder="enter name" />
            <br /><br />
            <input type="password" id="password" ref={passwordRef} placeholder="password" />
            <br /><br />
            <button type="submit">submit</button>
        </form>

        {/* <h2>{name.current.value}</h2> */}
        
        </>
    )
}

export default UForm;