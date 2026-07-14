import { useRef, useState } from "react";
import User from "./components/01-component/User";
import Profile from "./components/02-import-export/Internal_Component";
import { ProfileData , blue} from "./components/02-import-export/Internal_Component";
import Card from './components/03-jsx/Card'
import Event from "./components/04-event-functions/Event";
import State from "./components/05-state/State";
import Toggle from "./components/05-state/Toggle";
import DataPassing from "./components/06-props/DataPassing";
import DefaultProps from "./components/07-advance-props/DefaultProps";
import JsxPassAsProps from "./components/07-advance-props/Jsx-Pass-As-Props";
import OnclickEventAsProps from "./components/07-advance-props/OnclickEventAsProps";
import Input from "./components/08-onchange-event/Input";
import Form from "./components/09-controlled-component/Form"
import UForm from "./components/10-uncontrolled-component/UForm"
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
import UserRef from './components/23-forwardRef/User'
import SubmitBtn from "./components/24-useFormstatus/SubmitBtn";
import Loader from "./components/25-usetransistion hook/Loader";
import ParentCom from "./components/26-react memo/ParentCom";

const App = () => {
  const [hobby, setHobby] = useState();

  const name = 'atif';
  const age = 26;
  const hobbies = {cars: 'nissan', type: 'petrol' }
  const hobby2 = ['task1','task2','task3','task4',]

  // function as props 
  const handleName = (name)=>{
    alert(`${name} subscribe`)
  }

  // forward ref 
  const inputRef = useRef()

  const handleFocus = ()=>{
        console.log(inputRef)
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "yellow"
    }

  // use formstatus hook
   const handleAction = async ()=>{
     await new Promise((resolve) => setTimeout(resolve,2000));
     console.log('form submitted')
  }
  
  return (
    <>
    {/* for react memo */}
    <ParentCom/>

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
