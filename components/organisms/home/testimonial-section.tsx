"use client";

import Testimonial from "@/components/molecules/testimonial";
import { testimonials } from "@/lib/data";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSection() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const updateNavigationState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    if (swiper.slides && swiper.wrapperEl) {
      const totalSlidesWidth = Array.from(swiper.slides).reduce(
        (total, slide) => {
          return total + slide.offsetWidth;
        },
        0
      );
      const wrapperWidth = swiper.wrapperEl.offsetWidth;
      const spaceBetween = 20 * (swiper.slides.length - 1);

      if (totalSlidesWidth + spaceBetween <= wrapperWidth) {
        setIsEnd(true);
      }
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && !isBeginning) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && !isEnd) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="py-16 bg-inherit">
      <div className="px-4 sm:px-6 lg:px-8 max-w-none">
        <div className="text-left lg:text-center space-y-3 mb-6 lg:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#323232] mb-4">
            What our customers say?
          </h2>
          <p className="text-sm lg:text-lg font-medium text-[#6B6B6B]">
            Hear from our satisfied and happy clients
          </p>
        </div>

        <div className="relative w-full max-w-none">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            speed={300}
            slidesPerView="auto"
            watchSlidesProgress={true}
            watchOverflow={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavigationState(swiper);
            }}
            onSlideChange={updateNavigationState}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(true)}
            onFromEdge={updateNavigationState}
            onResize={updateNavigationState}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="testimonials-swiper relative"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="w-full max-w-screen md:max-w-[400px] lg:max-w-[490px] h-[500px] relative"
              >
                <Testimonial testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrevSlide}
              disabled={isBeginning}
              className={`swiper-button-prev-custom rounded-full border border-gray-300 flex items-center justify-center transition-all ${
                isBeginning
                  ? "bg-[#DFDFDF] w-[50px] h-[50px] cursor-not-allowed"
                  : "bg-[#323232] hover:bg-[#404040] w-[56px] h-[56px] cursor-pointer"
              }`}
            >
              <FaChevronLeft
                className={`text-sm ${
                  isBeginning ? "text-[#838383]" : "text-[#E2E2E2]"
                }`}
              />
            </button>
            <button
              onClick={handleNextSlide}
              disabled={isEnd}
              className={`swiper-button-next-custom rounded-full border border-gray-300 flex items-center justify-center transition-all ${
                isEnd
                  ? "bg-[#DFDFDF] w-[50px] h-[50px] cursor-not-allowed"
                  : "bg-[#323232] hover:bg-[#404040] w-[56px] h-[56px] cursor-pointer"
              }`}
            >
              <FaChevronRight
                className={`text-sm ${
                  isEnd ? "text-[#838383]" : "text-[#E2E2E2]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
