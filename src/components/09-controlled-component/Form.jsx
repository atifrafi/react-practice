// note :
// controlled component kya hai.
// aisa component jisma form ho or input ho or jisko react state se control krta ho yani upadate
// ya samjhlo jisko react control krta hai wo control component hai

import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // is se form ka by default behavior change hojata hai
    e.preventDefault()
    setName("")
    setPassword("")
  }

  const handleClear = ()=>{
    setName('')
    setPassword('')
  }

  return (
    <>
      <h3>Controlled Component</h3>
      <h4>Form</h4>
      {/* --------------------------- */}
      <form method="get" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <br /><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br /><br />
        <button>Submit</button>
        <button onClick={handleClear}>clear</button>
      </form>
      <div>
        <h2>live preview</h2>
        <p>name: {name}</p>
        <p>password: {password}</p>
      </div>
    </>
  );
};

export default Form;
