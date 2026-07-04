import { useState } from "react";
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


const App = () => {
  const [hobby, setHobby] = useState();

  const name = 'atif';
  const age = 26;
  const hobbies = {cars: 'nissan', type: 'petrol' }
  return (
    <>
      

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
