import React, { useState } from 'react';
import { useGetMyStreetChildListQuery } from '../../../../Redux/features/Child/ChildApi';
import Paginate from '../../../../Components/Pagination/Pagination';
import ChildTable from '../../../../Components/ChildTable/ChildTable';
import { useGetMeQuery } from '../../../../Redux/features/Auth/UserApi';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';



const MyChildList = () => {
    const { data } = useGetMyStreetChildListQuery();
    const{data:user}=useGetMeQuery();
    const childList = data?.result;
    const [perPage] = useState(10);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);

    const paginateItem = childList?.slice((current - 1) * size, current * size)


    return (
        <div className=' container mx-auto py-3'>
            <DashboardNavbar pageTitle='My Child'/>

            <div className=' grid grid-cols-12 gap-5 pt-9'>
                {
                    paginateItem?.map(data => (
                        <div key={data?._id} className=" col-span-12 md:col-span-6 ">
                            <ChildTable d={{...data,uerId:user?.result?.user?._id}} />
                        </div>
                    ))
                }

            </div>

            <div className='  flex justify-center pt-10'>
                <div className="table-filter-info">
                    <Paginate
                        items={childList}
                        current={current}
                        size={size}
                        setSize={setSize}
                        setCurrent={setCurrent}
                    />
                </div>
            </div>

        </div>
    );
};

export default MyChildList;