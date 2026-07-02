import { useState } from "react";

function Toggle (){
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Fetch Data</h1>
            <button onClick={()=>setShow(!show)}>
                {show ? 'Hide ':'Show '}
                  Details
            </button>
            {show && <UserDetail/>}
            
        </div>
    )
}

export default Toggle;


// Details component
function UserDetail (){
    return (
        <div>
            <h4>name : atif</h4>
            <h4>id : 101</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laboriosam?</p>
        </div>
    )
}


// note : 
// !show ko la kar confusion ho sakti hai
// !show ka matlab ha not true/false
// depend karta hai show ki initail value kia ha us par
// agr false ha tu true karega 
// or agr true ha tu false karega
// is hi waja se toggle button work kar raha hai