import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/**
 * Reusable Certificate Carousel Component
 * Used for displaying multiple certificates with navigation
 */
const CertificateCarousel = ({ certificates, title, onSlideChange }) => {
  return (
    <Swiper spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }} navigation={true} modules={[Pagination, Navigation]} className="certificateSwiper w-full" onSlideChange={onSlideChange}>
      {certificates.map((cert, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full flex items-center justify-center p-4">
            <img src={cert} alt={`${title} - Certificate ${index + 1}`} className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-2xl border-2 border-[#4BCFEC]/30" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CertificateCarousel;
