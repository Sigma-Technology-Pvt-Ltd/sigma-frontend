import styled from "styled-components";

export const VideoContainer = styled.div`
      overflow: hidden;
      position: relative;
      padding: 3rem 0px 10rem;
      margin: 0px;
      top: 0px;
      left: 0px;
      pointer-events: none;
      height: 720px;

      &:after,
      &:before {
            content: "";
            position: absolute;
            width: 100%;
            background: ${(props) => props.theme.white};

            z-index: 10;
      }
      &:after {
            bottom: 0px;
      }
      &:before {
            top: 0px;
      }
      video {
            width: 100%;
            height: 100%;
      }
      iframe {
            position: absolute;
            width: 100%;
            height: 300%;
            top: -100%;
      }

      @media screen and (max-width: 1300px) {
            height: 630px;
      }

      @media screen and (max-width: 1200px) {
            height: 600px;
      }
      @media screen and (max-width: 1100px) {
            height: 580px;
      }

      @media screen and (max-width: 1000px) {
            height: 520px;
      }

      @media screen and (max-width: 900px) {
            height: 360px;
      }

      @media screen and (max-width: 800px) {
            height: 360px;
      }

      @media screen and (max-width: 700px) {
            height: 340px;
      }

      @media screen and (max-width: 600px) {
            height: 260px;
      }

      @media screen and (max-width: 520px) {
            height: 230px;
      }

      @media screen and (max-width: 400px) {
            height: 214px;
      }
`;
