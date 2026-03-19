import styled from "styled-components";

export const FaqContainer = styled.div`
      padding: 30px 0px;
      background: #f3f7fa;

      @media screen and (max-width: 568px) {
            position: relative;
            overflow: hidden;

            .col-lg-3 {
                  position: absolute;
                  right: -100px;
                  top: 10px;
            }

            .col-lg-9 {
                  z-index: 1;
            }
      }
`;

export const FaqAccordionContainer = styled.div`
      padding: 20px 20px;
      ${"" /* background: ${(props) => props.theme.white}; */}
`;
