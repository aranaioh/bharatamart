//Search bar Component for the navbar

import { Search } from "lucide-react";

export default function Searchbar() {
    return (
        <>
            <div className="flex-1 flex items-center justify-center relative">
                <input
                    type="text"
                    placeholder="Search for products"
                    className="px-4 py-2 lg:py-4 rounded-full lg:pr-14 pr-12 w-full bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-orange"
                />
                <div className="absolute right-[5px] lg:right-2 bg-primary-bg w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center rounded-full text-white cursor-pointer">
                    <Search className="text-xl" />
                </div>
            </div>
        </>
    );
};
