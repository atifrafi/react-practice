import { useContext } from "react";
import { UserContext } from "./UserContext";

// testing
const GuestProfile = ()=>{
    const guest = useContext(UserContext)
    return(
        <>
        <h2>Guest name is {guest}</h2>
        </>
    )
}

export default GuestProfile;