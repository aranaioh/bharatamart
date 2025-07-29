import { IoIosCart, IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";
import CartDrawer from "../ui/utils/CartDrawer";
import { useState } from "react";

const FooterMenu = () => {

    const [cartdrawerOpen, setCartDrawerOpen] = useState(false);

    return (
        <>
            <div className="w-full flex justify-between shadow-inner px-4 py-3 bg-white">
                <a href="/compare" className="cursor-pointer  bg-white flex flex-col justify-center items-center" title="Compare"><IoIosGitCompare className="text-2xl " /> <span className="text-xs sm:text-sm font-semibold">Compare</span></a>
                <a href="/wishlist" className="cursor-pointer  bg-white flex flex-col justify-center items-center" title="Wishlist"><IoMdHeartEmpty className="text-2xl" />  <span className="text-xs sm:text-sm font-semibold">Wishlist</span></a>
                <div onClick={() => setCartDrawerOpen(true)} className="cursor-pointer  bg-white flex flex-col justify-center items-center" title="Cart"><IoIosCart className="text-2xl" />  <span className="text-xs sm:text-sm font-semibold">Cart</span> </div>
            </div>

            {cartdrawerOpen && (
                <CartDrawer isOpen={cartdrawerOpen} onClose={() => setCartDrawerOpen(false)} product={null} />
            )}
        </>

    )
}

export default FooterMenu;