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





    const [perPage] = useState(6);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);

    const paginateItem = data?.result?.slice((current - 1) * size, current * size)

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
                        items={data?.result}
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

export default ChildList;