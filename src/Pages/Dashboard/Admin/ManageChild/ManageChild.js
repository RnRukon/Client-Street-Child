import React from 'react';
import { NavLink } from 'react-router-dom';
import {FcViewDetails} from 'react-icons/fc';
import { useGetAllChildQuery } from '../../../../Redux/features/Child/ChildApi';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';
const ManageChild = () => {

    const { data } = useGetAllChildQuery();

    return (
        <div className='container mx-auto py-3'>
            <DashboardNavbar pageTitle='Manage child'/>
            <div className=" overflow-x-auto">

                <div className="w-full ">
                    <div className="bg-white shadow-md rounded my-6">
                        <table className="min-w-max w-full table-auto">

                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">User</th>
                                    <th className="py-3 px-6 text-left">Child Count</th>
                                    <th className="py-3 px-6 text-center">Post Office</th>
                                    <th className="py-3 px-6 text-center">District</th>
                                    <th className="py-3 px-6 text-center">Upazila</th>
                                    <th className="py-3 px-6 text-center">Division</th>
                                    <th className="py-3 px-6 text-center">Details</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">

                                {
                                    data?.result?.filter(data => data?.childList?.length > 0)?.map((data) => (
                                        <tr key={data._id} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="mr-2">
                                                        <img className=' h-10 w-10 rounded-full object-cover' src={data?.photoURL} alt="" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{data?.name}</p>
                                                        <a href={`mailto:${data?.email}`}>{data?.email}</a>
                                                        <br />
                                                        <a href={`tel:+:${data?.phoneNumber}`}>{data.phoneNumber}</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                <div className="flex items-center">

                                                    <span>{data?.childList.length} Person</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center justify-center">
                                                    {data?.postOffice} ({data?.postCode})

                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {data?.district}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {data?.upazila}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {data?.division}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex item-center justify-center">
                                                    <NavLink to={`/dashboard/childDetails/${data._id}`}>
                                                        <div className=" mr-2 transform hover:text-purple-500 hover:scale-125">
                                                           <FcViewDetails size={30}/>
                                                        </div>
                                                    </NavLink>

                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>

                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ManageChild;