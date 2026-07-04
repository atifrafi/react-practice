// js ka traditional loop jaise For, ForEach etc.
// ya loops jsx ka andar nhi ban sakta
// react mein loop karna ka lia recomend hai map 
// kyoka ya 90% use hota hai
// react mein key very imp ha looping ka lia 
// is se react ko pata chlta ha ka unique value hai

import { useState } from "react";

// ya jsx ka andar use ho sakta hai
const ForLoop = ()=>{
    // array in the use state
    const [items,setItems] = useState([
        'books',
        'movies',
        'webseries',
        'sports'
    ])

    // for loop
    const showItems =()=>{
        let listItem = [];
        // for loop array return nhi krta
        for(let i=0; i<items.length; i++){
            // key dena se react ko pata chalta hai unique ha ju loop chalana ka lia imp hai
            listItem.push(<li key={i}>{items[i]}</li>)
        }
        return listItem;
    }

    return(
        <>
        <h1>for loop</h1>
        <ul>
            {showItems()}
        </ul>
        </>
    )
}

export default ForLoop;