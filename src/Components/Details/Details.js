import React from 'react';
import UserTable from '../UserTable/UserTable';
import { useParams } from 'react-router-dom';
import { useGetSingleChildByUserIdQuery } from '../../Redux/features/Child/ChildApi';
import ChildTable from '../ChildTable/ChildTable';
import DashboardNavbar from '../../Pages/Dashboard/Dashboard/DashboardNavbar/DashboardNavbar';

const Details = () => {
    const { id } = useParams();
    const { data: child } = useGetSingleChildByUserIdQuery({ id });
    return (
        <div className=' container mx-auto py-3'>
               <DashboardNavbar pageTitle='Child Details'/>
            <div className=' grid grid-cols-12 gap-5 mt-9'>
                <div className='h-screen overflow-y-auto col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 border p-2'>
                    <h1 className=' text-center'>User</h1>
                    <UserTable child={child?.result?.user} />

                </div>

                <div className=' h-screen overflow-y-auto col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 border'>
                    <div>
                        <h1 className=' text-center'>Child</h1>
                    </div>

                    <div className=' '>

                        {child?.result?._id && <ChildTable
                            d={child?.result}
                        />
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;