import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Login/Register";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";


import AddStreetChild from "../Pages/Dashboard/User/AddStreetChild/AddStreetChild";
import MyChildList from "../Pages/Dashboard/User/MyChildList/MyChildList";
import Home from "../Pages/Home/Home";
import HomeLayout from "../Pages/Home/HomeLayout";
import Orphanages from "../Pages/Orphanages/Orphanages";
import Profile from "../Pages/Profiles/Profile";
import ChildList from "../Pages/Dashboard/Admin/ChildList/ChildList";
import ManageChild from "../Pages/Dashboard/Admin/ManageChild/ManageChild";
import DashboardLayout from "../Pages/Dashboard/Dashboard/DashboardLayout/DashboardLayout";
import ChildDetails from "../Pages/Dashboard/Admin/ManageChild/ChildDetails";
import RegisterOrganization from "../Authentication/RegisterOrganization";
import OrganizationList from "../Pages/Dashboard/Admin/OrganizationList/OrganizationList";
// import QRLScanner from "../Components/QRLScanner/QRLScanner";

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
                element: <Profile />,

            },
            {
                path: "/about",
                element: <About />,

            },
            {
                path: "/orphanages",
                element: <Orphanages />,

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
            /* {
                path: "/QRLScanner",
                element: <QRLScanner />,

            }, */
            {
                path: "/dashboard",
                element: <DashboardLayout />,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard />
                    },

                    {
                        path: '/dashboard/addStreetChild',
                        element: <AddStreetChild />
                    },
                    {
                        path: '/dashboard/myChildList',
                        element: <MyChildList />
                    },

                    // admin --------------------
                    {
                        path: '/dashboard/childList',
                        element: <ChildList />
                    },
                    {
                        path: '/dashboard/manageChild',
                        element: <ManageChild />
                    },
                    {
                        path: '/dashboard/childDetails/:id',
                        element: <ChildDetails />
                    },
                    {
                        path: '/dashboard/organizationList',
                        element: <OrganizationList />
                    },

                ]

            },
        ],

    },





]);