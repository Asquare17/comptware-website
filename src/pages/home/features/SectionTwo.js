import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import Retail from "assets/icons/Works/retail.svg";
import Airline from "assets/icons/Works/airline.svg";
import Crypto from "assets/icons/Works/crypto.svg";
import DigitalCreators from "assets/icons/Works/digital-creators.svg";
import Ecommerce from "assets/icons/Works/ecommerce.svg";
import FastFood from "assets/icons/Works/fast-food.svg";
import Fintech from "assets/icons/Works/fintech.svg";

import ArrowRight from "assets/icons/Arrow/arrow-right-black.svg";
import Card from "components/general/cards";

const businessTypes = [
  {
    title: "Retail Stores",
    body: "Provide fast and reliable payment processes for customer satisfaction and effectively manage business finances.",
    icon: <Retail />,
    href: "/",
  },
  {
    title: "Fast Food and Restaurants",
    body: "Offer seamless and instant payment options to increase customer satisfaction and repeat business.",
    icon: <FastFood />,
    href: "/",
  },
  {
    title: "Fintechs / Neobanks",
    body: "Offer customers innovative, streamlined, and secure payment solutions and products.",
    icon: <Fintech />,
    href: "/",
  },
 
  {
    title: "Travel agencies and airlines",
    body: "Provide real-time payment updates and offer loyalty programs to create memorable customer experiences.",
    icon: <Airline />,
    href: "/",
  },
  {
    title: "Crypto and digital asset platforms",
    body: "Provide faster transactions with globally accessible and decentralised security systems.",
    icon: <Crypto />,
    href: "/",
  },
  {
    title: "E-Commerce",
    body: "Collect instant local customer payments and improve the checkout experience.",
    icon: <Ecommerce />,
    href: "/",
  },
  {
    title: "Digital Creators",
    body: "Offer various payment options, set clear payment terms, and ensure secure and reliable payment processing.",
    icon: <DigitalCreators />,
    href: "/",
  },
];

const SectionTwo = () => {
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="flex flex-col justify-start items-start w-full h-fit gap-y-10 md:gap-y-14 py-14 md:py-24 bg-grey-dull mt-8">
      <div className="flex flex-col md:flex-row justify-start items-start gap-8 md:gap-10 md:items-center w-full px-5 md:px-[5%] lg:px-[8%]">
        <p className="text-base sm:text-xl md:text-[36px] lg:text-[40px] text-black-light basier-semibold md:pl-10 uppercase md:normal-case whitespace-nowrap ">
          Who we work with
        </p>


        <div className="flex justify-start items-center gap-x-4 w-full ml-[-10px] md:ml-0">
          <button
            onClick={handlePrev}
            className={`scale-[0.75]`}
            style={{ opacity: activeSlideIndex <= 1 ? 0.15 : 1 }}
          >
            <ArrowRight className="rotate-[180deg]" />
          </button>

          <button className="works-slide-right scale-[0.75]" onClick={handleNext}>
            <ArrowRight />
          </button>

          <div className="clients-swiper-pagination flex md:hidden justify-end items-center ml-auto pl-3 gap-[-3px]" />
        </div>
      </div>

      <div className="flex w-full py-3 works-swiper px-5 md:px-0">
        <Swiper
          ref={sliderRef}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.7,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2.7,
            },

            // when window width is >= 768px
            1024: {
              slidesPerView: 3.7,
            },
          }}
          onSlideChange={(e) => setActiveSlideIndex(e.activeIndex)}
          className="!pb-4"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={4000}
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{ clickable: true, el: ".clients-swiper-pagination" }}
        >
          {businessTypes.map((item) => (
            <SwiperSlide key={item.title}>
              <Card details={item} type="works" />
            </SwiperSlide>
          ))}
         
        </Swiper>
      </div>
    </div>
  );
};

export default SectionTwo;
