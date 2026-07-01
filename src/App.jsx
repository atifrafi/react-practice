import User from "./components/01-component/User";
import Profile from "./components/02-import-export/Internal_Component";
import { ProfileData , blue} from "./components/02-import-export/Internal_Component";

const App = () => {
  return (
    <>
      <Profile/>
      <ProfileData/>
      {blue} varibale hai
    </>
  );
};

export default App;
