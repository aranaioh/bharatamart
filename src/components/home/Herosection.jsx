// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function HeroSection() {
    return (
        <div className='w-full bg-white'>
            <Swiper
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className='h-[500px] w-full rounded-lg'
            >
                <SwiperSlide
                    style={{
                        backgroundImage: "url('/home/thirdslider.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="flex flex-col items-center pt-5 text-center px-4 md:px-0">
                        <h2 className="text-white text-3xl max-sm:text-[18px] md:text-3xl font-bold md:mb-4 mb-2 drop-shadow-lg">Visit Our Exclusive Electronics Store</h2>
                        <p className="text-gray-200 md:mb-6 mb-4 max-sm:text-xs min-md:text-base max-md:text-sm  px-6 drop-shadow">Shop great deals on Power Banks, Smart Watches, Bluetooth Devices and more.</p>
                        <button className="bg-blue-900 text-white font-semibold px-5 py-3 text-sm rounded-lg shadow-lg hover:bg-blue-800 transition">Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: "url('/home/firstslider.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="flex flex-col items-start pt-10 text-left px-4 md:px-10 max-md:pt-8 max-md:px-8">
                        <h2 className="text-white text-3xl max-sm:text-[18px] md:text-3xl font-bold md:mb-4 mb-2 max-sm:pr-20 drop-shadow-lg">Great Accessories for your <br className="hidden md:block" /> Precious Phone</h2>
                        <p className="text-gray-200 md:mb-6 mb-4 max-sm:text-xs min-md:text-base max-md:text-sm drop-shadow">Covers, Headphones, Smart Watches and more</p>
                        <button className="bg-blue-900 text-white font-semibold px-5 py-3 text-sm rounded-lg shadow-lg hover:bg-blue-800 transition">Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: "url('/home/secondslider.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="flex flex-col items-end text-right px-4 pt-10 max-md:pt-8 md:px-10 max-md:px-8">
                        <h2 className="text-black text-3xl max-sm:text-[18px] md:text-3xl font-bold md:mb-4 mb-2 drop-shadow-lg">Style That Speaks – Fashion for Every You</h2>
                        <p className="text-black md:mb-6 mb-4 max-sm:text-xs drop-shadow">Where Trends Begin and Style Never Ends</p>
                        <button className="bg-blue-900 text-white font-semibold px-5 py-3 text-sm rounded-lg shadow-lg hover:bg-blue-800 transition">Shop Now</button>
                    </div>
                </SwiperSlide>
            </Swiper>

            <style>{`
        /* Custom pill-style pagination */
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background:rgb(134, 128, 160);
          opacity: 1;
          margin: 0 4px !important;
          box-shadow: none;
          transition: width 0.3s ease;
        }
          
        .swiper-pagination-bullet-active {
          background:rgb(16, 22, 84);
          width: 28px;
        }
        
        .swiper-button-next, .swiper-button-prev {
          color: rgb(118, 113, 142);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 30px;
          font-weight: 600;
        }
            `}</style>
        </div>
    );
}