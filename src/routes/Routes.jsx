import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";

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