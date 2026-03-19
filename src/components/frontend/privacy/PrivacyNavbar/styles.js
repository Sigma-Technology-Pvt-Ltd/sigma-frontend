import styled from "styled-components";

export const PrivacyNavWrapper = styled.div`
      ${"" /* padding-top: 40px; */}
      position: sticky;
      top: 81px;

      @media screen and (max-width: 600px) {
            margin-bottom: 30px;
      }
`;
export const PrivacyNavItem = styled.div`
      border-top: 1px solid #d0d2d3;
      border-left: 1px solid #d0d2d3;

      &:last-child {
            border-bottom: 1px solid #d0d2d3;
      }

      position: relative;
      a {
            color: #3c3c3c;
            display: block;
            width: 100%;
            padding: 13px 23px;
            height: 100%;
            span {
                  position: relative;
                  z-index: 9;
            }
            &.active {
                  color: ${(props) => props.theme.primary};
                  &:after {
                        content: "";
                        width: 131%;
                        height: 100%;
                        position: absolute;
                        top: 0px;
                        left: -59px;
                        ${
                              "" /* background: linear-gradient(90deg, rgba(0, 0, 0, 0) 17%, #fff 38%); */
                        }

                        @media screen and (max-width: 600px) {
                              left: 0;
                              width: 100%;
                        }
                  }
            }
      }

      @media screen and (max-width: 568px) {
            border-right: 1px solid #d0d2d3;
      }
`;
