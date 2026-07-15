import { useState } from "react";

const ObjUpd = ()=>{
    // make object in state
    const [user,setUser] =useState({
        name: 'jake',
        age: 35,
        address: {
            city: 'karachi',
            state: 'sindh'
        }
    })

    // object updation
    const handleUpdName =()=>{
        setUser({
            ...user,
            age: user.age + 1
        })
        // ...user ya spread operator ha iski help se object all keys alag alg ho gayi hai
        // baad mein likhi hoi age ...user ki age ko overide kr rahi hai
    }

    // object updation
    const handleUpdCity =()=>{
        setUser({
            ...user,
            // ya tha pora object spread kia 
            address: {
                ...user.address,
                // is se sirf user ka andar nested address object spread kia
                city: 'lahore',
                state: 'punjab'
            }
        })
    }
    return (
        <>
        <h1>updation object in state</h1>
        <p>name : {user.name}</p>
        <p>age : {user.age}</p>
        <p>city : {user.address.city}</p>
        <p>state : {user.address.state}</p>
        <button onClick={handleUpdName}>update age</button>
        <button onClick={handleUpdCity}>update city</button>
        </>
    )
}

export default ObjUpd;