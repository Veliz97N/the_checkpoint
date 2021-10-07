import { useContext } from "react";
import Sidebar from "../Folder_SideBar_TopBar/Sidebar";
import Topbar from "../Folder_SideBar_TopBar/Topbar";
import UserContext from "../UserContext/UserContext";
import { useMediaQuery } from 'react-responsive'

const Layout = ({ children, hasNavbar, hasSidebar }) => {
    const {isDesplegado, productoSeleccionado}= useContext(UserContext);
    const activo = {
        paddingLeft: '13rem',
        transition: "all ease .5s"
    };
    const no_activo = {

        paddingLeft: '5rem',
        transition: "all ease .5s"
      };
      const isChiquito = useMediaQuery({
        query: '(max-width: 830px)'
      })

    return (
        <>
            {hasNavbar && <Topbar />}
            <div className="contenidoGeneral">
                { hasSidebar && <Sidebar />}
                {!isChiquito?
                <div className="contenedorDeInformacion" style={!isDesplegado ? activo : no_activo}>
                    {children}
                </div>
                :<div className="contenedorDeInformacion" style={no_activo}>
                {children}
                </div>}
            </div>
            
            
        </>
    )
}

export default Layout;