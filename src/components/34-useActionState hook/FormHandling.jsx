import { useActionState } from "react";

const FormHandling =()=>{
    const [message, formAction, pending] = useActionState(submitData,"")
    async function submitData(prevState, formData){
        const name = formData.get("Name");
        const feedback = formData.get("Feedback");

        await new Promise((resolve)=>setTimeout(resolve,2000))

        if(name && feedback){
            return `Thank you ${name} for your feedback: ${feedback}`
        }else{
            return "Please fill all the field"
        }


    }

    return(
        <>
        <h1>UseActionState Hook for Form Handling</h1>
        <form action={formAction}>
            <input type="text" name="Name" placeholder="Enter Name" />
            <br /><br />
            <textarea name="Feedback" placeholder="Write Feedback Here..."></textarea>
            <br /><br />
            <button type="submit" disabled={pending}>Submit</button>
            <p>{message}</p>
        </form>
        </>
    )
}

export default FormHandling;


// note :
// useActionState hook react 19 ka part hai 
// iski help se easily formhandling karsakta hai 
// is hook mein three mein cheeza hoti hai 
// phela message 
// dosra form action function
// teesra pending state boolean mein true/false starting mein false hoti hai
// or useActionState(submitdata, 'message') 
// submitdata ek function hai ju formaction state ko define krta hai
// dosra parameter message ko define krta hai
// fir ju function hai submitdata wala usma bhi du parameter hota hai 
// ek prevese data or dosra formdata 