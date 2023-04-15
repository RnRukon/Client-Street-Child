import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleChildQuery, useUpdateChildMutation } from '../../../../Redux/features/Child/ChildApi';
import ChildTable from '../../../../Components/ChildTable/ChildTable';
import UserTable from '../../../../Components/UserTable/UserTable';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';

const ChildDetails = () => {

    const { id } = useParams();
    const { data } = useGetSingleChildQuery({ id });

    const {data:user}=useGetSingleChildQuery({id});


    const [updateStatus] = useUpdateChildMutation();
    const childs = data?.result;


    const handleChangeStatus = async (status, id) => {
        const data = { status }
        await updateStatus({ data, id })

    };


    return (
        <div className=' container mx-auto py-3'>
            <DashboardNavbar pageTitle='User Details'/>
            <div className=' grid grid-cols-12 gap-5 pt-9'>
                <div className='h-screen overflow-y-auto col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 border p-2'>
                    <h1 className=' text-center'>User</h1>
                    <UserTable child={user?.result} />

                </div>


                <div className=' h-screen overflow-y-auto col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 border'>
                    <div>
                        <h1 className=' text-center'>Child</h1>
                    </div>

                    <div className=' '>
                        {
                            childs?.childList?.map((d, i) => (
                                <ChildTable
                                    key={i}
                                    d={d}
                                    handleChangeStatus={handleChangeStatus}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChildDetails;