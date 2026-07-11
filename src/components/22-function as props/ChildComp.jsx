// note:
// function as props ka kya matlab hai
// dekho hamesh parent tu child data pass hota hai props se
// lakin ya ju function as props hai ya data pass nhi ho raha 
// two way comunication hai parent to child ya child to parent 
// working explain:
// function parent mein hai 
// juka props ka zarya child mein bheja (data flow parent to child)
// fir child ka button component pr ek event ha ju parent se comunicate krta hai ka mujhe function chaiya 
// fir parent function props ka zarya child ko bhejdeta hai
// jab bhi child component ka button click hoga parent ko msg jaye ga ka function ki need hai
// parent function as a props child ko bheja ga.

const ChildComp = ({handleName,name})=>{
    return (
        <>
        <button onClick={()=>handleName(name)} style={{backgroundColor:"green", fontSize:'20px',margin:"20px", padding:'10px'}}>
            Subscribe
        </button>
        </>
    )
}

export default ChildComp;