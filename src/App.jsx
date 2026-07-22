import { Children, useRef, useState } from "react";
import User from "./components/01-component/User";
import Profile from "./components/02-import-export/Internal_Component";
import {
  ProfileData,
  blue,
} from "./components/02-import-export/Internal_Component";
import Card from "./components/03-jsx/Card";
import Event from "./components/04-event-functions/Event";
import State from "./components/05-state/State";
import Toggle from "./components/05-state/Toggle";
import DataPassing from "./components/06-props/DataPassing";
import DefaultProps from "./components/07-advance-props/DefaultProps";
import JsxPassAsProps from "./components/07-advance-props/Jsx-Pass-As-Props";
import OnclickEventAsProps from "./components/07-advance-props/OnclickEventAsProps";
import Input from "./components/08-onchange-event/Input";
import Form from "./components/09-controlled-component/Form";
import UForm from "./components/10-uncontrolled-component/UForm";
import CheckBox from "./components/11-checkbox/CheckBox";
import RadioAndDropdown from "./components/12-radio-selectdropdown/RadioAndDropdown";
import ForLoop from "./components/13-loops-react/ForLoop";
import MapLoop from "./components/13-loops-react/MapLoop";
import FilterAnMap from "./components/13-loops-react/FilterAnMap";
import ComplexLogic from "./components/13-loops-react/ComplexLogic";
import UseEffect from "./components/14-useeffect/UseEffect";
import Quote from "./components/15-inline-style/Quote";
import Heading from "./components/16-external-style/Heading";
import UserCard from "./components/17-module-css/UserCard";
import TextCom from "./components/18-styled-component-library/Text";
import BootsrtapButton from "./components/19-bootstrap/Button";
import CardT from "./components/20-tailwind-css/CardT";
import MuiComponent from "./components/21-material-ui/MuiComponent";
import ChildComp from "./components/22-function as props/ChildComp";
import UserRef from "./components/23-forwardRef/User";
import SubmitBtn from "./components/24-useFormstatus/SubmitBtn";
import Loader from "./components/25-usetransistion hook/Loader";
import ParentCom from "./components/26-react memo/ParentCom";
import Memo from "./components/27-use memo hook/Memo";
import UpdateArr from "./components/28-updation array in state/UpdateArr";
import ObjUpd from "./components/29-updation object in state/ObjUpd";
import Layout from "./components/30-props children/Layout";
import ParentCompo from "./components/31-state lifting/ParentCom";
import Derived from "./components/32-derived state/Derived";
import { UserContext } from "./components/33-context api/UserContext";
import UserProfile from "./components/33-context api/UserProfile";
import GuestProfile from "./components/33-context api/GuestProfile";
import FormHandling from "./components/34-useActionState hook/FormHandling";
import ID from "./components/35-useID hook/ID";
import { Link, NavLink, Outlet } from 'react-router'


const App = () => {
  const [hobby, setHobby] = useState();

  const name = "atif";
  const age = 26;
  const hobbies = { cars: "nissan", type: "petrol" };
  const hobby2 = ["task1", "task2", "task3", "task4"];

  // function as props
  const handleName = (name) => {
    alert(`${name} subscribe`);
  };

  // forward ref
  const inputRef = useRef();

  const handleFocus = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  };

  // use formstatus hook
  const handleAction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("form submitted");
  };

  // context api
  // Parent component ki apni state
  const [user, setUser] = useState("Atif");

  // nav link active link css
  const navStyle = ({isActive})=>({
    fontSize: '28px',
    color: isActive ? 'orange' : 'black',
    fontWeight: isActive ? 'bold':'normal',
    textDecoration: 'none'
  })
  
  return (
    <>
      {/* for react router */}
      {/* creating routes */}
      {/* in main.jsx */}
      {/* show links using react router link */}
      <nav>
        {/* link bhi react router ka part hai ju page ko reload hona se rokta hai */}
        {/* <Link to='/'>Home</Link> */}
         {/* {" | "} */}
        {/* <Link to='/contact'>Contact</Link> */}
        {/* outlet component ka andar ka show krta hai */}
        {/* <Outlet/> */}

        {/* nav link */}
        {/* nav link or link se dono se route lagata hai */}
        {/* lakin nav link ziyda bhetar ha isma istrue matlab boolean milta hai */}
        {/* jis se active link laga sakta hai */}
        {/* <NavLink to='/' style={navStyle}>Home</NavLink>
        {"  "}
        <NavLink to='contact' style={navStyle}>Contact</NavLink>
        <Outlet/> */}
        
        {/* nested route */}
        <h1>Welcome home</h1>
        
      </nav>



    {/* for use id hook */}
    {/* <ID/> */}


      {/* for use action state hook */}
      {/* <FormHandling/> */}
    
      {/* for context api */}
      {/* Provider lagaya aur usme 'user' state daal di */}
    {/* <UserContext.Provider value={user}>
      <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
        <h1>App Component (Parent)</h1> */}
        
        {/* Input box taake aap live state change karke dekh sakein */}
        {/* <input 
          type="text" 
          value={user} 
          onChange={(e) => setUser(e.target.value)} 
          placeholder="Type username here..."
          style={{ padding: "8px", fontSize: "16px" }}
        /> */}

        {/* Humne is component ko koi props nahi diye! */}
        {/* <UserProfile />
        <GuestProfile/>
        
      </div>
    </UserContext.Provider> */}


      {/* for derived state */}
      {/* <Derived quantity={20} price={10}/> */}

      {/* for state lifting */}
      {/* <ParentCompo/> */}

      {/* for props.children */}
      {/* note props.children nested component mein ziyad use hota hai */}
      {/* <Header name='bmw'>
        <h2>heading two</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          atque accusantium. Corporis deserunt non quod mollitia dolore quisquam
          obcaecati ipsum dolor! A, quo dolores using props.children
        </p>
        <Layout><p>hello layout</p></Layout>
      </Header> */}

      {/* for update object in state */}
      {/* <ObjUpd/> */}

      {/* for update array in state */}
      {/* <UpdateArr/> */}

      {/* for use memo hook */}
      {/* <Memo/> */}

      {/* for react memo */}
      {/* <ParentCom/> */}

      {/* for use transistion hook */}
      {/* <Loader/> */}

      {/* for useFormstatus */}
      {/* <form action={handleAction}>
      <SubmitBtn/>
    </form> */}

      {/* forward ref */}
      {/* <UserRef reff={inputRef} />
    <button style={{backgroundColor:'yellow'}} onClick={handleFocus}>focus</button> */}

      {/* for function as props */}
      {/* <ChildComp handleName={handleName} name='atif'/>
    <ChildComp handleName={handleName} name='asif'/>
    <ChildComp handleName={handleName} name='jake'/>
    <ChildComp handleName={handleName} name='owais'/> */}

      {/* for material UI library */}
      {/* <MuiComponent/> */}

      {/* for tailwind css */}
      {/* <CardT/> */}

      {/* for bootstrap */}
      {/* <BootsrtapButton/> */}

      {/* for styled component lib */}
      {/* <TextCom/> */}

      {/* for module css */}
      {/* <UserCard uname='atif'/>
    <UserCard uname='asif'/>
    <UserCard uname='amir'/> */}

      {/* for external css */}
      {/* <Heading/> */}

      {/* for inline css */}
      {/* <Quote/> */}

      {/* for useEffect */}
      {/* <UseEffect/> */}

      {/* loop in react */}
      {/* for complex logic, use a helper function ya new component to return jsx */}
      {/* {
      hobby2.map((item,index)=>
        <ComplexLogic key={index} elem={item} indx={index}/>
      )
      } */}
      {/* filter + map combine use for loop */}
      {/* <FilterAnMap/> */}
      {/* map method for loop */}
      {/* <MapLoop/> */}
      {/* for loop */}
      {/* <ForLoop/> */}

      {/* for radion and select in react */}
      {/* <RadioAndDropdown/> */}

      {/* for checkbox */}
      {/* <CheckBox/> */}

      {/* for uncontrolled component */}
      {/* <UForm/> */}

      {/* for Controlled component */}
      {/* <Form/> */}

      {/* for onchange event */}
      {/* <Input/> */}

      {/* for advance props */}
      {/* default props */}
      {/* <DefaultProps name='amir'/> */}
      {/* pass jsx as a props */}
      {/* <JsxPassAsProps name="abc">
          <div>
            <h1>hello</h1>
            <h2>jsx passing</h2>
            <h2>as a props</h2>
          </div>
      </JsxPassAsProps> */}
      {/* onclick event as props */}
      {/* {hobby && <OnclickEventAsProps hobby={hobby}/>}
      <button onClick={()=>setHobby('circket')}>show hobby</button>
      <button onClick={()=>setHobby()}>hide hobby</button> */}

      {/* for props */}
      {/* <DataPassing name={name} age={age} hobbies={hobbies}/> */}

      {/* for useState hook*/}
      {/* <State/> */}
      {/* <Toggle/> */}

      {/* for event and function */}
      {/* <Event/> */}

      {/* for jsx */}
      {/* <Card/> */}

      {/* for import export */}
      {/* <Profile/>
      <ProfileData/>
      {blue} varibale hai */}
    </>
  );
};

export default App;
