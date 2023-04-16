import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import token from '../../../Utils/Token/token';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://streed-child.onrender.com/api/v1/street-child/users' }),
    tagTypes: ['user'],
    endpoints: (builder) => ({

        getMe: builder.query({
            query: () => ({
                url: `/getMe`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['user']
        }),

        updateProfileInfo: builder.mutation({
            query: (data) => ({
                url: `/updateProfile`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['user']
        }),
        makeAdmin: builder.mutation({
            query: (data) => ({
                url: `/makeAdmin`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['user']
        }),


    })
})

export const { useUpdateProfileInfoMutation, useGetMeQuery, useMakeAdminMutation } = userApi;