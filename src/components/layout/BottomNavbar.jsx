// BottomNavbar.jsx  screen size more than 1024px width

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { IoMdHeartEmpty, IoIosCart, IoIosGitCompare } from "react-icons/io";
import { BiUser } from 'react-icons/bi';
import Searchbar from "./Searchbar";
import { fashionCategories, electronicsCategories, homeDecorCategories, televisionsCategories } from "@/constants/categories";
import CartDrawer from "../ui/utils/CartDrawer";
import { RiExportFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";

const accountMenuItems = [
  {
    url: "/myaccount",
    icon: <BiUser className="text-xl text-primary-bg" />,
    label: "My Profile",
  },
  {
    url: "/wishlist",
    icon: <IoMdHeartEmpty className="text-xl text-primary-bg" />,
    label: "Wishlist",
  },
  {
    url: "/myaccount/orders",
    icon: <RiExportFill className="text-xl text-primary-bg" />,
    label: "Orders",
  },
  {
    url: "/myaccount/addressess",
    icon: <FaLocationDot className="text-xl text-primary-bg" />,
    label: "Addressess",
  },
];

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown";

export default function BottomNavbar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeFashionCategory, setActiveFashionCategory] = useState(null);
  const [activeFashionSubcategory, setActiveFashionSubcategory] = useState(null);
  const [cartdrawerOpen, setCartDrawerOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setActiveFashionCategory(null);
    setActiveFashionSubcategory(null);
  };

  return (
    <>
      <div className="bg-[#e6effd] py-2 px-4 lg:hidden flex">
        <Searchbar />
      </div>

      <div
        className="w-full h-14 lg:flex hidden items-center bg-[#e6effd] px-4 border-b relative"
        onMouseLeave={handleMouseLeave}
      >
        {/* Navigation links */}
        <div className="flex-1 flex items-center gap-1 text-sm">
          <a
            href="/"
            className={`px-4 py-2 rounded-full font-medium cursor-pointer ${location.pathname === "/" ? "bg-[#acc0d8] text-bg-primary" : "hover:bg-[#acc0d8] hover:text-bg-primary"
              }`}
          >
            Home
          </a>
          <a
            href="/shop"
            className={`px-4 py-2 rounded-full font-medium cursor-pointer ${location.pathname === "/shop" ? "bg-[#acc0d8] text-bg-primary" : "hover:bg-[#acc0d8] hover:text-bg-primary"
              }`}
          >
            All Products
          </a>

          {/* Electronics Menu */}
          <div
            className="relative px-4 py-2 rounded font-medium hover:bg-primary-bg/10 cursor-pointer"
            onMouseEnter={() => handleMouseEnter('electronics')}
          >
            <div className="flex items-center">
              Electronics
            </div>

            {/* Electronics Dropdown */}
            {activeMenu === 'electronics' && (
              <div
                className="absolute top-full left-0 mt-0 bg-white border border-gray-200 shadow-lg rounded-b z-50 w-64"
                onMouseEnter={() => setActiveMenu('electronics')}
              >
                <div className="px-4 py-3">
                  {electronicsCategories.map((category) => (
                    <a
                      key={category.title}
                      href="#"
                      className="block py-2 text-black hover:text-blue-600 border-b border-gray-100 last:border-b-0"
                    >
                      {category.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Fashion Menu */}
          <div
            className="relative px-4 py-2 rounded font-medium hover:bg-primary-bg/10 cursor-pointer"
            onMouseEnter={() => handleMouseEnter('fashion')}
          >
            <div className="flex items-center">
              Fashion
            </div>

            {/* Fashion Dropdown */}
            {activeMenu === 'fashion' && (
              <div
                className="absolute top-full left-0 mt-0 bg-white border border-gray-200 shadow-lg rounded-b z-50 min-w-[200px]"
                onMouseEnter={() => setActiveMenu('fashion')}
              >
                {/* Level 1: Main Categories */}
                <div className="border-b border-gray-100">
                  {fashionCategories.map((category) => (
                    <div
                      key={category.title}
                      className={`relative px-4 py-3 flex justify-between items-center hover:bg-gray-50 ${activeFashionCategory?.title === category.title ? 'bg-gray-50' : ''}`}
                      onMouseEnter={() => setActiveFashionCategory(category)}
                    >
                      <span className="font-medium">{category.title}</span>
                      <ChevronRight size={16} />

                      {/* Level 2: Subcategories - appears to the right */}
                      {activeFashionCategory?.title === category.title && (
                        <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg rounded-r min-w-[200px] z-50">
                          <div>
                            {activeFashionCategory.subcategories.map((subcategory) => (
                              <div
                                key={subcategory.title}
                                className={`relative px-4 py-3 flex justify-between items-center border-b border-gray-100 last:border-b-0 hover:bg-gray-50 ${activeFashionSubcategory?.title === subcategory.title ? 'bg-gray-50' : ''}`}
                                onMouseEnter={() => setActiveFashionSubcategory(subcategory)}
                              >
                                <span>{subcategory.title}</span>
                                <ChevronRight size={16} />

                                {/* Level 3: Items - appears to the right */}
                                {activeFashionSubcategory?.title === subcategory.title && (
                                  <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg rounded-r min-w-[200px] z-50">
                                    <div className="grid grid-cols-1 gap-2 p-4">
                                      {activeFashionSubcategory.items.map((item) => (
                                        <a
                                          key={item}
                                          href="#"
                                          className="py-2 text-black hover:text-blue-600 block"
                                        >
                                          {item}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Home Decor Menu */}
          <div
            className="relative px-4 py-2 rounded font-medium hover:bg-primary-bg/10 cursor-pointer"
            onMouseEnter={() => handleMouseEnter('home-decor')}
          >
            <div className="flex items-center">
              Home Decor
            </div>
            {/* Home Decor Dropdown */}
            {activeMenu === 'home-decor' && (
              <div
                className="absolute top-full left-0 mt-0 bg-white border border-gray-200 shadow-lg rounded-b z-50 min-w-[200px]"
                onMouseEnter={() => setActiveMenu('home-decor')}
              >
                <div className="px-4 py-3 text-flex">
                  {homeDecorCategories.map((category) => (
                    <a
                      key={category.title}
                      href="#"
                      className="block w-full text-left py-2 text-black hover:text-blue-600 border-b border-gray-100 last:border-b-0"
                    >
                      {category.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Televisions Menu */}
          <div
            className="relative px-4 py-2 rounded font-medium hover:bg-primary-bg/10 cursor-pointer"
            onMouseEnter={() => handleMouseEnter('televisions')}
          >
            <div className="flex items-center">
              Televisions
            </div>
            {/* Televisions Dropdown */}
            {activeMenu === 'televisions' && (
              <div
                className="absolute top-full left-0 mt-0 bg-white border border-gray-200 shadow-lg rounded-b z-50 min-w-[200px]"
                onMouseEnter={() => setActiveMenu('televisions')}
              >
                <div className="px-4 py-3 text-flex">
                  {televisionsCategories.map((category) => (
                    <a
                      key={category.title}
                      href="#"
                      className="block w-full text-left py-2 text-black hover:text-blue-600 border-b border-gray-100 last:border-b-0"
                    >
                      {category.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="#" className="px-4 py-2 rounded font-medium hover:bg-primary-bg/10">MobiPays</a>
        </div>

        {/* User/account/cart icons */}
        <div className="flex items-center gap-2 justify-end">
          <a href="/compare" className="cursor-pointer bg-white p-2 rounded-full" title="Compare"><IoIosGitCompare className="text-3xl " /></a>
          {/* User Dropdown using shadcn UI */}
          <div
            className="relative"
            onMouseEnter={() => setAccountDropdownOpen(true)}
          >
            <DropdownMenu open={accountDropdownOpen}
              onMouseEnter={() => setAccountDropdownOpen(true)}
              onMouseLeave={() => setAccountDropdownOpen(false)}
            >
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer bg-white p-2 rounded-full flex items-center">
                  <BiUser className="text-3xl" />
                </button>
              </DropdownMenuTrigger>
              {accountDropdownOpen && (
                <DropdownMenuContent
                  align="end" className="w-56 p-2 space-y-1"
                  onMouseEnter={() => setAccountDropdownOpen(true)}
                  onMouseLeave={() => setAccountDropdownOpen(false)}
                >
                  {accountMenuItems.map((item) => (
                    <DropdownMenuItem asChild key={item.label}>
                      <a href={item.url} className="flex items-center gap-2 py-2 hover:bg-[#eee] px-3 rounded-md">
                        {item.icon}
                        {item.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <button className="flex items-center gap-2 py-2 px-3 w-full text-left rounded-md" onClick={() => {/* handle logout here */ }}>
                      <RiLogoutBoxRFill className="text-2xl text-primary-bg" />
                      Logout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          </div>
          <a href="/wishlist" className="cursor-pointer bg-white p-2 rounded-full " title="Wishlist"><IoMdHeartEmpty className="text-3xl" /></a>
          <div onClick={() => setCartDrawerOpen(true)} className="cursor-pointer bg-primary-bg text-white p-2 rounded-full" title="Cart"><IoIosCart className="text-3xl" /> </div>
          <h4 className="font-semibold text-lg">₹ {220}</h4>
        </div>
      </div>

      {cartdrawerOpen && (
        <CartDrawer isOpen={cartdrawerOpen} onClose={() => setCartDrawerOpen(false)} product={null} />
      )}

    </>
  );
};