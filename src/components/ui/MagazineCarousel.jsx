import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/**
 * Reusable Magazine Carousel Component
 * Used for displaying magazine publications in grid carousel format
 */
const MagazineCarousel = ({ magazineImages }) => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={4}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      className="magazineSwiper"
    >
      {magazineImages.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-[#4BCFEC]/30 transition-colors duration-300">
            <img src={img} alt={`Magazine ${index + 1}`} className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MagazineCarousel;
