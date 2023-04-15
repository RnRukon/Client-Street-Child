import React from 'react';
import { logout, userLogout } from '../../Redux/features/Auth/AuthSlice';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Logout = ({ className, icon }) => {
    // logout -------------------------------
    const dispatch = useDispatch();


    const handleLogout = () => {
        dispatch(userLogout())
            .then(() => {
                dispatch(logout())
            })
    }

    return (
        <>
            <NavLink

                onClick={handleLogout}
                className={className}

            >
                {icon}
                Logout
            </NavLink>
        </>
    );
};

export default Logout;