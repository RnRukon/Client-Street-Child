import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import token from '../../../Utils/Token/token';

export const childApi = createApi({
    reducerPath: 'childApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/street-child/streetChild' }),
    tagTypes: ['child'],
    endpoints: (builder) => ({

        getAllChild: builder.query({
            query: () => ({
                url: `/getAllUser`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['child']
        }),
        getAllStreetChild: builder.query({
            query: () => ({
                url: `/getAllStreetChild`,
                method: 'GET',

            }),
            providesTags: ['child']
        }),
        getSingleChild: builder.query({
            query: ({ id }) => ({
                url: `/getSingleUser/${id}`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['child']
        }),

        getSingleChildByUserId: builder.query({
            query: ({ id }) => ({
                url: `/getSingleChildByUserId/${id}`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['child']
        }),
        getMyStreetChildList: builder.query({
            query: () => ({
                url: `/getMyAllStreetChild`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['child']
        }),


        addChild: builder.mutation({
            query: (data) => ({
                url: `/addStreetChild`,
                method: 'POST',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['child']
        }),
        updateChild: builder.mutation({
            query: ({ data, id }) => ({
                url: `/updateChild/${id}`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['child']
        }),


    })
})

export const {
    useGetAllChildQuery,
    useGetMyStreetChildListQuery,
    useAddChildMutation,
    useGetSingleChildQuery,
    useUpdateChildMutation,
    useGetAllStreetChildQuery,
    useGetSingleChildByUserIdQuery

} = childApi;