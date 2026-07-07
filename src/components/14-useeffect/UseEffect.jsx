// note :
// useeffect sideffect ko handle karna ka lia use hota hai
// sideffect kya hai. wo cheeza ju react ka control mein nhi hai 
// jaisake (browser feature , api etc)
// use effect mein react lifecycle concept use hota hai
// lifecycle concept matlab component (mount , update , unmount)
// useeffect mein two parameter hota hai ek function dosra depedancy array( ya optional hai )
// dependancy array parameter se hi lifecycle ko control kia jata hai
// dependancy array mein state ya props likhta hai
// useeffect mein cleanup function bhi hota hai ju unmount hota hi automatic chalta hai
// cleanup function istarha hota hai return ()=>{}
// working :
// jis component pr bhi useeffect hoga wo 1st render pr chalega matlab mount honga.
// Jab pehli baar component screen par aayega -> Mount (Effect chalega).
// Jab state ya props badlenge -> Update/Re-render (Effect dobara chalega, agar dependency array empty na ho toh).
// is mount se bachna ka lia empty [] dependancy lagata hai.
// agr humein kisi khas state ka update hona par useeffect chalana ho tu us state ka naam depedancy array mein likhta hai.
// fir jab hum is component se bahir ata ha tu ya unmount hojata hai or cleanup function run hota hai
// cleanup function important hai warna memory leak ki problem hoti hai.

import { useEffect, useState } from "react";


const UseEffect = ()=> {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(2);

    useEffect(()=>{
        console.log('mount')
    },[data])


    return (
        <>
        <h2>Use Effect Hook</h2>
        <h1>{count}</h1>
        <h1>{data}</h1>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
        <button onClick={()=>setData(data + 2)}>Data</button>

        </>
    )
}

export default UseEffect;