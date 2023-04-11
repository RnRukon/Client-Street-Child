import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import token from '../../../Utils/Token/token';

export const organizationApi = createApi({
    reducerPath: 'organizationApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/street-child/organizations' }),
    tagTypes: ['organization'],
    endpoints: (builder) => ({

        getOrganizations: builder.query({
            query: () => ({
                url: `/getOrganizations`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['organization']
        }),
        /*  getAllStreetChild: builder.query({
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
         }),*/
        deliveryChildInOrganization: builder.mutation({
            query: ({ data }) => ({
                url: `/deliveryChild`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['organization']
        }),
        /*  updateOrganization: builder.mutation({
             query: ({ data, id }) => ({
                 url: `/updateOrganization/${id}`,
                 method: 'PATCH',
                 headers: { 'Authorization': token },
                 body: data
             }),
             invalidatesTags: ['child']
         }), */


    })
})

export const {
    useGetOrganizationsQuery,
    useUpdateOrganizationMutation,
    useDeliveryChildInOrganizationMutation

} = organizationApi;