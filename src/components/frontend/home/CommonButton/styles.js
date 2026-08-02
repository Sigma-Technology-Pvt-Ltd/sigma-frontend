import styled, { css } from "styled-components";

export const smoothTransition = css`
      -ms-transition: color 0.4s ease, background-color 0.4s ease,
            border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
      -o-transition: color 0.4s ease, background-color 0.4s ease,
            border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
      -moz-transition: color 0.4s ease, background-color 0.4s ease,
            border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
      -webkit-transition: color 0.4s ease, background-color 0.4s ease,
            border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
      transition: color 0.4s ease, background-color 0.4s ease,
            border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
`;

export const CommonButtonContainer = styled.div`
      a,
      button {
            display: inline-flex;
            background-color: ${(props) =>
                  props.$background || props.background || props.theme.primary};
            border-color: #5e6fb5;
            color: ${(props) =>
                  props.$color || props.color || props.theme.white};
            padding: 11px 15px;
            font-weight: bold;
            border-radius: 10px;
            text-transform: uppercase;
            font-size: 12px;
            font-family: ${(props) => props.theme.primaryFont};
            span {
                  ${smoothTransition}
            }
            .material-symbols-outlined {
                  font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0,
                        "opsz" 24;
            }
            &:hover {
                  background-color: ${(props) => props.theme.dark};
                  ${smoothTransition}
                  color: #fff;
                  span {
                        transform: translateX(10px);
                        ${smoothTransition}
                  }
            }
            ${smoothTransition}
      }

      .spinner-border {
            height: 1rem;
            width: 1rem;
            border-width: 1px;
      }

      @media screen and (max-width: 568px) {
            a {
                  padding: 10px 20px;
            }
      }
`;
