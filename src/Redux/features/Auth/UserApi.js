import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import token from '../../../Utils/Token/token';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/street-child/users' }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
       /*  getAllUsers: builder.query({
            query: () => ({
                url: `/get-all-users`,
                method: 'GET',
                headers: { 'Authorization': `Bearer ${localStorage?.getItem("token")}` },
            }),
            providesTags: ['user']
        }), */
        getMe: builder.query({
            query: () => ({
                url: `/getMe`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['user']
        }),
      /*   changePassword: builder.mutation({
            query: (data) => ({
                url: `/update-password`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['user']
        }), */
        updateProfileInfo: builder.mutation({
            query: (data) => ({
                url: `/updateProfile`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['user']
        }),
    /*     applyForSupplier: builder.mutation({
            query: (data) => ({
                url: `/applyForSupplier`,
                method: 'POST',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['user']
        }), */
      /*   getApplyForSupplier: builder.query({
            query: () => ({
                url: `/getApplyForSupplier`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['user']
        }), */
       /*  makeAddApplyForSupplier: builder.mutation({
            query: (data) => ({
                url: `/makeAddApplyForSupplier`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['user']
        }), */
       /*  deleteApplyForSupplier: builder.mutation({
            query: (data) => ({
                url: `/deleteApplyForSupplier`,
                method: 'DELETE',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['user']
        }), */

    })
})

export const {useUpdateProfileInfoMutation,useGetMeQuery} = userApi;