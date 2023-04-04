import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import AuthReducer from '../features/Auth/AuthSlice';
import { userApi } from '../features/Auth/UserApi';
import { childApi } from '../features/Child/ChildApi';
import { organizationApi } from '../features/Organization/OrganizationApi';


const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [childApi.reducerPath]: childApi.reducer,
        [organizationApi.reducerPath]: organizationApi.reducer,
        auth: AuthReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, childApi.middleware, organizationApi.middleware),

})

setupListeners(store.dispatch)
export default store;