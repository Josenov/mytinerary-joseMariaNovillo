import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';



const protectedRoute = ({children, path}) => {

    let user = useSelector(store => store.user.user);
    //console.log(user)

    if (user) {
        return children
    
    }else{
        return <Navigate to={path}/>
    }
}

export default protectedRoute