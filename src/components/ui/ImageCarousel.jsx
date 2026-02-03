import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

/**
 * Reusable Image Carousel Component with Coverflow Effect
 * Used for displaying work experience images in carousel format
 */
const ImageCarousel = ({ images, title }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[EffectCoverflow, Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 7,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
      }}
      className="mySwiper"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} style={{ width: "auto" }}>
          <div className="relative overflow-hidden rounded-xl aspect-square w-48 sm:w-64">
            <img src={img} alt={`${title} - ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
