import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import token from '../../../Utils/Token/token';

export const feedbackApi = createApi({
    reducerPath: 'feedbackApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/street-child/feedbacks' }),
    tagTypes: ['feedbacks'],
    endpoints: (builder) => ({

        getFeedbacks: builder.query({
            query: () => ({
                url: `/getFeedbacks`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['feedbacks']
        }),
        postFeedbacks: builder.mutation({
            query: ({ data }) => ({
                url: `/postFeedbacks`,
                method: 'POST',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['feedbacks']
        }),

    })
})

export const {
    usePostFeedbacksMutation,
    useGetFeedbacksQuery
} = feedbackApi;