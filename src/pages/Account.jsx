import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiExportFill, RiLogoutBoxRFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
} from "../components/ui/sheet";


const accountmenu = [
    {
        url: "/myaccount/profile",
        icon: <FaUser className="text-xl text-primary-bg" />,
        label: "Profile"
    },
    {
        url: "/myaccount/orders",
        icon: <RiExportFill className="text-xl text-primary-bg" />,
        label: "Orders"
    },
    {
        url: "/myaccount/addressess",
        icon: <FaLocationDot className="text-xl text-primary-bg" />,
        label: "Addressess"
    },
    {
        url: "/myaccount/settings",
        icon: <IoMdSettings className="text-xl text-primary-bg" />,
        label: "Settings"
    },
]

const Account = () => {

    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    return (
        <div className="relative">
            <div className="bg-gray-100 min-h-fit flex">

                {/* Desktop sidebar */}
                <div className="lg:w-1/4 hidden lg:block bg-blue-400 p-4 shadow-lg bg-white">
                    <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
                    <div className="border-t border-gray-400 w-full py-5">
                        {accountmenu.map((item) => (
                            <a href={item.url} className="flex w-full items-center gap-2 py-2 hover:bg-[#eee] font-semibold text-lg px-3 rounded-lg" key={item.label}>
                                {item.icon}
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <button className="flex items-center text-white gap-2 py-2 px-3 mt-4 bg-primary-bg text-white rounded-lg w-full justify-center">
                        {/* <RiLogoutBoxRFill /> */}
                        <span className="text-semibold text-xl">Logout</span>
                    </button>
                </div>

                <div className="lg:w-3/4 w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Account;