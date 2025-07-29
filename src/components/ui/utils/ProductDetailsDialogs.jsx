import { useState, useRef } from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import {
    Dialog,
    DialogContent,
} from "../dialog";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


const ProductDetailDialogs = ({ open, setIsDialogOpen }) => {
    const [quantity, setQuantity] = useState(1);
    const handleQty = (type) => {
        setQuantity(qty => type === 'inc' ? qty + 1 : Math.max(1, qty - 1));
    };
    const swiperRef = useRef(null);

    const product = {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.vvvv18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    }

    return (
        <Dialog open={open} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-4xl w-full p-0 md:py-5 md:pl-5 flex gap-10 bg-white flex-col md:flex-row">
                {/* Left: Product Image/Swiper */}
                <div className="md:w-5/12 w-full mb-6 relative group overflow-hidden flex justify-center items-end p-3 md:p-0">
                    <Swiper
                        modules={[Navigation]}
                        className="w-full "
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        spaceBetween={5}
                    >
                        {product.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={product.title}
                                    className="rounded-t-md object-contain w-full h-full bg-gray-50 mx-auto"
                                />
                            </SwiperSlide>
                        ))}


                    </Swiper>
                    {/* Custom navigation buttons, only visible on hover */}
                    <button
                        className="absolute top-[55%] left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 rounded px-1 py-5 border-none shadow hover:bg-white"
                        style={{ transform: "translateY(-50%)" }}
                        aria-label="Previous"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <GrPrevious />
                    </button>
                    <button
                        className="absolute top-[55%] right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 rounded px-1 py-5 shadow hover:bg-white"
                        style={{ transform: "translateY(-50%)" }}
                        aria-label="Next"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <GrNext />
                    </button>
                    {/* Add to cart button */}
                    <div className="absolute bottom-0 left-0 right-0 bg-orange-500 text-white flex items-center justify-center h-10 translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-[9999] rounded-t-md cursor-pointer" >
                        <div className="flex items-center hover:bg-primary-bg hover:text-white space-x-2 text-sm font-medium">
                            Add to cart
                        </div>
                    </div>
                </div>
                {/* Right: Product Details (fully scrollable) */}
                <div className="md:w-7/12 mb-5 mt-9 w-full flex flex-col overflow-y-auto custom-scroll" style={{ maxHeight: "70vh" }}>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2 leading-tight">{product?.title || 'Product Title'}</h2>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="line-through text-gray-400 text-base md:text-lg">₹{product.oldPrice?.toLocaleString()}</span>
                        <span className="text-xl md:text-2xl font-bold text-blue-900">₹{product.newPrice?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center rounded overflow-hidden">
                            <button className="px-2 py-1 text-lg" onClick={() => handleQty('dec')}>-</button>
                            <span className="px-3 py-1 text-base bg-gray-50">{quantity}</span>
                            <button className="px-2 py-1 text-lg" onClick={() => handleQty('inc')}>+</button>
                        </div>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded font-semibold hover:bg-blue-800 transition text-sm md:text-base">Add To Cart</button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition text-sm md:text-base">Buy Now</button>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">{product.description}</p>
                    <div className="border-t pt-4 mt-4">
                        <div className="mb-1 text-xs md:text-sm"><span className="font-semibold">SKU:</span> {product.SKU || '-'}</div>
                        <div className="mb-1 text-xs md:text-sm"><span className="font-semibold">Categories:</span> Home Decor, Home Fragrances</div>
                        <div className="flex items-center gap-3 mt-2">
                            <span className="font-semibold text-xs md:text-sm">Share:</span>
                            <FaFacebookF className="text-gray-500 hover:text-blue-700 cursor-pointer" />
                            <FaTwitter className="text-gray-500 hover:text-blue-400 cursor-pointer" />
                            <FaPinterestP className="text-gray-500 hover:text-red-600 cursor-pointer" />
                            <FaLinkedinIn className="text-gray-500 hover:text-blue-800 cursor-pointer" />
                            <FaTelegramPlane className="text-gray-500 hover:text-blue-500 cursor-pointer" />
                        </div>
                    </div>
                    {/* Custom scrollbar styles */}
                    <style>{`
                        .custom-scroll::-webkit-scrollbar {
                            width: 8px;
                        }
                        .custom-scroll::-webkit-scrollbar-thumb {
                            background: #e0e7ef;
                            border-radius: 6px;
                        }
                        .custom-scroll::-webkit-scrollbar-track {
                            background: #f8fafc;
                        }
                        .custom-scroll {
                            scrollbar-width: thin;
                            scrollbar-color: #e0e7ef #f8fafc;
                        }
                    `}</style>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProductDetailDialogs;