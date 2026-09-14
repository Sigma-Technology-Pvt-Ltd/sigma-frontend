import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryItemIcon = styled.div`
      padding: 32px 30px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      svg {
            width: 52px;
            height: 52px;
            fill: ${(props) => props.theme.primary || "#1967d2"} !important;
            transition: all 0.3s ease;

            * {
                  fill: ${(props) => props.theme.primary || "#1967d2"} !important;
                  transition: all 0.3s ease;
            }
      }
`;

export const CategoryItemContent = styled.div`
      padding: 10px 24px 28px;
      width: 100%;
      text-align: center;
      transition: all 0.3s ease;

      h5 {
            text-transform: capitalize;
            color: #1e293b !important;
            font-family: ${(props) => props.theme.primaryFont};
            font-size: 17px;
            font-weight: 600;
            line-height: 1.4;
            margin: 0;
            transition: color 0.3s ease;
      }

      p {
            color: ${(props) => props.theme.paragraphColor || "#64748b"};
            margin-top: 8px;
            transition: color 0.3s ease;
      }
`;

export const CategoryItemContainer = styled(Link)`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-decoration: none !important;
      background: #ffffff;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
      transition: all 0.3s ease;
      min-height: 190px;
      overflow: hidden;

      /* Default state text color */
      h5 {
            color: #1e293b !important;
      }

      /* Hover state: high-contrast white text and white icon on brand blue background */
      &:hover {
            background: ${(props) => props.theme.primary || "#1967d2"} !important;
            box-shadow: 0 12px 28px rgba(25, 103, 210, 0.28);
            transform: translateY(-4px);

            ${CategoryItemIcon} {
                  svg {
                        fill: #ffffff !important;
                        stroke: #ffffff !important;

                        * {
                              fill: #ffffff !important;
                              stroke: #ffffff !important;
                        }
                  }
            }

            ${CategoryItemContent} {
                  h5 {
                        color: #ffffff !important;
                  }
                  p {
                        color: #f1f5f9 !important;
                  }
            }
      }
`;
