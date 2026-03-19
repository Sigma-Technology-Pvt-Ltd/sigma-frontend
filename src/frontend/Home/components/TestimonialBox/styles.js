import OwlCarousel from "react-owl-carousel";
import styled, { keyframes } from "styled-components";

export const SlideAnimation = keyframes`

      from {
         background-position: 0 0;
      }
      to {
         background-position: 1920px 0;
      }

`;
export const Slide = styled.div`
      background-image: url(/images/img/testimonial/pattern.png);
      background-repeat: repeat-x;
      background-size: cover;
      position: absolute;
      bottom: 0;
      perspective: 100px;
      height: 300px;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 15px;
      perspective: 100px;
      animation: ${SlideAnimation} 60s linear infinite;
`;
export const TestimonialCard = styled.div`
      padding: 3rem 0 0;
      margin-top: 10px;
      border-radius: 10px;
      margin-bottom: 50px;
`;
export const TestimonialInner = styled.div`
      position: relative;
      display: block;
      border: 1px solid #ede6e6;
      background: #fff;
      border-radius: 10px;
      width: 100%;
      padding: 0px 55px 10px 55px;
      &:before {
            position: absolute;
            content: "";
            width: 100%;
            height: 0px;
            left: 0px;
            bottom: 0px;
            clip-path: polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
            transition: all 500ms ease;
            background: #7377ab;
      }
      &:hover {
            .author-thumb {
                  background: #7377ab;
            }
            &:before {
                  height: 20px;
            }
      }
`;
export const TestimonialSection = styled.section`
      position: relative;
      padding-top: 60px;
      display: block;

      p {
            text-align: justify;
            font-size: 14px;
            font-style: italic;
            line-height: 28px;
            position: relative;
            font-family: sans-serif;
            color: #555;
            font-weight: 400;
            margin: 0px;

            margin-bottom: 21px;
            text-align: justify;
      }
      h4 {
            font-size: 20px;
            line-height: 28px;
            font-weight: 700;
            margin-bottom: 0px;
      }
      span {
            position: relative;
            display: block;
            font-size: 16px;
            line-height: 22px;
            font-weight: 400;
            color: #7377ab;
            margin-bottom: 20px;
      }

      figure {
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 85px;
            margin-inline-end: 40px;
      }
      .author-thumb {
            position: relative;
            display: inline-block;
            width: 108px;
            height: 108px;
            background: transparent;
            border-radius: 50%;
            padding: 8px;
            overflow: hidden;
            margin-top: -55px;
            margin-bottom: 10px;
            transition: all 500ms ease;
      }
      .inner-box .author-thumb img {
            border-radius: 50%;
            width: 100%;
      }

      span {
            color: #7377ab;
            font-size: 12px;
      }
      .inner-box,
      .inner-box:hover::before {
      }
`;

export const TestimonialSlider = styled(OwlCarousel)``;
