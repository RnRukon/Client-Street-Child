import React, { Suspense, useState } from 'react';
import { useGetMyStreetChildListQuery } from '../../../../Redux/features/Child/ChildApi';
import Paginate from '../../../../Components/Pagination/Pagination';

const ChildCard = React.lazy(() => import('../../../../Components/ChildCard/ChildCard'));


const MyChildList = () => {
    const { data, isLoading, isError, error } = useGetMyStreetChildListQuery();

    const childList = data?.result;




    const [perPage] = useState(10);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);

    const paginateItem =  childList?.slice((current - 1) * size, current * size)
  

    return (
        <div className=' container mx-auto py-3'>

            <div className=' grid grid-cols-12 gap-5'>
                {
                    paginateItem?.map(data => (
                        <div key={data?._id} className=" col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-3 ">
                            <Suspense fallback={<h1>Loading...</h1>}>
                                <ChildCard data={data} />
                            </Suspense>
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