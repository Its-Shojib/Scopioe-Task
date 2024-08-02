import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Register></Register>,
        errorElement: <Home></Home>,
        children: [
            { path: "register", element: <Register></Register> },
        ],
    },
]);
export default router;