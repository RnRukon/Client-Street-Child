import React from 'react';
import { useGetSingleOrganizationQuery } from '../../../../../Redux/features/Organization/OrganizationApi';
import { useParams } from 'react-router-dom';
import OrganizationTable from '../../../../../Components/OrganizationTable/OrganizationTable';
import ChildTable from '../../../../../Components/ChildTable/ChildTable';
import { useUpdateChildMutation } from '../../../../../Redux/features/Child/ChildApi';
import DashboardNavbar from '../../../Dashboard/DashboardNavbar/DashboardNavbar';

const OrganizationDetails = () => {
    const { id } = useParams();

    const { data } = useGetSingleOrganizationQuery({ id });
    const [updateStatus] = useUpdateChildMutation();

    const handleChangeStatus = async (status, id) => {
        const data = { status }
        await updateStatus({ data, id })

    };
    return (
        <div className=' container mx-auto py-3'>
            <DashboardNavbar pageTitle='Organization Details'/>
            <div className=' grid grid-cols-12 gap-5 pt-9'>
                <div className='h-screen overflow-y-auto col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 border p-2'>
                    <h1 className=' text-center'>Organization</h1>
                  {
                    data?.result?._id&&
                    <OrganizationTable d={data?.result}/>

                  }
                </div>


                <div className=' h-screen overflow-y-auto col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 border'>
                    <div>
                        <h1 className=' text-center'>Child</h1>
                    </div>

                    <div className=' '>
                         {
                            data?.result?.childList?.map((d, i) => (
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

export default OrganizationDetails;