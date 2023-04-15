import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';



const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useSelector(state => state.auth)
    let location = useLocation();

console.log(user.role!=='admin');
    if (isLoading) {
        return <div className='h-screen
         flex justify-center items-center ' ><h1 className=' text-red-600'>Loading...</h1></div>
    }

    if (!isLoading && user?.role !== 'admin') {
        return <Navigate to="/dashboard" replace={true} state={{ from: location }} />
    }

    return children;


};

export default AdminRoute;