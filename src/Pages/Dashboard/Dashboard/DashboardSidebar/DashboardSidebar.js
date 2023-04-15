import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import UserMenu from "./UserMenu";
import AdminMenu from "./AdminMenu";
import { VscChromeClose } from 'react-icons/vsc';
import Logout from "../../../../Authentication/Login/Logout";
import { AiOutlineLogout } from 'react-icons/ai';
import { useSelector } from "react-redux";



export default function DashboardSidebar() {
    const [open, setOpen] = useState(true);
    const { user } = useSelector(state => state.auth);

  
    return (

        <section className={` bg-gradient-to-l from-slate-500 via-slate-700 to-slate-900 ${open ? "w-72" : " w-16"}  duration-500 text-gray-100 px-4 rounded-3xl`}>
            <div className="py-3 flex justify-end">
                {open ?
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    /> :
                    <VscChromeClose
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />

                }
            </div>


            <div className="mt-4 flex flex-col gap-4 relative min-h-screen max-h-screen overflow-y-auto">

                {user?.role === 'user' && <UserMenu open={open} />}


                {user?.role === 'admin' && <AdminMenu open={open} />}


                <Logout
                    className=' w-full  group flex items-center text-sm text-white  gap-3.5 font-medium p-2 hover:bg-gray-700 rounded-md'
                    icon={<AiOutlineLogout size={16} />} />
            </div>
        </section>


    );
};



