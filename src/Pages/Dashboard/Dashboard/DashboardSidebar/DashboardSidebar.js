import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import UserMenu from "./UserMenu";
import AdminMenu from "./AdminMenu";





export default function DashboardSidebar() {
    const [open, setOpen] = useState(true);
    console.log(open);
    return (

        <section className={`bg-[#0e0e0e]  ${open ? "w-72" : " w-16"}  duration-500 text-gray-100 px-4 rounded-3xl`}>
            <div className="py-3 flex justify-end">
                <HiMenuAlt3
                    size={26}
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>


            <div className="mt-4 flex flex-col gap-4 relative min-h-screen max-h-screen overflow-y-auto">

                <UserMenu open={open} />
                <AdminMenu open={open} />

            </div>
        </section>


    );
};



