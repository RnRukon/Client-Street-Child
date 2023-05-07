import React, { useState } from 'react';
import { useDeliveryChildInOrganizationMutation, useGetOrganizationsQuery } from '../../Redux/features/Organization/OrganizationApi';
import age from '../../Hooks/useAgeCalculation';
import { useForm } from 'react-hook-form';
import { HashLink } from 'react-router-hash-link';
import QRCode from "react-qr-code";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ChildTable = ({ d, handleChangeStatus }) => {
    const { data: organizations } = useGetOrganizationsQuery();
    const [deliveryChild] = useDeliveryChildInOrganizationMutation();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isQRCode, setIsQRCode] = useState(false);

    const onSubmit = async organizationId => {
        const data = { ...organizationId, childId: d?._id };
        await deliveryChild({ data });

    };

    const { user } = useSelector((state) => state.auth);

    const QRCodeValue = { Name: d?.name, Age: age(new Date(d?.dateOfBirth)), DateOfBirth: new Date(d?.dateOfBirth).toDateString(), Gender: d?.gender, Status: d?.status + " in " + d?.organization }

    const location = useLocation();


    const path = location.pathname.split('/')?.[2]

    return (
        <div className=' border m-2 capitalize'>
            <div className=' grid grid-cols-12 gap-5 p-3'>
                <div className='col-span-12  md:col-span-12 lg:col-span-4 p-3 border flex flex-col justify-between'>

                    <div onClick={() => setIsQRCode(!isQRCode)} className='p-3'>
                        {
                            !isQRCode ?
                                <img className='h-40 w-40 object-cover mx-auto rounded-full cursor-pointer'
                                    src={d?.photo}
                                    alt="" /> :
                                <QRCode
                                    size={200}
                                    className=' h-40 w-40  mx-auto cursor-pointer'
                                    value={JSON.stringify(QRCodeValue)}
                                    viewBox={`0 0 256 256`}
                                    title="Street Child"
                                />
                        }

                    </div>


                    {path !== 'details' && <HashLink to={`/dashboard/details/${d?._id || d?.uerId}`} className='text-xs py-1 px-10  text-slate-50 bg-gradient-to-tr  from-cyan-300  to-cyan-700 hover:bg-gradient-to-tl active:bg-gradient-to-r rounded-lg font-extrabold text-center'>
                        <button className=''>Details</button>
                    </HashLink>}
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
                            <h1 className='text-sm'>{d?.gender}</h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-12 gap-5 border my-1'>
                        <div className=' col-span-5 p-1 '>
                            <h1 className=' text-sm'>Status:</h1>
                        </div>
                        <div className=' col-span-7 p-1 border-l'>
                            <h1 className='text-sm'>{d?.status}  {d?.organization && `in ${d?.organization}`}</h1>
                        </div>
                    </div>

                    {
                        user.role === "admin" && d.status !== 'delivered' &&
                        <div>

                            {<div className=' grid grid-cols-12 gap-5 border my-1'>
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
                            </div>}
                            <div className=' grid grid-cols-12 gap-5 border my-1'>
                                <div className=' col-span-5 p-1 '>
                                    <h1 className=' text-sm'>Delivery in Organization:</h1>
                                </div>
                                <div className=' col-span-7 p-1 border-l'>
                                    <div>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <select
                                                {...register("organizationId", { required: true })}
                                                className="relative block w-full rounded-t-md border-0 py-1.5 bg-white text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                            >
                                                <option value="">No Selected</option>
                                                {
                                                    organizations?.result?.filter(organization =>
                                                        organization.status === "approved").map(organization => (

                                                            <option key={organization._id} value={organization._id}>{organization?.name}</option>
                                                        ))
                                                }
                                            </select>
                                            {errors.organizationId && <p className=' text-xs text-red-500'>This field is required*</p>}
                                            <button className=' text-xs py-1 px-10  text-slate-50 bg-gradient-to-tr  from-cyan-300  to-cyan-700 hover:bg-gradient-to-tl active:bg-gradient-to-r rounded-lg font-extrabold' type='submit'>Delivery</button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>

            </div>
        </div>
    );
};

export default ChildTable;