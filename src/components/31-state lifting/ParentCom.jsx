import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

// note:
// state lifting kyo use krta hai ?
// ek sibling component agr dosra sibling component ko koi state bhejna chahe tu
// wo react mein noramlly direct nhi bhejsakta islia state lifting ka concept use hota hai
// agr child A na koi state child B ko bhejni hai tu wo apni state parent component mein banaye ga
// or phir waha se child B ko bhej dega isiko state lifting kheta hai

const ParentCompo = ()=>{
    const [msg,setMsg] =useState('')
    return(
        <>
        {/* parent component */}
        <h1>Parent Component</h1>
        <ChildA msgsender={setMsg}/>
        <ChildB massage={msg}/>
        </>
    )
}

export default ParentCompo;