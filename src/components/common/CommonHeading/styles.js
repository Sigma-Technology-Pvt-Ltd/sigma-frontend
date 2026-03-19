import styled from "styled-components";

export const CustomHeadingContainer = styled.div`
      h3 {
            font-size: 28px;
            font-weight: 400;
            line-height: 1;
            letter-spacing: 0;
            color: #14141c;
            position: relative;
            margin-bottom: 2rem;
            display: inline-block;
            text-transform: capitalize;
            font-family: ${(props) =>
                  props.fontSize ? "" : props.theme.primaryFont};
            &:after {
                  content: "";
                  position: absolute;
                  bottom: -15px;
                  left: 0;
                  width: 150px;
                  height: 1px;
                  background-color: ${(props) => props.theme.cloudColor};
            }
            &:before {
                  content: "";
                  position: absolute;
                  bottom: -16px;
                  width: 50px;
                  height: 4px;
                  left: 0;
                  background-color: ${(props) => props.theme.primary};
                  z-index: 1;
            }
      }

      @media screen and (max-width: 568px) {
            h3 {
                  line-height: 32px;
            }
      }
`;
