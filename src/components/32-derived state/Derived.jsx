// Derived state kya hai ?
// parent component ki state ya props se child component mein ju state banti hai
// wo derived state hai
// is se performance improved hoti hai
// agr acha se banayi jaye tu
// best way ha sath mein use memo use krna

import { useMemo, useState } from "react";

const Derived = ({ quantity, price }) => {
  // bad way
  // isma sab se bari problem ya hai ka total dynamic nhi hai  static hai
  // agr parent se props change ho rahi hai tu wo
  // child comp ki derived state ko change nhi kr rahi
  // const [total, setTotal] = useState(quantity*price)

  // good way
  const total = useMemo(() => {
    return quantity * price;
  }, [quantity, price]);

  return (
    <>
      <h1>Derived State</h1>
      <h2>Rice Quantity : {quantity}</h2>
      <h2>Rice Price : {price}</h2>
      <h2>Total : {total}</h2>
    </>
  );
};

export default Derived;

// 1. Derived State Kya Hai? (In Simple Words)
// Derived state ka matlab hai wo data jo pehle se maujood props ya state se calculate (derive) kiya ja sake.

// Iske liye aapko alag se React ki useState use karne ki bilkul zaroorat nahi hoti. Agar aap alag se state banayenge (jaise aapne "bad way" mein likha), to data duplicate ho jata hai aur sync se bahar chala jata hai.

// 2. "Good Way" vs "Even Better Way" (Do you really need useMemo?)
// Aapne jo useMemo wala tareeqa likha hai, wo bilkul sahi kaam karega. Lekin ek baat hamesha yaad rakhein: Simple calculations ke liye useMemo ki zaroorat nahi hoti.

// useMemo memory aur performance par thoda sa overhead (extra load) daalta hai kyunki React ko dependency array compare karni padti hai.
