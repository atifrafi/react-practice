import {useFormStatus} from 'react-dom';
const SubmitBtn = () => {
    const {pending} =useFormStatus() 
    console.log(pending) 
    return (
    <>
      <input type="text" placeholder="Name" />
      <br />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <br />
      <button type="submit" disabled={pending}>{pending ? 'Submiting...':'Submit'}</button>
    </>
  );
};
export default SubmitBtn;
