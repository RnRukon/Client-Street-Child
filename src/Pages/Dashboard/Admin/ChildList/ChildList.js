import React from 'react';
import { useGetAllStreetChildQuery, useUpdateChildMutation } from '../../../../Redux/features/Child/ChildApi';
import ChildTable from '../../../../Components/ChildTable/ChildTable';

const ChildList = () => {

    const { data } = useGetAllStreetChildQuery();
    const [updateStatus] = useUpdateChildMutation();

    const handleChangeStatus = async (status, id) => {
        const data = { status }
        await updateStatus({ data, id })

    };
    return (
        <div className=' h-screen overflow-y-auto'>

            <div className=' grid grid-cols-12'>
                {
                    data?.result?.map(data => (
                        <div key={data?._id} className=' col-span-12   md:col-span-6 lg:col-span-6 '>
                            <ChildTable  d={data} handleChangeStatus={handleChangeStatus} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ChildList;