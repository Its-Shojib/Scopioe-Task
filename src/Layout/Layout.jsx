import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div className="container max-w-screen-xl mx-auto min-h-screen px-4 md:px-8">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;