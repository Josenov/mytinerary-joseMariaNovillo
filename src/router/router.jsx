import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Welcome";
import Cities from "../Pages/Cities";
import Layout from "../Layouts/Layout";
import CityDetails from "../Pages/CityDetails";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ProtectedRoute from './ProtectedRoute'



const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/cities',
                element:   <Cities />
            },

            {
                path:'/',
                element: <Home />,
                
            },

            {
                path:'/cities/:id',
                element: <CityDetails />,
                
            },

            {
                path:'/login',
                element:  (<ProtectedRoute path='/'> <Login /> </ProtectedRoute>),
                
            },



            {
                path:'/signup',
                element: <SignUp/>,
                
            },

            {
                path:'/404',
                element: <img className="w-full" src="https://seowork.mx/blog/wp-content/uploads/404-error-page.png"/>,
                
            },
        ]
    },

    
]);


export default router;