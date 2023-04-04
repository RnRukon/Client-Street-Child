import React from 'react';
import { useGetOrganizationsQuery } from '../../../../Redux/features/Organization/OrganizationApi';
import OrganizationTable from '../../../../Components/OrganizationTable/OrganizationTable';

const OrganizationList = () => {
    const { data } = useGetOrganizationsQuery();

    return (
        <div className=' container mx-auto py-3'>
            <div className=' grid grid-cols-12 gap-3 '>
                {
                    data?.result?.map(data => (
                        <div key={data?._id} className=' col-span-12 sm:col-span-12  md:col-span-12 lg:col-span-6 xl:col-span-4 border '>
                            <OrganizationTable d={data} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OrganizationList;