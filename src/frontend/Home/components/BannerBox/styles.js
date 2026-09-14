import { Container } from "react-bootstrap";
import styled, { css } from "styled-components";

export const BannerImage = styled.div`
  height: ${(props) => props.height};

  @media screen and (max-width: 568px) {
    height: auto;
  }
`;
export const BannerWrapper = styled(Container)`
  @media screen and (max-width: 568px) {
    .g-4 {
      --bs-gutter-y: 0;
      --bs-gutter-x: 0;
    }
  }
`;
export const BannerTransition = css`
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
`;
export const BannerContainer = styled.div`
  position: relative;

  @media screen and (max-width: 568px) {
    margin-bottom: 20px;
  }
`;
export const BannerSection = styled.section`
  ${BannerWrapper} {
    padding: 20px 30px;
  }
  ${BannerImage} {
    overflow: hidden;
    border-radius: 10px;

    &:hover {
      img {
        transform: scale(1.1);
        ${BannerTransition}
      }
    }
    img {
      width: 100%;
      transform: scale(1);
      ${BannerTransition}
      &.first {
        height: calc(100vh - 120px);
        width: 100%;
        object-fit: cover;
      }
      border-radius: 10px;
    }
  }
`;
export const ShopButtonContainer = styled.div`
  margin-top: ${(props) => props.$marginTop || props.marginTop || "20px"};
  
  a.shop-now-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(15, 23, 42, 0.78);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #ffffff !important;
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize !important;
    padding: 9px 20px;
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

export const BannerContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "leftValue" && prop !== "topValue",
})`
  position: absolute;
  z-index: 10;
  bottom: 24px;
  left: 24px;
  text-align: left;

  @media screen and (max-width: 568px) {
    bottom: 16px;
    left: 16px;
  }

  h3 {
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 8px;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  }
`;
