import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]

    }
])