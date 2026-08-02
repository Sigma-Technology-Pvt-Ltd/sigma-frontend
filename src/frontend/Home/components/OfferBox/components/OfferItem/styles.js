import styled, { keyframes } from "styled-components";

export const ScaleAnimation = keyframes`
  0% {
         transform: scale(1);
      }

      50% {
         transform: scale(1.1);
      }

      100% {
         transform: scale(1);
      }
`;

export const OfferImage = styled.div``;
export const OfferContent = styled.div`
      position: absolute;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      z-index: 3;
      text-align: ${(props) => (props.$text === "center" || props.text === "center" ? "center" : "left")};
      align-items: center;
      h3 {
            font-family: "Brushline", Sans-serif;
            font-weight: 400;
            font-size: 65px;
            text-align: center;
            padding: 10px 0;
            color: #fff;
      }
      p {
            color: #fff;
            font-weight: 500;
            font-size: 20px;
            text-align: center;
      }
`;

export const OfferItemContainer = styled.div`
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      order: ${(props) => props.order};

      @media screen and (max-width: 568px) {
            width: 100%;
            margin-bottom: 20px;
      }
`;

export const CustomCard = styled.div`
      background-image: ${(props) =>
            props.$backgroundImage || props.backgroundImage ? `url(${props.$backgroundImage || props.backgroundImage})` : "none"};
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 100%;
      padding: 30px 20px;
      border-radius: 10px;
      transition: 0.5s ease all;

      &.left {
            height: 350px;
            width: 350px;
            ${OfferImage} {
                  img {
                        height: 220px;
                        width: 220px;
                        transition: 0.5s ease all;
                  }
            }
      }

      &.center {
            height: 500px;
            width: 500px;
            ${OfferImage} {
                  height: 260px;
                  width: 260px;
                  transition: 0.5s ease all;
            }
      }

      &:hover {
            cursor: pointer;
            transform: scale(1.1);
            ${OfferImage} {
                  img {
                        opacity: 0.8;
                        animation: ${ScaleAnimation} 2s
                              cubic-bezier(0.42, 0, 0.5, 1) infinite;
                  }
            }
      }

      @media screen and (max-width: 568px) {
            &.left {
                  width: 100%;
            }

            &.center {
                  width: 100%;
            }
      }
`;
