import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./CustomCarousel.module.css";
import Image from "next/image";

const CustomCarousel = ({ banners }) => {
  return (
    <section id="banner">
      <div className={styles.carouselContainer}>
        <Swiper
          spaceBetween={1}
          slidesPerView={1}
          //   direction="vertical"
          modules={[Pagination, Autoplay]}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          // onSlideChange={(swiper) =>
          //   console.log("slide change", swiper.activeIndex)
          // }
        >
          {banners.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slide}>
                <Image
                  src={image.bannerImage.node.sourceUrl}
                  width={1000}
                  height={1000}
                  alt={image.bannerImage.node.__typename}
                  priority
                />
                <div className="pl-20 absolute inset-0 flex flex-col justify-center items-start">
                  <p className="w-20 my-2 text-6xl text-white font-bold">
                    {image.bannersTitle}
                  </p>
                  <p className="my-2 text-md text-white">
                    {image.bannerDescription}
                  </p>
                  <button className="my-2 px-4 py-2 text-xs bg-white rounded-2xl font-semibold">
                    {image.bannerButton.title}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className={styles.customDots}></div> */}
      </div>
    </section>
  );
};

export default CustomCarousel;
