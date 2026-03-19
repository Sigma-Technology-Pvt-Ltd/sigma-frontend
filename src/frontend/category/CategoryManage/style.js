import { Accordion } from "react-bootstrap";
import styled from "styled-components";

export const CategoryFilterContainer = styled(Accordion)`
      padding-right: 10px;
`;

export const CategoryFilterHeader = styled(Accordion.Header)`
      margin-right: 10px;

      button {
            padding: 10px 0;
            background-color: transparent !important;
            box-shadow: none !important;
            font-weight: 400;
            font-size: 1rem;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      }
`;

export const CategoryFilterBody = styled(Accordion.Body)`
      padding: 0;

      ul {
            padding-left: 0;
            margin-bottom: 0;

            li {
                  border-bottom: 1px solid #dee2e6;
                  padding-bottom: 5px;
                  padding-top: 5px;

                  &:last-child {
                        border-bottom: 0 !important;
                  }
            }

            .accordion {
                  border-bottom: 1px solid #dee2e6 !important;

                  &:last-child {
                        border-bottom: 0 !important;
                  }
            }
      }
`;
