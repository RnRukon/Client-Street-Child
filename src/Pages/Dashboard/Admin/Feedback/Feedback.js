import React from 'react';
import { useGetFeedbacksQuery } from '../../../../Redux/features/Feedback/FeedbackApi';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';
import StarsRating from 'stars-rating'
const Feedback = () => {
    const { data } = useGetFeedbacksQuery();

    console.log(data?.result);
    return (
        <div className=' pt-3'>
            <DashboardNavbar pageTitle='Feedback' />
            <div class="flex flex-col pt-3">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Rating
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Feedback
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {
                                        data?.result?.map(feed => (
                                            <tr key={feed._id}>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0 h-10 w-10">
                                                            <img class="h-10 w-10 rounded-full" src={feed?.photoURL} alt="" />
                                                        </div>
                                                        <div class="ml-4">
                                                            <div class="text-sm font-medium text-gray-900">{feed?.name}</div>
                                                            <div class="text-sm text-gray-500">{feed?.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm text-gray-900">{feed?.email}</div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm text-gray-900">
                                                        <StarsRating
                                                            className='py-5'
                                                            count={5}
                                                            readOnly={true}
                                                            value={feed?.rating}

                                                            size={30}
                                                            color2={'#ffd700'} /></div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <span class="text-xs text-gray-900 ">{new Date(feed?.createdAt).toDateString()}</span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-pre-wrap w-96">
                                                    <span class="text-xs text-gray-900 ">{feed?.message}</span>
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
        </div>


    );
};

export default Feedback;