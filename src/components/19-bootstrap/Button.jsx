// note :
// bootstrap install karna ka baad ju bhi component use krna hai 
// usko import karna prta hai
// example :
// import Button from 'react-bootstrap/Button';
// or less ideally
// other way : import { Button } from 'react-bootstrap';
// or ek import main.jsx mein bhi ya wala
//import 'bootstrap/dist/css/bootstrap.min.css';



import Button from 'react-bootstrap/Button';

const BootsrtapButton =()=>{
    return (
        <>
        <Button variant='danger'>
            click now
        </Button>
        
        <Button variant='success'>
            Subscirbe
        </Button>
        </>
    )
}

export default BootsrtapButton;