import React, { useState } from 'react';
import { useGetAllStreetChildQuery } from '../../Redux/features/Child/ChildApi';
import age from '../../Hooks/useAgeCalculation';
import Image from '../Features/image/image14.jpg'
import Paginate from '../Pagination/Pagination';

const HomePageDeliveredChild = () => {
    const { data: childList } = useGetAllStreetChildQuery();
    const items = childList?.result?.filter(d => d?.status === 'delivered');





    const [perPage] = useState(6);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);

    const paginateItem = items?.slice((current - 1) * size, current * size)




    return (

        <div className='bg-gradient-to-br from-slate-200 via-sky-500 to-slate-200'>


            <div className=' container mx-auto  pb-24 p-3  '>
                <h1 className=' font-extrabold  font-serif text-3xl md:text-6xl  text-yellow-300   py-10 text-center'>Street Child in delivered</h1>
                <div className=' grid grid-cols-12 gap-5'>
                    <div className='col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4'>
                        <img className=' w-full h-full' src={Image} alt="" />
                    </div>
                    <div className='col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8'>
                        <div className=' grid grid-cols-12 gap-5'>


                            {
                                paginateItem?.map(data => (
                                    <div key={data?._id} className=" col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 ">


                                        <div className=' shadow-lg p-5 rounded-3xl grid  gap-2 grid-cols-6 bg-gradient-to-b md:bg-gradient-to-r from-green-100 from-10% via-green-400 via-30% to-emerald-600 to-90%  shadow-slate-500'>
                                            <div className='col-span-3 md:col-span-2   flex justify-center md:justify-start '>
                                                <img className=' h-28 w-28 object-cover rounded-full' src={data?.photo} alt="" />
                                            </div>
                                            <div className='col-span-3 md:col-span-4 text-start md:text-start'>
                                                <h1 className=' text-md font-extrabold text-slate-600'>{data?.name}</h1>
                                                <p className=' text-xs'> <span className=' font-extrabold'>Date Of Birth:</span> {new Date(data?.dateOfBirth).toDateString()}</p>
                                                {<p className=' text-xs'> <span className=' font-extrabold'>Age:</span> {age(new Date(data?.dateOfBirth))}</p>}
                                                {<p className=' text-xs capitalize'> <span className=' font-extrabold'>Gender:</span> {data?.gender}</p>}
                                                {<p className=' text-xs capitalize '> <span className=' font-extrabold'>Delivery in : {data?.organization}</span></p>}


                                            </div>
                                        </div>


                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>
                <div className='  flex justify-center pt-10'>
                    <div className="table-filter-info">
                        <Paginate
                            items={items}
                            current={current}
                            size={size}
                            setSize={setSize}
                            setCurrent={setCurrent}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageDeliveredChild;