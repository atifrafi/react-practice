import User from "./components/01-component/User";
import Profile from "./components/02-import-export/Internal_Component";
import { ProfileData , blue} from "./components/02-import-export/Internal_Component";
import Card from './components/03-jsx/Card'
import Event from "./components/04-event-functions/Event";
import State from "./components/05-state/State";
import Toggle from "./components/05-state/Toggle";

const App = () => {
  return (
    <>
      {/* for useState hook*/}
      {/* <State/> */}
      <Toggle/>

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
