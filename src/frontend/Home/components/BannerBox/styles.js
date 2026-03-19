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
      margin-top: ${(props) => props.marginTop || "20px"};
      a {
            position: relative;
            font-size: 16px;
            text-transform: capitalize !important;

            &:after {
                  position: absolute;
                  top: ${(props) => props.top || "28px"};
                  left: 0px;
                  background-color: ${(props) => props.theme.white};
                  width: 100%;
                  height: 2px;
                  content: "";
            }
      }
`;

export const BannerContent = styled.div`
      position: absolute;
      z-index: 10;
      top: ${(props) => (props.topValue ? props.topValue : "50%")};
      left: ${(props) => (props.leftValue ? props.leftValue : "50%")};
      transform: ${(props) =>
            props.leftValue ? "translateY(-50%)" : "translate(-50%, -50%)"};
      text-align: ${(props) => (props.leftValue ? "" : "center")};

      h3 {
            color: ${(props) => props.theme.white};
            text-transform: uppercase;
            font-size: ${(props) => (props.leftValue ? "25px" : "")};
      }
      a {
            color: ${(props) => props.theme.white};
            text-transform: uppercase;
      }
`;
