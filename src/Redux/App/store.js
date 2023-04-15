import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import AuthReducer from '../features/Auth/AuthSlice';
import { userApi } from '../features/Auth/UserApi';
import { childApi } from '../features/Child/ChildApi';
import { organizationApi } from '../features/Organization/OrganizationApi';
import { feedbackApi } from '../features/Feedback/FeedbackApi';


const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [childApi.reducerPath]: childApi.reducer,
        [organizationApi.reducerPath]: organizationApi.reducer,
        [feedbackApi.reducerPath]: feedbackApi.reducer,
        auth: AuthReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, childApi.middleware, organizationApi.middleware, feedbackApi.middleware),

})

setupListeners(store.dispatch)
export default store;