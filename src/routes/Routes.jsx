import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Blogs from "../pages/Blogs/Blogs";
import Bookmarks from "../pages/Bookmarks/Bookmarks";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/blogs",
                element:<Blogs/>
            },
            {
                path:"/bookmarks",
                element:<Bookmarks/>
            },
        ]

    }
])