import styled from "styled-components";

export const ProductItemImage = styled.div`
      img {
            height: 170px;
            object-fit: contain;
      }

      @media screen and (max-width: 568px) {
            img {
                  height: 160px;
            }
      }
`;
export const ProductItemContent = styled.div`
      h3 {
            line-height: 20px;

            a {
                  color: #212121 !important;
                  font-size: 16px;
                  font-weight: 600;
            }
      }
      p {
            margin-bottom: 0;
            color: ${(props) => props.theme.primary};
      }
      del {
            color: #666;
            font-size: 14px;
      }

      @media screen and (max-width: 568px) {
            h3 {
                  a {
                        font-size: 16px;
                        font-weight: 600;
                  }
            }
      }
`;

export const ProductItemAction = styled.div`
      position: absolute;
      top: 10px;
`;
export const ProductActionItem = styled.div`
      .material-symbols-outlined {
            font-variation-settings: "FILL" 0, "wght" 100, "GRAD" 0, "opsz" 24;
      }
      background: ${(props) =>
            props.list ? props.theme.productBackground : props.theme.primary};
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: ${(props) =>
            props.list ? props.theme.primary : props.theme.white};
      transform: ${(props) => (props.list ? "" : "translateX(-20px)")};
      opacity: ${(props) => (props.list ? "1" : "0")};
      visibility: ${(props) => (props.list ? "visibile" : "hidden")};
      margin-bottom: 10px;
      font-size: 0;
      line-height: 0;
      letter-spacing: 0;
      width: 40px;
      height: 40px;
      padding: 10px 0;
      border-radius: 90px;
      text-align: center;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      &:first-child {
            transition: ${(props) =>
                  props.list
                        ? ""
                        : "transform 0.2s ease, opacity 0.2s ease, visibility 0.2s ease;"};
      }

      &:nth-child(2) {
            transition: ${(props) =>
                  props.list
                        ? ""
                        : "transform 0.2s ease 0.1s, opacity 0.2s ease 0.1s, visibility 0.2s ease 0.1s;"};

            background: #f5f5f5;
            color: ${(props) => props.theme.primary};
      }
      &:last-child {
            transition: ${(props) =>
                  props.list
                        ? ""
                        : "transform 0.2s ease, opacity 0.2s ease, visibility 0.2s ease;"};
      }
`;
export const ProductItemContainer = styled.div`
      display: flex;
      position: relative;
      border: 1px solid #e6e6e6;
      padding: 19px 19px 14px;
      border-radius: 5px;
      text-align: center;
      height: 100%;

      &:hover {
            ${ProductActionItem} {
                  transform: translateX(0px);
                  opacity: 1 !important;
                  visibility: visible !important;

                  &:first-child {
                        transition: transform 0.2s ease, opacity 0.2s ease,
                              visibility 0.2s ease;
                  }

                  &:nth-child(2) {
                        transform: ${(props) =>
                              props.list ? "" : "translateX(25px)"};
                        transition: transform 0.2s ease 0.1s,
                              opacity 0.2s ease 0.1s, visibility 0.2s ease 0.1s;
                  }
                  &:last-child {
                        transition: transform 0.2s ease 0.2s,
                              opacity 0.2s ease 0.2s, visibility 0.2s ease 0.2s;
                  }
            }
      }
`;
export const ProductStatus = styled.div`
      position: absolute;
      right: 10px;
`;
export const ProductStatusItem = styled.div`
      font-size: 13px;
      padding: 5px 13px;
      border-radius: 90px;
      background: ${(props) => props.theme.red};
      color: ${(props) => props.theme.white};
`;

export const TextCut = styled.div`
      font-size: 3rem;
      font-weight: bold;
      position: relative;
      display: inline-block;
      color: #000;
      &:before,
      &:after {
            content: "Cut Text Effect";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, #ff0000, #ff0000);
            clip-path: polygon(0 45%, 100% 45%, 100% 55%, 0 55%);
      }
      &:before {
            color: transparent;
            z-index: 1;
      }
      &:after {
            color: white;
            z-index: 2;
      }
`;
