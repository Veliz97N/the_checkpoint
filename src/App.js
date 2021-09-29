import Sidebar from "./Folder_SideBar_TopBar/Sidebar";
import Topbar from "./Folder_SideBar_TopBar/Topbar";
import {UserProvider} from '../src/UserContext/UserContext';


function App() {
  return (
    <UserProvider>

      <Topbar></Topbar>
      <Sidebar></Sidebar>
      

    </UserProvider>
  );
}

export default App;
