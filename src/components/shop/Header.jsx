import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Header = () => {

    const swiperRef = useRef(null);


    const products = [
        {
            imgurl: "/home/todaydeals/bc2.webp",
            category: "Eelectronics",
            productCount: 12,
        },
        {
            imgurl: "/home/todaydeals/bc2.webp",
            category: "Fashion",
            productCount: 8,
        },
        {
            imgurl: "/home/todaydeals/bc2.webp",
            category: "Home Decor",
            productCount: 15,
        },
        {
            imgurl: "/home/todaydeals/bc2.webp",
            category: "Televisions",
            productCount: 20,
        },
    ];

    return (
        <div className="w-full p-4 bg-white rounded text-white py-8 lg:px-16 sm:px-5">
            {/* Swiper for screens <= 1024px */}
            <div className="block lg:hidden relative border-black">
                <Swiper
                    modules={[Navigation]}
                    className="w-full "
                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        920: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },

                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-32 h-32 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-1000">
                                    <img src={product.imgurl} alt={`Product ${index + 1}`} className="w-full h-full hover:scale-105 object-cover rounded" />
                                </div>
                                <div className="text-center">
                                    <h2 className="text text-gray-700 font-semibold">{product.category}</h2>
                                    <h4 className="text text-gray-500">{product.productCount} Products</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    className="absolute border top-[55%] left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 rounded px-1 py-5 border-none shadow hover:bg-white"
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
            </div>
            {/* Flex layout for lg and above */}
            <div className="hidden lg:flex gap-10 max-sm:gap-5 max-sm:flex-wrap max-sm:justify-between">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-1000">
                            <img src={product.imgurl} alt={`Product ${index + 1}`} className="w-full h-full hover:scale-105 object-cover rounded" />
                        </div>
                        <div className="text-center">
                            <h2 className="text text-gray-700 font-semibold">{product.category}</h2>
                            <h4 className="text text-gray-500">{product.productCount} Products</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Header;