// @ts-nocheck
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import {  Navigation } from "swiper/modules";

import StoreItems from '../../data/StoreItems.json';
import CartItem from "../../components/CartItem/CartItem";
import { useEffect, useState } from "react";

export default function Slider() {

    const [offerFilteredData, setOfferFilteredData] = useState([]);
    useEffect(() => {
        const result = StoreItems.filter(item => item.hotOffer === true);
        setOfferFilteredData(result);
    }, []);

  return (
    <Swiper
    //   effect={"coverflow"}
      spaceBetween={20}
      grabCursor={false}
      centeredSlides={true}
      slidesPerView={'auto'}
    //   coverflowEffect={{
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    //   }}
      navigation={true}
      modules={[ Navigation]}
      className="mySwiper"
    >

      {offerFilteredData.map((item) => (
        <SwiperSlide key={item.id}>
            <CartItem {...item}/>
         </SwiperSlide>
      ))
      }
    </Swiper>
  );
}
