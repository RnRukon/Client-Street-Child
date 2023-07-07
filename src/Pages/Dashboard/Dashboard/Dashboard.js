import React from 'react';
import AdminDashboard from '../Admin/AdminDashboard/AdminDashboard';
import UserDashboard from '../User/UserDashboard/UserDahboard';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const { user } = useSelector(state => state.auth)
    return (
        <div>
            {user?.role === "user" && <UserDashboard />}
            {user?.role === "organization" && <UserDashboard />}
            {user?.role === "admin" && <AdminDashboard />}
        </div>
    );
};

export default Dashboard;