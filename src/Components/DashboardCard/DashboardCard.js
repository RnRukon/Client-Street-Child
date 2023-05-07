import React from 'react';

const DashboardCard = ({ icon, title, count }) => {
    return (
        <div className="md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex justify-evenly  ">
            <div className='text-gray-500'>
                {icon}
            </div>

            <div>
                <p className="mb-3 font-normal text-gray-500 ">{ title}</p>
                <p className="mb-3 font-extrabold text-gray-500	 ">{count} </p>
            </div>
        </div>





    );
};

export default DashboardCard;