import { useState } from "react";
import UserName from "./UserName";

const ParentCom = ()=>{
    const [count,setCount] = useState(0)
    return<>
    <h1>parent component</h1>
    <UserName name='atif'/>
    <h2>{count}</h2>
    <button onClick={()=>setCount(count+1)}>increase</button>
    <button onClick={()=>setCount(count-1)}>decrease</button>

    </>
}

export default ParentCom;


// is ka andar ka child component ki rerender rokni hai react memo sa
// clg mein dekho jab is comp mein changes hoti hai tu
// iska child comp UserName bhi unneccisery render hota hai 
// jiski props bhi nhi change ho rahi static ha fir bhi 
// is prevent default problem ko solve krna ka lia hi react memo use karenga
// child comp mein