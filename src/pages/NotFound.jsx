import { Link } from "react-router"

const NotFound = ()=>{
    return (
        <>
        <h1>404 error page not found</h1>
        <p>please go to the home</p>
        <Link to='/'>Home</Link>
        </>
    )
}

export default NotFound