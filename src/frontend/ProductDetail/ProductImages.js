import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
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
            {/* react-medium-image-zoom: click to zoom, keyboard accessible, React 18 native */}
            <Zoom>
              <img src={image} width="100%" alt="Product" />
            </Zoom>
          </SwiperSlide>
        )}
        {images?.map((item, index) => (
          <SwiperSlide key={index}>
            <Zoom>
              <img src={item?.image} width="100%" alt={`Product view ${index + 1}`} />
            </Zoom>
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
            <img src={image} width="100%" alt="Product thumbnail" />
          </SwiperSlide>
        )}
        {images?.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item?.image} alt={`Thumbnail ${index + 1}`} />
          </SwiperSlide>
        ))}
      </ProductSliderThumb>
    </ProductSliderContainer>
  );
}

export default ProductImages;
