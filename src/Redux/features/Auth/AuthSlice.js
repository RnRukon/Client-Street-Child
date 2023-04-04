import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from '../../../Firebase/firebase.config';
import axios from 'axios';
import token from '../../../Utils/Token/token';


const initialState = {
    user: {},
    isLoading: true,
    isError: false,
    error: '',

}


export const registration = createAsyncThunk(
    "auth/registration",
    async ({ email, password, name, photoURL, district, phoneNumber, founded, postOffice, postCode, upazila, division, seat, role }) => {




        const data = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(auth.currentUser, {
            displayName: name, photoURL
        });

        let user = {
            email: data?.user?.email,
            photoURL: data?.user?.email ? data?.user?.photoURL : photoURL,
            name: data?.user?.email ? data?.user?.displayName : name,
            district,
            phoneNumber,
            founded,
            postOffice,
            postCode,
            upazila,
            division,
            seat,
            role
        }

        if (user?.email) {
            const res = await axios.post('http://localhost:5000/api/v1/street-child/users/createUser', user);

            user = res?.data?.result;
        }

        return user;

    }
)

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }) => {
        const data = await signInWithEmailAndPassword(auth, email, password);

        let user = {
            email: data?.user?.email,
            photoURL: data?.user?.photoURL,
            name: data?.user?.displayName
        };

        if (user.email) {
            const res = await axios.post('http://localhost:5000/api/v1/street-child/users/loginUser', { email: email });
            user = res?.data?.result?.user;
            if (res?.data?.result?.token) {
                localStorage.setItem("street_Child_token", res?.data?.result?.token);
            }
        }
        return user;

    }
);


export const userLogout = createAsyncThunk(
    "auth/userLogout",
    async () => {
        return await signOut(auth)
            .then(() => {
                localStorage.removeItem('street_Child_token')
            })
            ;

    }
)



export const getMe = createAsyncThunk(
    "auth/getMe",
    async () => {

        const res = await axios.get('http://localhost:5000/api/v1/street-child/users/getMe', {
            headers: {
                Authorization: token
            }
        });

        const user = res?.data?.result?.user;
        return user;
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {};
        },
        setUser: (state, { payload }) => {
            state.user = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registration.pending, (state) => {
            state.isLoading = true;
            state.isError = false
            state.error = "";

        }).addCase(registration.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            state.isError = false;
            state.error = "";

        }).addCase(registration.rejected, (state, action) => {
            state.isLoading = false;
            state.user = {};
            state.isError = true;
            state.error = action.error.message;

        }).addCase(login.pending, (state) => {
            state.isLoading = true;
            state.isError = false
            state.error = "";

        }).addCase(login.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            state.isError = false;
            state.error = "";

        }).addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.user = {};
            state.isError = true;
            state.error = action.error.message;

        }).addCase(userLogout.pending, (state) => {
            state.isLoading = true;
            state.isError = false
            state.error = "";

        }).addCase(userLogout.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = {};
            state.isError = false;
            state.error = "";

        }).addCase(userLogout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;

        }).addCase(getMe.pending, (state) => {
            state.isLoading = true;
            state.isError = false
            state.error = "";

        }).addCase(getMe.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            state.isError = false;
            state.error = "";

        }).addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;

        })
    }
})
export const { logout, setUser } = authSlice.actions
export default authSlice.reducer;