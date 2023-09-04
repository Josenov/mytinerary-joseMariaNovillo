import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Welcome";
import Cities from "../Pages/Cities";
import Carousel from "../Components/Carousel";
import Layout from "../Layouts/Layout";
import CityDetails from "../Pages/CityDetails";
import ItineraryCard from "../Components/ItineraryCard";


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

            {
                path:'/cities/:id',
                element: <CityDetails />,
                
            },
        ]
    },

    
]);


export default router;