// note :
// map sirf array pr work krta hai object pr nhi
// agr object pr loop chalana ho tu usko array of object bana do
// ek array ka andar object ko daldu simple

import { useState } from "react";

const MapLoop = ()=>{
    const [users,setUsers]=useState([
        'car',
        'plane',
        'bike',
        'cycle',
        'bus',
        'train'
    ])
    
    return(
        <>
        {/* map array method  */}
        {users.map((elem, index)=>(
            <li key={index}>{elem}</li>
        ))}
        </>
    )
}

export default MapLoop;