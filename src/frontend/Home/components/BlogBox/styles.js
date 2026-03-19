import { Link } from "react-router-dom";
import styled from "styled-components";

export const FeaturedImage = styled.div`
      border-radius: 10px;
`;
export const BlogBoxInnerContainer = styled.div`
      &:hover {
            img {
                  transform: scale(1.1);
                  overflow: hidden;
                  transition: 0.6s ease all;
            }
      }
`;
export const BlogBoxInnerBox = styled.div`
      position: relative;
      background-color: #fff;
      transition: transform 0.3s linear;
      border-radius: 10px;
      margin-bottom: 20px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const BlogBoxImage = styled(Link)`
      display: inline-block;
      overflow: hidden;
      border-radius: 10px 10px 0px 0px;
      width: 410px;
      height: 210px;

      img {
            height: auto;
            width: 100%;
            height: 100%;
            overflow: hidden;
      }

      @media screen and (max-width: 568px) {
            width: 100%;
      }
`;
export const BlogBoxContent = styled.div`
      padding: 20px 20px 20px;
      border-radius: 0px 0px 10px 10px;
`;
export const BlogBoxHeader = styled.div`
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
`;
export const BlogBoxCategory = styled.div`
      margin-bottom: 1rem;
      margin-left: 25px;
      display: inline-flex;
      flex-wrap: wrap;
      overflow: hidden;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      top: 0;
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      span {
            width: 120px;
            text-align: center;
            padding: 6px;
            background: #5e6fb5;
            color: #fff;
            margin: 5px;
            border-radius: 5px;
      }
`;
export const BlogBoxEntryMeta = styled.div`
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      align-items: left;
      text-align: left;
      margin-bottom: 5px;
`;
export const BlogBoxMetaInner = styled.div`
      .material-symbols-outlined {
            font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 24;
      }
      span {
            i {
                  margin-right: 5px;
                  color: #999;
            }
            a {
                  text-decoration: none;
                  color: #999;
                  position: relative;
                  order: 1;
                  ${"" /* margin-bottom: 0.25rem; */}
            }
      }
      .byline {
            color: #999;
            &:before {
                  color: #999;
                  content: "";
            }
      }
`;
export const BlogBoxEntryTitle = styled.h3`
      a {
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-decoration: none;
            display: -webkit-box;
            overflow: hidden;
            color: black;

            font-size: 20px;
      }
      &:hover {
            a {
                  color: #7377ab;
                  transition: 0.5s ease all;
            }
      }
`;
export const BlogBoxEntryContent = styled.div`
      a {
            line-height: 24px;
            color: #7377ab;
            font-weight: bold;
            margin-top: 10px;
            span {
                  font-family: ${(props) => props.theme.primaryFont};
                  font-size: 14px;
            }
            i {
                  font-size: 12px;
            }
      }
      span:hover {
            color: #5e6fb5;
      }
`;
export const BlogBoxContainer = styled.div`
      padding: 60px 0px;

      @media screen and (max-width: 568px) {
            .g-5 {
                  --bs-gutter-y: 0;
                  --bs-gutter-x: 0;
            }
      }
`;
