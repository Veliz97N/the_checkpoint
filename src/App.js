import Sidebar from "./Folder_SideBar_TopBar/Sidebar";
import Topbar from "./Folder_SideBar_TopBar/Topbar";
import {UserProvider} from '../src/UserContext/UserContext';


function App() {
  return (
    <UserProvider>
      <Topbar></Topbar>
      <div className="contenedor_sidebar_vistasPrograma">
        <Sidebar></Sidebar>
        
      </div>

    </UserProvider>
  );
}

export default App;
