import { useState } from "react";

const FilterAnMap =()=>{
    const [vehicle,setVehicle]=useState([
            'car',
            'plane',
            'bike',
            'cycle',
            'bus',
            'train',
            'tramp'
        ])

    return(
        <>
        <h2>run loop with filteration</h2>
        {/* word ka phela alphbet alag krna ka lia */}
        {/* ya use krsakta hai */}
        {/* .startsWith('b') modern way*/}
        {/* .charAt(0) */}
        {/* elem[0]==='b' */}

        <ul>
            {vehicle.filter((elem) => elem.startsWith('c')).map((item,index) =>
                <li key={index}>{item}</li>
            )}
        </ul>
        </>
    )
}
export default FilterAnMap;