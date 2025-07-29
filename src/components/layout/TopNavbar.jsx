// TopNavbar.jsx , for screen size more than 1024px width

import Searchbar from "./Searchbar";

const TopNavbar = () => {
  return (
    <div className="w-full h-24 flex items-center gap-6 justify-between bg-white py-1 px-4 border-b">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src="/Bharatmart_logo_200.png" alt="Logo" className='w-16 h-16' />
      </div>

      {/* Search bar */}
      <div className="px-5 w-full">
        <Searchbar />
      </div>

      {/* Support info */}
      <div className="flex item-center py-2 gap-4 min-w-[250px]">
        <img src="/support.svg" alt="Support" className="w-12 h-12" />
        <div className="flex flex-col text-sm">
          <span className="text-black font-semibold">24 Hour Support</span>
          <span className="text-black font-semibold">support@bharat-mart.com</span>
        </div>
      </div>

    </div>
  );
};

export default TopNavbar;