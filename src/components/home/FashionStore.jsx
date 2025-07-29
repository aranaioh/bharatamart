import ProductCard from "../ui/utils/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const todayDealsProducts = [
    {
        images: [
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
        inStock: true,
        isNew: true,
        actualPrice: 999.0,
        discountPercentage: 34,
        description:
            "This luxurious case features a glitter diamond camera protector that adds a touch of sparkle and glamour. The clear, transparent design showcases your phone’s sleek lines while the plated bling rhinestone detailing creates a dazzling effect.",
        SKU: "MABC1",
        ratingCount: 100,
        ratingValue: 4.5,
        oldPrice: 1499.0,
        newPrice: 999.0,
    },
    {
        images: [
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "Noise ColorFit Pro 4 Alpha 1.78\" AMOLED Smart Watch",
        inStock: true,
        isNew: false,
        actualPrice: 3499.0,
        discountPercentage: 20,
        description:
            "1.78\" AMOLED Display, Bluetooth Calling, 60Hz Refresh Rate, 100+ Sports Modes, 7-day Battery Life.",
        SKU: "NCP4A2",
        ratingCount: 250,
        ratingValue: 4.2,
        oldPrice: 4399.0,
        newPrice: 3499.0,
    },
    {
        images: [
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "boAt Stone 1200 14W Bluetooth Speaker (Black)",
        inStock: false,
        isNew: true,
        actualPrice: 2999.0,
        discountPercentage: 40,
        description:
            "14W RMS Stereo Sound, 9H Playback, RGB LEDs, IPX7 Waterproof, TWS Feature.",
        SKU: "BST1200",
        ratingCount: 180,
        ratingValue: 4.7,
        oldPrice: 4999.0,
        newPrice: 2999.0,
    },
    {
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
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },
];

const FashionStore = () => {
    return (
        <div className="w-full bg-white">
            <h2 className="text-[28px] max-sm:text-[20px] font-semibold pt-8 min-md:pt-10 min-md:pb-8 pb-6">Fashion Store</h2>

            <Swiper
                pagination={{ dynamicBullets: true }}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    }
                }}
                onAutoplay={true}
                modules={[Pagination]}
                className="mySwiper"
                style={{ paddingBottom: '20px', position: 'relative' }}
            >
                {todayDealsProducts?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard product={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <style>{`
                .mySwiper .swiper-pagination {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    z-index: 10;
                }
                .mySwiper .swiper-button-next,
                .mySwiper .swiper-button-prev {
                    top: 44%;
                    transform: translateY(-50%);
                }
            `}</style>
        </div>
    );
};

export default FashionStore;