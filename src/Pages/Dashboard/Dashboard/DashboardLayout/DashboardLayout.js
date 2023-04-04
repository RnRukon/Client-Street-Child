import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';


const DashboardLayout = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex flex-grow'>

            <div className=' pl-2 py-2'>
                <DashboardSidebar open={open} setOpen={setOpen} />
            </div>

            <div className='px-3 text-xl text-gray-900 font-semibold h-screen w-full overflow-y-auto'>

                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;