import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

export const AboutBoxContainer = styled.div`
      padding: 60px;

      @media screen and (max-width: 568px) {
            padding: 30px 20px;
      }
`;
export const AboutBoxImage = styled.div``;
export const AboutBoxContent = styled.div``;
export const AboutBoxDesc = styled.p`
      color: #677289;
      h1 {
            font-size: inherit;
      }
`;
export const AboutBoxWrapper = styled(Row)``;

export const AboutBoxItem = styled.div`
      padding: 21px 28px;
      border-style: solid;
      border-width: 1px;
      border-color: #ddd;
      border-radius: 10px;

      @media screen and (max-width: 568px) {
            margin-bottom: 10px;
      }
`;
export const AboutBoxIcon = styled.div`
      img {
            width: 45px;
            height: 45px;
      }
`;
export const AboutBoxItemContent = styled.div`
      h3 {
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
      }
      p {
            font-size: 14px;
            line-height: 24px;
            color: ${(props) => props.theme.paragraphColor};
      }
`;
