import { Accordion } from "react-bootstrap";
import { styled } from "styled-components";
import { Swiper } from "swiper/react";

export const ProductSliderContainer = styled.div`
      background-color: white;
      padding: 10px;
`;

export const ProductSlider = styled(Swiper)`
      height: 320px;

      .magnifier {
            height: 100% !important;
      }

      img {
            width: 100%;
            height: 100%;
            object-fit: contain;
      }
`;

export const ProductSliderThumb = styled(Swiper)`
      padding: 10px;
      .swiper-slide {
            padding: 10px;
            box-shadow: 0 0 0 1px #ebebeb inset;
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
            height: 114px;
            width: 114px;

            &.swiper-slide-thumb-active {
                  transition: all 0.3s ease-in-out;
                  box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
            }

            img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
            }
      }
`;

export const ProductEnquiryButton = styled.button`
      background: ${(props) => props.theme.primary};
      color: #fff;
      padding: 10px 20px;
      margin-right: 20px;
      position: relative;
      z-index: 1;
      min-width: 160px;
      border-radius: 20px;
      text-transform: uppercase;
      border: 0;
      border: 1px solid ${(props) => props.theme.primary};

      &:hover {
            color: ${(props) => props.theme.primary};
            background-color: #fff;
            position: relative;
            transition: all 0.5s ease;
            border-radius: 20px;
            border: 1px solid ${(props) => props.theme.primary};
      }

      .spinner-border {
            height: 1.2rem;
            width: 1.2rem;
            border-width: 1px;
      }
`;

export const ProductDetailContainer = styled.div`
      background-color: #f5f5f588;

      .product_content-price {
            del {
                  color: #666;
                  font-size: 14px;
            }
            span {
                  color: ${(props) => props.theme.primary};
            }
      }

      .site-container {
            margin-top: 20px;
            background-color: #f5f5f588;
            overflow: hidden;
      }

      .category__title {
            font-weight: 600 !important;
      }
      .site-container .breadcrumb-wrap {
            width: 100vw;
            margin: 0 calc(50% - 50vw);
            background-color: #f5f5f588;
            padding: 5px 0;
            padding-left: 50px;
      }
      .site-container .breadcrumb-wrap .breadcrumb a {
            font-size: 16px;
            color: #212529;
            margin-left: 6px;
            margin-right: 6px;
            text-decoration: none;
      }
      .site-container .breadcrumb-wrap .breadcrumb a:hover {
            text-decoration: underline;
            color: ${(props) => props.theme.primary};
      }
      .site-container .breadcrumb-wrap .breadcrumb .no-hover:hover {
            text-decoration: none;
            color: #212529;
            cursor: auto;
      }
      .product_content h1 {
            font-size: 28px;
            font-weight: 100px;
            line-height: 32px;
            color: #212121;
      }
      .product_content span {
            font-size: 19px;
      }
      hr {
            border-top: 1px solid #a2aba9;
      }
      .col-lg-5 img {
            width: 100%;
      }
      .col-lg-7 .my-4 {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
      }
      .col-lg-7 .product_short-desc h3 {
            font-weight: 400;
            font-size: 25px;
      }
      .product_content .product_content-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
      }
      .product_content .product_content-title .bx {
            color: ${(props) => props.theme.primary};
            font-weight: 400;
      }

      .product_quantity .input-spinner {
            border: 1px solid #a2aba9;
            width: 120px;
            margin-top: 8px;
      }
      .icon {
            display: flex;
            gap: 15px;
      }
      .product_additional {
            float: left;
            width: 100%;
            margin-bottom: 30px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
            border-radius: 10px;
            position: relative;
            display: block;
            padding-bottom: 5px;
            background-color: #fff;
            padding: 40px;
      }
      .product_additional a {
            text-decoration: none;
            color: #212529;
      }
      .product_additional a:hover {
            text-decoration: underline;
            color: ${(props) => props.theme.primary};
      }
      .product_additional ul {
            list-style-type: disc;
      }
      .product_additional ul li {
            font-size: 16px;
      }
      .product_additional ul li a {
            text-decoration: none;
      }
      .product_additional .nav-link.active {
            position: relative;
            transition: all 0.3s linear;
            border-top: 2px solid ${(props) => props.theme.primary};
      }
      .nav-link,
      .nav-link:hover {
            color: #333;
      }
      .nav-tabs .nav-link.active::after {
            position: absolute;
            content: " ";
            width: 100%;
            height: 2px;
            top: 0;
            left: 0;
            background: var(--primary-color);
            transition: all 0.3s linear;
      }
      .product_additional ul li button {
            border: none;
            background-color: none;
      }
      .product_additional p {
            margin-top: 20px;
            font-size: 14px;
            color: #7a7a7a;
            margin: 0 0 20px;
      }
      .product_suggest h2 {
            margin-top: 30px;
            font-size: 22px;
            font-weight: 500;
      }
      .product__suggest-content {
            background-color: #fff;
            border-color: transparent;
            border-radius: 0.25rem;
            box-shadow: 0 0 2px rgba(145, 158, 171, 0.2),
                  0 10px 20px -3px rgba(145, 158, 171, 0.05);
            padding: 10px;
            display: flex;
      }
      #recent-posts {
            margin-bottom: 10px;
            padding: 6px;
            position: relative;
            display: block;
            padding-top: 15px;
      }
      .col-lg-3 h2 {
            color: #212529;
            line-height: 1.2;
            margin: 0 0 0.5em;
            padding: 1.5rem 0 0;
            font-size: 22px;
      }
      #recent-posts ul {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
            background-color: #fff;
            padding: 6px;
      }
      #recent-posts li {
            margin-left: 10px;
            position: relative;
            padding: 0.72rem 0;
            color: #999;
            display: flex;
      }
      #recent-posts li a {
            text-decoration: none;
            font-size: 15px;
            color: #212529;
            font-weight: 550;
      }
      #recent-posts li a:hover {
            color: ${(props) => props.theme.primary};
            transition: 0.5s ease all;
      }
      #recent-posts li img {
            border-radius: 10px;
            margin-right: 4px;
      }
      #recent-posts .post-date {
            display: inline;
      }
      #recent-posts li:last-child {
            border-bottom: none;
      }
      #recent-posts .post-date {
            font-size: 13px;
            color: ${(props) => props.theme.primary};
      }
      .product_recommend .product_recommend-title {
            padding-left: 6px;
            border-left: 5px solid ${(props) => props.theme.primary};
            align-items: center;
            font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
                  "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      }
      .product_recommend .product_recommend-title h2 {
            font-weight: 400;
            margin-top: 20px;
            margin-bottom: 0px;
            font-size: 26px !important;
      }
      .product_title a {
            text-decoration: none;
            font-size: 14px;
            color: #525252;
      }
      .product_title a p {
            color: black;
      }
      .product_image {
            width: 100%;
            height: 330px;
      }
      .product_image img {
            align-items: center;
            display: flex;
            justify-content: center;
            padding: 10px;
            width: 100%;
            height: 100%;
      }
      .one,
      .two,
      .three {
            background: #fafcff;
            border-radius: 5px;
            border: 1px solid #f2f2f2;
            padding: 5px 10px;
      }
      .products {
            position: relative;
      }
      .products .row {
            margin-top: 0px;
      }

      .product__wrapper {
            position: relative;
            padding: 20px;
            box-shadow: 0 0 0 1px #ebebeb inset;
            background: #fff;
            height: 100%;
      }
      .product_image {
            position: relative;
            width: 100%;
            height: 180px;
            overflow: hidden;
      }
      .product_image img {
            max-width: 100%;
            height: 180px;
            display: block;
            margin: 0 auto 10px;
            transition: all 0.3s ease-in-out;
            object-fit: contain;
      }

      .product-brand {
            margin-top: 30px;
            display: flex;
      }

      .product-brand h3 {
            font-size: 15px;
            align-items: center;
            display: flex;
            justify-content: center;
            margin-left: 20px;
      }

      /* modal */
      .modal-dialog {
            border-radius: 10px;
      }
      .modal-content {
            border: none;
      }
      .modal .modal-dialog .modal-header {
            display: flex;
            background-color: ${(props) => props.theme.primary};
            color: #fff;
      }
      .modal__header .modal-title {
            margin-left: 10px;
      }
      .modal .modal-dialog .modal-header button {
            color: #fff;
      }
      .modal .modal-dialog .modal-header button:focus {
            border: none;
            color: #fff;
      }
      .modal-body .form-control {
            border-radius: 10px;
      }
      .modal-body .form-control:focus {
            box-shadow: none;
            border: 1px solid ${(props) => props.theme.primary};
      }
      .modal-body .form-control:input {
            border: 1px solid ${(props) => props.theme.primary};
      }

      .modal-body form span {
            color: ${(props) => props.theme.primary};
      }

      .modal-footer button {
            background: ${(props) => props.theme.primary};
            color: #fff;
            border: none;
            border-radius: 10px 0 10px 0;
            padding: 10px 30px;
      }
      .modal-footer button:hover {
            background-color: #455bb5;
      }
      .modal-footer button i {
            margin-left: 8px;
            color: #fff;
            padding: 0 8px 8px;
      }
      .modal-body .social_icon {
            display: flex;
            justify-content: space-around;
      }
      .modal-body .social_icon img {
            width: 30px;

            cursor: pointer;
      }
      .icon img {
            object-fit: contain;
            height: 100%;
            aspect-ratio: 3/2;
      }
      .related__wrapper {
            h5 {
                  font-size: 16px;
                  margin-bottom: 9px;
            }
            P {
                  margin-bottom: 0px;
                  color: #555;
            }
      }
      .product_recommend--title {
            border-left: 4px solid ${(props) => props.theme.primary};
            h2 {
                  font-size: 20px !important;
                  padding: 10px !important;
                  margin-bottom: 20px;
            }
      }
      .related__wrapper--item {
            padding: 10px;
            background: #fff;
            &:last-child {
                  margin-bottom: 0px !important;
            }
            img {
                  height: 82px;
                  width: 98px;
            }
      }

      table {
            width: 100%;
      }

      .magnifier {
            img {
                  width: 100%;
                  object-fit: contain;
            }
      }
`;

export const ProductBrandImage = styled.div`
      background: #fafcff;
      border-radius: 5px;
      border: 1px solid #f2f2f2;
      padding: 5px 10px;
      width: 80px;
      height: 60px;

      img {
            object-fit: contain;
            height: 100%;
            width: 100%;
      }
`;

export const ProductDetails = styled.div`
      a {
            color: #333;

            h5 {
                  text-align: center;
                  font-size: 16px;
                  font-family: "Trebuchet MS", "Lucida Sans Unicode",
                        "Lucida Grande", "Lucida Sans", Arial, sans-serif;
                  font-weight: 600;
                  margin-top: 10px;

                  &:hover {
                        text-decoration: none;
                        color: ${(props) => props.theme.primary};
                  }
            }
      }
      p {
            text-align: center;
            font-weight: 500;
            color: ${(props) => props.theme.primary};
            margin-bottom: 0;
      }
      del {
            color: #666;
            font-size: 14px;
      }
`;

export const ProductDescription = styled.div`
      min-height: 160px;

      span {
            color: #1b1b1b;
            font-size: 15px;
            font-weight: 300;
      }
`;

export const DetailAccordion = styled(Accordion)`
      .accordion-item {
            background-color: rgba(245, 245, 245, 0.533);
            border: 0;
            border-left: 4px solid #028ffd;
            border-radius: 0;
            margin-bottom: 20px;
      }

      .accordion-item:first-of-type .accordion-button {
            border-radius: 0;
      }

      .accordion-item:last-of-type .accordion-button.collapsed {
            border-radius: 0;
      }

      .accordion-button:focus {
            box-shadow: none;
      }

      .accordion-header {
            padding: 0 !important;
            margin: 0 !important;
      }

      a {
            &:hover {
                  cursor: pointer;
            }
      }
`;
