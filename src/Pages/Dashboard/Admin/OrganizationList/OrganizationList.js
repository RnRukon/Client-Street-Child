import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetOrganizationsQuery } from '../../../../Redux/features/Organization/OrganizationApi';
import OrganizationTable from '../../../../Components/OrganizationTable/OrganizationTable';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';
import Paginate from '../../../../Components/Pagination/Pagination';

const OrganizationList = () => {
    const { data } = useGetOrganizationsQuery();

    // pagination --------------------
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const count = Math?.ceil(data?.result?.length / itemsPerPage);

    const paginateItem = data?.result?.slice(startIndex, endIndex);

    return (
        <div className=' container mx-auto py-3'>
            <DashboardNavbar pageTitle='Organizations' />
            <div className=' grid grid-cols-12 gap-3 '>
                {
                    paginateItem?.map(data => (
                        <div key={data?._id} className=' col-span-12 sm:col-span-12  md:col-span-12 lg:col-span-6 xl:col-span-4 border '>
                            <Link to={`/dashboard/organization/details/${data?._id}`}>
                                <OrganizationTable d={data} />
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className='  flex justify-center'>
                <Paginate
                    setCurrentPage={setCurrentPage}
                    page={currentPage}
                    count={count}
                />
            </div>
        </div>
    );
};

export default OrganizationList;