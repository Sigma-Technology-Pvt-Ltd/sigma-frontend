import React from "react";
import { CategorySliderContent } from "./style";
import { TestimonialSlider } from "../../../TestimonialBox/styles";
import CategoryItem from "../CategoryItem";

const options = {
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000, //2000ms=2s
      autoplayHoverPause: true,
      nav: false,
      margin: 30,
      responsive: {
            0: {
                  items: 1,
                  dots: false,
            },
            600: {
                  items: 3,
            },
            1000: {
                  items: 3,
            },
      },
};

const CategorySlider = ({ categories }) => {
      return (
            <>
                  <CategorySliderContent>
                        <TestimonialSlider
                              items={3}
                              className=" owl-theme"
                              {...options}
                        >
                              {categories?.map((item, index) => (
                                    <CategoryItem
                                          category={item}
                                          desc={item.desc}
                                          icon={item.image}
                                          slug={item.slug}
                                          key={index}
                                    />
                              ))}
                        </TestimonialSlider>
                  </CategorySliderContent>
            </>
      );
};

export default CategorySlider;
