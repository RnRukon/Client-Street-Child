import React, { useState } from 'react';
import { useGetAllStreetChildQuery, useUpdateChildMutation } from '../../../../Redux/features/Child/ChildApi';
import ChildTable from '../../../../Components/ChildTable/ChildTable';
import Paginate from '../../../../Components/Pagination/Pagination';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';

const ChildList = () => {

    const { data } = useGetAllStreetChildQuery(null, { pollingInterval: 1000 });
    const [updateStatus] = useUpdateChildMutation();

    const handleChangeStatus = async (status, id) => {
        const data = { status }
        await updateStatus({ data, id })

    };





       // pagination --------------------
       const [currentPage, setCurrentPage] = useState(1);
       const itemsPerPage = 6;
       const startIndex = (currentPage - 1) * itemsPerPage;
       const endIndex = startIndex + itemsPerPage;
       const count = Math?.ceil(data?.result?.length / itemsPerPage)
   

    const paginateItem = data?.result?.slice(startIndex, endIndex)

    return (
        <div className=' container mx-auto py-3'>
            <DashboardNavbar pageTitle='Child List' />
            <div className=' grid grid-cols-12 mt-9'>
                {
                    paginateItem?.map(data => (
                        <div key={data?._id} className=' col-span-12   md:col-span-6 lg:col-span-6 '>
                            <ChildTable d={data} handleChangeStatus={handleChangeStatus} />
                        </div>
                    ))
                }
            </div>
            <div className='  flex justify-center pt-10'>
                <div className="table-filter-info">
                    <Paginate
                        setCurrentPage={setCurrentPage}
                        page={currentPage}
                        count={count}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChildList;