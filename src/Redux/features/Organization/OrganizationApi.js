import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import token from '../../../Utils/Token/token';

export const organizationApi = createApi({
    reducerPath: 'organizationApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://streed-child.onrender.com/api/v1/street-child/organizations' }),
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

        getSingleOrganization: builder.query({
            query: ({ id }) => ({
                url: `/getSingleOrganization/${id}`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['organization']
        }),

        deliveryChildInOrganization: builder.mutation({
            query: ({ data }) => ({
                url: `/deliveryChild`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['organization']
        }),
        updateOrganization: builder.mutation({
            query: ({ data, id }) => ({
                url: `/updateOrganization/${id}`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['organization']
        }),


    })
})

export const {
    useGetOrganizationsQuery,
    useUpdateOrganizationMutation,
    useDeliveryChildInOrganizationMutation,
    useGetSingleOrganizationQuery

} = organizationApi;