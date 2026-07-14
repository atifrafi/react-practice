// note:
// use memo ka syntax usememo(function , dependancy array)
// use memo kia karta hai ya expensive calculation ko bar bar render se rokta hai unnessisery
// count jab jab chalta hai sath hi heavy calculation bhi sath mein chalti hai 
// jis se performance kharab hoti hai 
// islia us heavycalcultaion pr usememo hook use krta hai 
// ya heavy calcultion unnecisery render nhi hoga jab tak number state na change ho
// ya expensive value pr lagaya jata hai

import { useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // expensive calculation function
  const CalculationResult = ()=>{
    let result = number;

    for(let i=1; i<2000; i++){
        console.log('calculation chal rahi hai.')
        result = result * 2
    }

    return result
  }
  const heavyCalculation = useMemo(CalculationResult,[number])
  return (
    <>
      <h1>use memo hook</h1>
      {/* expansive calculation */}
      <h1>{heavyCalculation}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase : {count}</button>
      <br /><br />
      <button onClick={() => setNumber(number + 1)}>number change</button>
    </>
  );
};

export default Memo;
