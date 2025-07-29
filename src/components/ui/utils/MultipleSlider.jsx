import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function MultipleSlider({ products }) {
    return (
        <>
            <Swiper
                pagination={{ dynamicBullets: true }}
                navigation={true}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 25,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                style={{ paddingBottom: '20px', position: 'relative' }}
            >
                {products?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <a href={item?.url}>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='w-28 h-28 max-sm:w-20 max-sm:h-20'>
                                    <img
                                        src={item?.image}
                                        alt={item?.name}
                                        className=" object-contain z-[-9] hover:scale-110 mb-4 transition-transform duration-200 group-hover:scale-105"
                                    />
                                </div>
                                <div className="font-semibold py-3 text-lg max-sm:text-sm max-md:text-base text-center text-wrap leading-tight">
                                    {item?.name}
                                </div>
                            </div>
                        </a>
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
        </>
    );
}
