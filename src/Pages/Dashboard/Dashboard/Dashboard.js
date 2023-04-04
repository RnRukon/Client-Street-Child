import React from 'react';
import AdminDashboard from '../Admin/AdminDashboard/AdminDashboard';
import UserDashboard from '../User/UserDashboard/UserDahboard';

const Dashboard = () => {
    const role = 'user';
    return (
        <div>
            {role === "user" && <UserDashboard />}
            {role === "admin" && <AdminDashboard />}
        </div>
    );
};

export default Dashboard;