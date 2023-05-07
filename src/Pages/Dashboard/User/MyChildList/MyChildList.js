import React, { useState } from 'react';
import { useGetMyStreetChildListQuery } from '../../../../Redux/features/Child/ChildApi';
import Paginate from '../../../../Components/Pagination/Pagination';
import ChildTable from '../../../../Components/ChildTable/ChildTable';
import { useGetMeQuery } from '../../../../Redux/features/Auth/UserApi';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';



const MyChildList = () => {
    const { data } = useGetMyStreetChildListQuery();
    const { data: user } = useGetMeQuery();
    const childList = data?.result;

    // pagination --------------------
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const count = Math?.ceil(childList?.length / itemsPerPage)

    const paginateItem = childList?.slice(startIndex, endIndex)


    return (
        <div className=' container mx-auto py-3'>
            <DashboardNavbar pageTitle='My Child' />

            <div className=' grid grid-cols-12 gap-5 pt-9'>
                {
                    paginateItem?.map(data => (
                        <div key={data?._id} className=" col-span-12 md:col-span-6 ">
                            <ChildTable d={{ ...data, uerId: user?.result?.user?._id }} />
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

export default MyChildList;