import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
type Props = {}

function Swipered({}: Props) {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className='swipe1'><p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span></p></SwiperSlide>
        <SwiperSlide className='swipe1'><p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span></p></SwiperSlide>
        <SwiperSlide className='swipe1'><p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span></p></SwiperSlide>
        <SwiperSlide className='swipe1'><p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span></p></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Swipered