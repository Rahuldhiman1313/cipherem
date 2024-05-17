"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Binance from "@/images/Binance.png";
import Bybit from "@/images/Bybit.png";
import Bitget from "@/images/Bitget.png";
import Coinbase from "@/images/Coinbase.png";
import Coinmar from "@/images/Coin-Market-Cap.png";
import MetaMask from "@/images/MetaMask.png";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const ClientSlider = () => {
  return (
    <div
      className="dlx max-w-screen-xl mx-auto py-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={6}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 60,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1023: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <Image src={Binance} alt="Binance" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Bybit} alt="Bybit" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Bitget} alt="Bitget" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Coinbase} alt="Coinbase" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Coinmar} alt="Coinmar" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={MetaMask} alt="MetaMask" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Binance} alt="MetaMask" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
