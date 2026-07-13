import { useState, useTransition } from "react";

const Loader = () => {
    const [ispending , startTransistion] = useTransition();
    const [data,setData]=useState('')

    

    const handleDownload = ()=> {

        startTransistion(
        async ()=>{
            await new Promise ((resolve)=> setTimeout(()=>{
                resolve();
            },5000))
        }
    )

    }

    return (
        <>
        <h1>use transistion hook</h1>
        <button onClick={handleDownload}>Download</button>
        <br />
        <h1>{ispending && 'loading...'}</h1>
        </>
    )
}

export default Loader;


// Sahi Concept kya hai?
// ispending bilkul ek switch/light ki tarah hai:

// Shuru mein (Starting):
// ispending hamesha false hota hai (kyunki koi kaam nahi ho raha).

// Jab kaam start hota hai (startTransition chalte hi):
// ispending foran true ho jata hai. (Isi liye aapko screen par loading... nazar aata hai).

// Jab kaam khatam ho jata hai (Promise done hone par):
// ispending wapas false ho jata hai. (Taki screen se loading... gayab ho jaye).

// Isko simple timeline se dekhein:
// Click karne se pehle: ispending = false

// Click kiya (5 seconds ka wait start): ispending = true ⏳ (Screen par "loading..." dikhega)

// 5 seconds poore hue (resolve ho gaya): ispending = false ✅ (Screen se "loading..." gayab)