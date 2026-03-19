import styled from "styled-components";

export const PrivacyItemContainer = styled.div`
      background-color: ${(props) => props.theme.white};
      border: 1px solid #d0d2d3;

      &.sticky {
            position: -webkit-sticky; /* Safari */
            position: sticky;
            top: 5rem; /* Distance from the top of the viewport */
            z-index: 1000; /* Adjust z-index if necessary */
            background-color: #fff; /* Ensure it doesn't overlap content */
            padding: 10px;
      }

      @media screen and (max-width: 568px) {
            padding: 20px;
      }
`;
export const PrivacyItemTitle = styled.h2`
      font-size: 30px;
      font-weight: 500;
`;

export const PrivacyItemContent = styled.div`
      margin: 60px 55px;

      p {
            text-align: justify;
      }

      @media screen and (max-width: 568px) {
            margin: 0;
      }
`;

export const PrivacyItemTime = styled.div`
      font-size: 16px;
      color: ${(props) => props.theme.primary};
      font-weight: 600;
      margin-bottom: 20px;
`;
