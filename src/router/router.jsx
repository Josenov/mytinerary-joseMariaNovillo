import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Welcome";
import Cities from "../Pages/Cities";
import Carousel from "../Components/Carousel";
import Layout from "../Layouts/Layout";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/cities',
                element: <Cities />
            },

            {
                path:'/',
                element: <Home />,
                
            },
        ]
    },

    
]);


export default router;