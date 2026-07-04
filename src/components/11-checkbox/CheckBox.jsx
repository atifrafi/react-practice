import { useState } from "react";

const CheckBox = () =>{
    const [select , setSelect] = useState({
        // object
        html:false,
        css:false,
        js:false
    })

    const handleHtml = (e)=>{
        console.log(e.target.checked)
        setSelect({...select , html: e.target.checked})
    }
    const handleCss = (e)=>{
        console.log(e.target.checked)
        setSelect({...select , css: e.target.checked})
    }
    const handleJs = (e)=>{
        console.log(e.target.checked)
        setSelect({...select , js: e.target.checked})
    }
    return (
        <>
        <h1>Check Box</h1>
        <h3>Select Option</h3>
        <label htmlFor="">
            <input type="checkbox" onChange={handleHtml} checked={select.html}  />
            HTML
        </label>
        <br /><br />
        <label htmlFor="">
            <input type="checkbox" onChange={handleCss} checked={select.css}/>
            br
            CSS
        </label>
        <br /><br />
        <label htmlFor="">
            <input type="checkbox" onChange={handleJs} checked={select.js} />
            JS
        </label>
        <br /><br />
        <button onClick={()=>setSelect({html:false,css:false,js:false})}>Clear</button>
        <h2>Selected:</h2>
        <h3>{select.html && <span>Html</span> }</h3>
        <h3>{select.css && <span>css</span>}</h3>
        <h3>{select.js && <span>js</span>}</h3>
        </>
    )
}

export default CheckBox;