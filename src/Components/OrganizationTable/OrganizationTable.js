import React from 'react';
import age from '../../Hooks/useAgeCalculation';

const OrganizationTable = ({d, handleChangeStatus}) => {

console.log(d);
    return (
        <div className=' '>
            <div className=' grid grid-cols-12 gap-5 p-3'>


                <div className='col-span-12 p-3 border'>
                    <img className=' h-full w-full object-cover mx-auto' src={d?.photoURL} alt="" />
                </div>

                <div className='col-span-12 '>
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
                            <h1 className=' text-sm'>Founded:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{d?.founded}</h1>
                        </div>
                    </div>
                   
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Email:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{d?.email}</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Phone Number:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{d?.phoneNumber}</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>District:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{d?.district}</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Upazila:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{d?.upazila}</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Post Office:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{d?.postOffice} ({d?.postCode})</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Division:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{d?.division}</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Total Seat:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{d?.seat}/{d?.seat-100}</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Empty seat:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{100}</h1>
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

export default OrganizationTable;