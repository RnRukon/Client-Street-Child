import React from 'react';
import { useGetMyStreetChildListQuery } from '../../../../Redux/features/Child/ChildApi';
import { MdVerified, MdPendingActions } from 'react-icons/md';
import ChildCard from '../../../../Components/ChildCard/ChildCard';
const MyChildList = () => {
    const { data, isLoading, isError, error } = useGetMyStreetChildListQuery();

    const childList = data?.result;




  
    return (
        <div className=' container mx-auto py-3'>

            <div className=' grid grid-cols-12 gap-5'>
                {
                    childList?.map(data => (
                        <div key={data?._id} className=" col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-3 ">
                           <ChildCard data={data} />
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default MyChildList;