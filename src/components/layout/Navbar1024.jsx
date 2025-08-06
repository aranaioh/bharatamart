//For screen smaller than and upto 1024px width

"use client"

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { BiUser } from "react-icons/bi";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "../ui/dropdown";
import { RiExportFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { IoMdHeartEmpty } from "react-icons/io";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { fashionCategories, electronicsCategories, homeDecorCategories, televisionsCategories } from "@/constants/categories";


export default function TopNavbar1024() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("menu");
    const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setAccountDropdownOpen(false);
        navigate("/login");
    };

    console.log("TopNavbar1024 rendered", accountDropdownOpen);

    return (
        <div className="w-full h-20 flex justify-between px-4 items-center">
            <RiMenuFill
                onClick={() => setIsOpen(true)}
                className="font-semibold text-3xl cursor-pointer"
            />
            <img src="/Bharatmart_logo_200.png" alt="logo" className="w-16 h-16" />

            <DropdownMenu open={accountDropdownOpen} onOpenChange={(open) => setAccountDropdownOpen(open)}>
                <DropdownMenuTrigger asChild>
                    <button
                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-bg bg-white focus:outline-none"
                        onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                    >
                        <BiUser className="text-3xl text-primary-bg" />
                    </button>
                </DropdownMenuTrigger>

                {accountDropdownOpen && (
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem asChild>
                            <a
                                href="/myaccount/profile"
                                className="flex items-center gap-2 py-2 px-3"
                                onClick={() => setAccountDropdownOpen(false)}
                            >
                                <BiUser className="text-xl text-primary-bg" />
                                My Profile
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <a
                                href="/wishlist"
                                className="flex items-center gap-2 py-2 px-3"
                                onClick={() => setAccountDropdownOpen(false)}
                            >
                                <IoMdHeartEmpty className="text-xl text-primary-bg" />
                                Wishlist
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <a
                                href="/myaccount/orders"
                                className="flex items-center gap-2 py-2 px-3"
                                onClick={() => setAccountDropdownOpen(false)}
                            >
                                <RiExportFill className="text-xl text-primary-bg" />
                                Orders
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <a
                                href="/myaccount/addressess"
                                className="flex items-center gap-2 py-2 px-3"
                                onClick={() => setAccountDropdownOpen(false)}
                            >
                                <FaLocationDot className="text-xl text-primary-bg" />
                                Addressess
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <button
                                className="flex items-center gap-2 py-2 px-3 w-full text-left"
                                onClick={handleLogout}
                            >
                                <RiLogoutBoxRFill className="text-xl text-primary-bg" />
                                Logout
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                )}

            </DropdownMenu>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent side="left" className="w-[300px] p-0">

                    <div className="flex items-center justify-end">
                        <SheetClose asChild>
                            <div className="py-4 pr-3 flex items-center gap-2">
                                <RxCross1 className="font-semibold" />
                                <span className="font-semibold">Close</span>
                            </div>
                        </SheetClose>
                    </div>

                    <div className="font-semibold text-sm flex">
                        <div
                            className={cn(
                                "cursor-pointer py-4 w-1/2 font-semibold flex justify-center",
                                activeTab === "menu" ? "border-b-2 border-black text-black bg-[#e9e9e9]" : "text-muted-foreground bg-[#f5f5f5]"
                            )}
                            onClick={() => setActiveTab("menu")}
                        >
                            MENU
                        </div>
                        <div
                            className={cn(
                                "cursor-pointer py-4 w-1/2 font-semibold flex justify-center",
                                activeTab === "categories" ? "border-b-2 border-black text-black bg-[#e9e9e9]" : "text-muted-foreground bg-[#f5f5f5]"
                            )}
                            onClick={() => setActiveTab("categories")}
                        >
                            CATEGORIES
                        </div>
                    </div>

                    <div className="">
                        {activeTab === "menu" ? (
                            <ul className="space-y-4 text-sm px-4">
                                <li className="text-md cursor-pointer">Home</li>
                                <li className="text-md cursor-pointer">Shop</li>
                                <li className="text-md cursor-pointer flex items-center gap-2">
                                    <span><IoMdHeartEmpty /></span> Wishlist
                                </li>
                                <li className="text-md cursor-pointer flex items-center gap-2">
                                    <span><BiUser /></span> Login / Register
                                </li>
                            </ul>
                        ) : (
                            <Accordion type="single" collapsible className="w-full p-0">
                                <AccordionItem value="electronics">
                                    <AccordionTrigger
                                        className="bg-white text-black"
                                        openClassName="bg-[#e9e9e9] text-black font-bold"
                                    >
                                        Electronics
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="text-sm text-muted-foreground divide-y divide-gray-200">
                                            {electronicsCategories.map((cat) => (
                                                <li key={cat.title} className="py-3 pl-4">{cat.title}</li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="fashion">
                                    <AccordionTrigger
                                        className="bg-white text-black"
                                        openClassName="bg-[#e9e9e9] text-black font-bold"
                                    >
                                        Fashion
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Accordion type="single" collapsible className="w-full">
                                            {fashionCategories.map((cat) => (
                                                <AccordionItem value={cat.title} key={cat.title} className="p-0">
                                                    <AccordionTrigger className="bg-white text-black" openClassName="bg-[#e9e9e9] text-black font-bold">
                                                        {cat.title}
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <Accordion type="single" collapsible className="w-full p-0">
                                                            {cat.subcategories.map((sub) => (
                                                                <AccordionItem value={sub.title} key={sub.title} className="p-0">
                                                                    <AccordionTrigger className="bg-white text-black" openClassName="bg-[#e9e9e9] text-black font-bold">
                                                                        {sub.title}
                                                                    </AccordionTrigger>
                                                                    <AccordionContent>
                                                                        <ul className="list-none p-0 m-0">
                                                                            {sub.items.map((item) => (
                                                                                <li key={item} className="py-3 border-b border-gray-200 pl-4">{item}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </AccordionContent>
                                                                </AccordionItem>
                                                            ))}
                                                        </Accordion>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="home-decor">
                                    <AccordionTrigger
                                        className="bg-white text-black"
                                        openClassName="bg-[#e9e9e9] text-black font-bold"
                                    >
                                        Home Decor
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="text-sm text-muted-foreground divide-y divide-gray-200">
                                            {homeDecorCategories.map((cat) => (
                                                <li key={cat.title} className="py-3 pl-4">{cat.title}</li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="televisions">
                                    <AccordionTrigger
                                        className="bg-white text-black"
                                        openClassName="bg-[#e9e9e9] text-black font-bold"
                                    >
                                        Televisions
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="text-sm text-muted-foreground divide-y divide-gray-200">
                                            {televisionsCategories.map((cat) => (
                                                <li key={cat.title} className="py-3 pl-4">{cat.title}</li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        )}
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    );

}
