import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Magnifier from "react-magnifier";
import {
  ProductSlider,
  ProductSliderContainer,
  ProductSliderThumb,
} from "./styles";

function ProductImages({ images, image }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <ProductSliderContainer>
      <ProductSlider
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {image && (
          <SwiperSlide>
            <Magnifier src={image} width="100%" />
          </SwiperSlide>
        )}
        {images?.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item?.image} />
          </SwiperSlide>
        ))}
      </ProductSlider>
      <ProductSliderThumb
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {image && (
          <SwiperSlide>
            <img src={image} width="100%" />
          </SwiperSlide>
        )}
        {images?.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item?.image} />
          </SwiperSlide>
        ))}
      </ProductSliderThumb>
    </ProductSliderContainer>
  );
}

export default ProductImages;
