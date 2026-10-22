import { Col, Container } from "react-bootstrap";
import styled, { css } from "styled-components";

export const BannerWrapper = styled(Container)`
  @media screen and (max-width: 568px) {
    padding-left: 15px;
    padding-right: 15px;
    .g-4 {
      --bs-gutter-y: 16px;
      --bs-gutter-x: 16px;
    }
  }
`;

export const BannerTransition = css`
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
`;

export const BannerContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  width: 100%;

  @media screen and (max-width: 568px) {
    margin-bottom: 16px;
  }
`;

export const BannerImage = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
    transform: scale(1);
    ${BannerTransition}
  }

  &:hover {
    img {
      transform: scale(1.03);
      ${BannerTransition}
    }
  }
`;

export const BannerContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "leftValue" && prop !== "topValue",
})`
  position: absolute;
  z-index: 10;
  bottom: 20px;
  left: 20px;
  text-align: left;
  pointer-events: auto;

  @media screen and (max-width: 568px) {
    bottom: 14px;
    left: 14px;
  }

  h3 {
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 8px;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  }
`;

export const ShopButtonContainer = styled.div`
  margin-top: ${(props) => props.$marginTop || props.marginTop || "0px"};

  ${BannerContent} h3 + & {
    margin-top: 12px;
  }
  
  a.shop-now-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(15, 23, 42, 0.78);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #ffffff !important;
    font-size: 13px;
    font-weight: 600;
    text-transform: capitalize !important;
    padding: 8px 18px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.28);
    text-decoration: none;
    transition: all 0.25s ease-in-out;

    &:after {
      display: none !important;
    }

    &:hover {
      background: #0056b3;
      border-color: #0056b3;
      color: #ffffff !important;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 86, 179, 0.45);

      svg {
        transform: translateX(4px);
      }
    }
  }
`;

export const BannerSection = styled.section`
  ${BannerWrapper} {
    padding: 20px 30px;
  }
`;

export const RightBannerCol = styled(Col)`
  .middle-row {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 991px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 568px) {
    margin-top: 0;
    .middle-row {
      margin-bottom: 0;
    }
  }
`;
