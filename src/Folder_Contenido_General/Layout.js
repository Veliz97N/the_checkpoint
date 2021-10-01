import Sidebar from "../Folder_SideBar_TopBar/Sidebar";
import Topbar from "../Folder_SideBar_TopBar/Topbar";


const Layout = ({ children, hasNavbar, hasSidebar }) => {
    return (
        <>
            {hasNavbar && <Topbar />}
            <div className="contenidoGeneral">
                { hasSidebar && <Sidebar />}
                <div className="jeje">
                    {children}
                </div>
            </div>
            {/*  */}
        </>
    )
}

export default Layout;