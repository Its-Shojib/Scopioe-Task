import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
        ],
    },
]);
export default router;