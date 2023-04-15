import React, { useState } from 'react';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';
import DashboardCard from '../../../../Components/DashboardCard/DashboardCard';
import { BiChild } from "react-icons/bi";
import BarChart from '../../../../Components/Carts/BarChart';
import { UserData as ChildData } from '../../../../Components/Carts/Data';
import LineChart from '../../../../Components/Carts/LineChart';
import { useGetAllChildQuery, useGetAllStreetChildQuery } from '../../../../Redux/features/Child/ChildApi';
// import PieChart from '../../../../Components/Carts/PieChart';

const AdminDashboard = () => {

    
    const [userData] = useState({
        labels: ChildData.map((data) => data.year),
        datasets: [
            {
                label: "Street Child Gained",
                data: ChildData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#2a71d0",
                    "#50AF95",
                    "green",
                    "#505e70",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    const { data: childLisData } = useGetAllStreetChildQuery();
    const { data: allUsers } = useGetAllChildQuery();
    const childList = childLisData?.result;

    const totalPendingChild = childList?.filter(d => d.status === 'pending').length;
    const totalDeliveredChild = childList?.filter(d => d?.status === 'delivered').length;

    const totalUsers = allUsers?.result?.length
    const totalChild = childList?.length;






    return (
        <div className='py-3  container mx-auto'>

            {/* Dashboard counter card  */}
            <DashboardNavbar pageTitle='Dashboard' />
            <div className=' pt-2 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                <DashboardCard
                    icon={<BiChild size={100} />}
                    title={'Total User'}
                    count={totalUsers}
                />
                <DashboardCard
                    icon={<BiChild size={100} />}
                    title={'Total Child'}
                    count={totalChild}
                />
                <DashboardCard
                    icon={<BiChild size={100} />}
                    title={'Total Child Pending'}
                    count={totalPendingChild}
                />
                <DashboardCard
                    icon={<BiChild size={100} />}
                    title={'Total Child delivered'}
                    count={totalDeliveredChild}
                />
            </div>

            {/* cart ------------------------- */}
            <div className=' grid grid-cols-12 gap-5 mt-10'>
                <div className='col-span-12 md:col-span-6'>
                    <BarChart chartData={userData} />
                </div>
                <div className='col-span-12 md:col-span-6'>
                    <LineChart chartData={userData} />
                </div>
                {/* <PieChart chartData={userData} /> */}
            </div>
        </div>
    );
};

export default AdminDashboard;