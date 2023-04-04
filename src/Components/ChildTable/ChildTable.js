import React from 'react';
import age from '../../Hooks/useAgeCalculation';


const ChildTable = ({ d, handleChangeStatus }) => {



    return (
        <div className=' border m-2'>
            <div className=' grid grid-cols-12 gap-5 p-3'>


                <div className='col-span-12  md:col-span-12 lg:col-span-4 p-3 border'>
                    <img className=' h-40 w-40 object-cover mx-auto rounded-full' src={d?.photo} alt="" />
                </div>

                <div className='col-span-12  md:col-span-12 lg:col-span-8 p-3'>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-base'>Name:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-base'>{d?.name}</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Age:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{age(new Date(d?.dateOfBirth))} Year old</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Date Of Birth:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{new Date(d?.dateOfBirth)?.toDateString()}</h1>
                        </div>

                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Gender:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{d?.gender?.toUpperCase()}</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Status:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{d?.status?.toUpperCase()}</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Police Verify Status:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{d?.policeVerifyStatus?.toUpperCase()}</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Action:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <div>

                                <select
                                    defaultValue={d?.status}
                                    onChange={(e) => handleChangeStatus(e.target.value, d?._id)}
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-1.5 bg-white text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                >
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approved</option>
                                    <option value="rejected">Rejected</option>
                                </select>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChildTable;