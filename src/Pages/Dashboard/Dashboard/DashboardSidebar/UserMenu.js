import React from 'react';
import { MdOutlineDashboard, MdOutlineFeedback } from "react-icons/md";
import { BiChild } from "react-icons/bi";
import { IoIosPersonAdd } from "react-icons/io";
import { HiOutlineUserCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserMenu = ({ open }) => {
    const { user } = useSelector(state => state.auth);



    const menus = [
        { name: `Profile (${user.role})`, link: "/profile", icon: HiOutlineUserCircle },
        { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
        { name: "Add Street Child", link: "/dashboard/addStreetChild", icon: IoIosPersonAdd },
        { name: "My Child list", link: "/dashboard/myChildList", icon: BiChild },
        { name: "Feedback", link: "/dashboard/feedback-form", icon: MdOutlineFeedback },


    ];

    return (
        <div className="mt-4 flex flex-col gap-4  ">
            {
                menus.map((item, i) => (
                    <Link
                        key={i}
                        to={item.link}

                        className={` w-full  group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-700 rounded-md`}
                    >
                        <div>
                            <item.icon size={20} />
                        </div>
                        <h2
                            style={{ transitionDelay: `${i}00ms`, }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                            {item.name}
                        </h2>
                        <h2
                            className={`${open && "hidden "
                                } fixed left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1  group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                            {item?.name}

                        </h2>
                    </Link>
                ))
            }

        </div>
    );
};




export default UserMenu;