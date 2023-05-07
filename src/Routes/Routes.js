import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Login/Register";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AddStreetChild from "../Pages/Dashboard/User/AddStreetChild/AddStreetChild";
import MyChildList from "../Pages/Dashboard/User/MyChildList/MyChildList";
import Home from "../Pages/Home/Home";
import HomeLayout from "../Pages/Home/HomeLayout";
import Profile from "../Pages/Profiles/Profile";
import ChildList from "../Pages/Dashboard/Admin/ChildList/ChildList";
import ManageChild from "../Pages/Dashboard/Admin/ManageChild/ManageChild";
import DashboardLayout from "../Pages/Dashboard/Dashboard/DashboardLayout/DashboardLayout";
import ChildDetails from "../Pages/Dashboard/Admin/ManageChild/ChildDetails";
import RegisterOrganization from "../Authentication/RegisterOrganization";
import OrganizationList from "../Pages/Dashboard/Admin/OrganizationList/OrganizationList";
import Details from "../Components/Details/Details";
import OrganizationDetails from "../Pages/Dashboard/Admin/OrganizationList/OrganizationDetails/OrganizationDetails";
import PrivateRoute from "./PrivateRoute";
import MakeAdmin from "../Pages/Dashboard/Admin/MakeAdmin/MakeAdmin";
import AdminRoute from "./AdminRoute";
import ContactUs from "../Pages/ContactUs/ContactUs";
import NoteFoundPage from "../Pages/NoteFoundPage(404)/NoteFoundPage";
import FeedbackForm from "../Pages/Dashboard/User/Feedback/FeedbackfForm";
import Feedback from "../Pages/Dashboard/Admin/Feedback/Feedback";



export const routers = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />,

            },

            {
                path: "/profile",
                element:
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>,

            },
            {
                path: "/about",
                element: <About />,

            },
            {
                path: "/contactUs",
                element: <ContactUs />,

            },

            {
                path: "/login",
                element: <Login />,

            },
            {
                path: "/register",
                element: <Register />,

            },
            {
                path: "/registerOrganization",
                element: <RegisterOrganization />,

            },

            {
                path: "/dashboard",
                element:
                    <PrivateRoute>
                        <DashboardLayout />
                    </PrivateRoute>,
                children: [
                    {
                        path: '/dashboard',
                        element:
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                    },

                    {
                        path: '/dashboard/addStreetChild',
                        element:
                            <PrivateRoute>
                                <AddStreetChild />
                            </PrivateRoute>
                    },
                    {
                        path: '/dashboard/myChildList',
                        element:
                            <PrivateRoute>
                                <MyChildList />
                            </PrivateRoute>
                    },
                    {
                        path: '/dashboard/details/:id',
                        element:
                            <PrivateRoute>
                                <Details />
                            </PrivateRoute>
                    },
                    {
                        path: '/dashboard/feedback-form',
                        element:
                            <PrivateRoute>
                                <FeedbackForm />
                            </PrivateRoute>
                    },
                    // admin --------------------
                    {
                        path: '/dashboard/childList',
                        element:
                            <PrivateRoute>
                                <AdminRoute>
                                    <ChildList />
                                </AdminRoute>
                            </PrivateRoute>
                    },
                    {
                        path: '/dashboard/manageChild',
                        element:
                            <PrivateRoute>
                                <AdminRoute>
                                    <ManageChild />
                                </AdminRoute>
                            </PrivateRoute>
                    },
                    {
                        path: '/dashboard/childDetails/:id',
                        element:
                            <PrivateRoute>
                                <AdminRoute>
                                    <ChildDetails />
                                </AdminRoute>
                            </PrivateRoute>
                    },

                    {
                        path: '/dashboard/organizationList',
                        element:
                            <PrivateRoute>
                                <AdminRoute>
                                    <OrganizationList />
                                </AdminRoute>
                            </PrivateRoute>
                    },
                    {
                        path: '/dashboard/organization/details/:id',
                        element:
                            <PrivateRoute>
                                <AdminRoute>
                                    <OrganizationDetails />
                                </AdminRoute>
                            </PrivateRoute>
                    },
                    {
                        path: '/dashboard/makeAdmin',
                        element:
                            <PrivateRoute>
                                <AdminRoute>
                                    <MakeAdmin />
                                </AdminRoute>
                            </PrivateRoute>
                    },
                    {
                        path: '/dashboard/feedback',
                        element:
                            <PrivateRoute>
                                <AdminRoute>
                                    <Feedback />
                                </AdminRoute>
                            </PrivateRoute>
                    },

                ]

            },
        ],

    },
    {
        path:'*',
        element:<NoteFoundPage/>
    }





]);