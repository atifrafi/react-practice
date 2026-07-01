import User from "./components/01-component/User";
import Profile from "./components/02-import-export/Internal_Component";
import { ProfileData , blue} from "./components/02-import-export/Internal_Component";
import Card from './components/03-jsx/Card'

const App = () => {
  return (
    <>
      {/* for jsx */}
      <Card/>

    {/* for import export */}
      {/* <Profile/>
      <ProfileData/>
      {blue} varibale hai */}
    </>
  );
};

export default App;
