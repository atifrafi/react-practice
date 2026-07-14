// react memo kia hai 
// phela memoization samjho 
// memoization ka matlab hai react mein unnecessiry rerendering rokna
// jis se performance bhetar ho react app ki 
// react memo component ka lia hota hai 
// working
// parent se child ko asa props ana jis ki state change nhi horahi ho or wo render nhi horaha ho
// dosra ya ka jab parent ki state change ho rahi ho tu sirf wo rerender ho unncessiry child rerender na ho 
// jiski state bhi change nhi ho rahi usko prevent default krna ka lia react memo ka use krta hai
// important baat 
// react memo koi hook nhi hai 
// ya ek higher order function hai
// ya pora ka pora component pr lagta hai 

import { memo } from "react";

// arrow function way
const UserName = memo(({name}) => {
    console.log('check rerendering')
  return <>
    <h1>{name}</h1>
  </>;
});
export default UserName;

// normal function 
// or 
// arrow function 
// mein react memo use krna mein thora sa farq hai

// normal function way
// function UserName({name}){
//     console.log('check rerendering')
//   return <>
//     <h1>{name}</h1>
//   </>;
// };
// export default memo(UserName);
