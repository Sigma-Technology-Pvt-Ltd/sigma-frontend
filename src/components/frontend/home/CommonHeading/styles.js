import styled from "styled-components";

export const CommonHeadingContainer = styled.div`
      h5 {
            color: ${(props) => props.theme.primary};
            display: block;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.16em;
            font-size: 16px;
            margin-bottom: 1rem;
            text-align: ${(props) => (props.align ? props.align : "left")};
            ${"" /* font-size: 0.875rem; */}
            font-family: ${(props) => props.theme.primaryFontBold};
      }
      h2 {
            font-size: 26px;
            font-weight: 400;
            line-height: 50px;
            color: #212529;
            font-family: ${(props) => props.theme.primaryFont};
            text-transform: capitalize;
            width: ${(props) => (props.width ? props.width : "100%")};
      }

      @media screen and (max-width: 568px) {
            h2 {
                  line-height: 32px;
            }
      }
`;
