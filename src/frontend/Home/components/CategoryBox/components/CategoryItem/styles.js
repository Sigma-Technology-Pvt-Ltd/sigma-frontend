import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryItemIcon = styled.div`
      ${
            "" /* -webkit-mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjYsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDkgMTE5LjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwOSAxMTkuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwOSw3OS40VjM5LjhjMC03LjItMy44LTEzLjgtMTAtMTcuM0w2NC41LDIuN2MtNi4yLTMuNi0xMy45LTMuNi0yMC4xLDBMMTAsMjIuNUMzLjgsMjYuMSwwLDMyLjcsMCwzOS44djM5LjYNCgljMCw3LjIsMy44LDEzLjgsMTAsMTcuM2wzNC40LDE5LjhjNi4yLDMuNiwxMy45LDMuNiwyMC4xLDBsMzQuNC0xOS44QzEwNS4yLDkzLjIsMTA5LDg2LjYsMTA5LDc5LjR6Ii8+DQo8L3N2Zz4NCg==);
   mask-size: 100% 100%;
   -webkit-mask-size: 100% 100%;
   mask-repeat: no-repeat;
   -webkit-mask-repeat: no-repeat;
   background-color: rgba(0, 0, 0, 0.11); */
      }
      padding: 30px;

      margin-bottom: -55px;
      svg {
            width: 52px;
            height: 52px;
            fill: ${(props) => props.theme.primary};
      }
`;
export const CategoryItemContent = styled.div`
      ${"" /* margin: 0 0 10px; */}
      padding: 45px 30px 0px;
      min-width: 280px;
      border-style: solid;
      border-width: 1px;
      border-color: transparent;
      border-radius: 10px;
      a {
            h5 {
                  text-transform: capitalize;
                  color: #212121;
                  font-family: ${(props) => props.theme.primaryFont};
                  margin-bottom: 20px;
            }
      }
      p {
            color: ${(props) => props.theme.paragraphColor};
      }
`;

export const CategoryItemContainer = styled(Link)`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &:hover {
            background: ${(props) => props.theme.primary};
            transition: background 0.3s;
            ${CategoryItemIcon} {
                  svg {
                        fill: ${(props) => props.theme.white};
                  }
            }
            ${CategoryItemContent} {
                  transition: background 0.3s, border 0.3s, border-radius 0.3s,
                        box-shadow 0.3s,
                        transform var(--e-transform-transition-duration, 0.4s);
                  a {
                        h5 {
                              text-transform: capitalize;
                              color: ${(props) => props.theme.white};
                              font-family: ${(props) =>
                                    props.theme.primaryFont};
                              margin-bottom: 20px;
                        }
                  }
                  p {
                        color: #f7f7f7;
                  }
            }
      }
`;
