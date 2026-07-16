import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar";
import Header from "./header/Header";

function Layout(){
    return(
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex flex-1">
                <Sidebar />

            <main className="flex-1 flex">
                <Outlet />
            </main>
            </div>
        </div>
    );
}

export default Layout;