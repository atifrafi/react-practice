// note :

import { useState } from "react";


const UseEffect = ()=> {
    const [api, setApi] = useState('');


    return (
        <>
        <h2>Use Effect Hook</h2>
        <h4>{api}</h4>
        <button onClick={()=>setApi('...fetching')}>Fetch Data</button>

        </>
    )
}

export default UseEffect;