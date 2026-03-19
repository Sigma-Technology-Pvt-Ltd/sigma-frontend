import { Container } from "react-bootstrap";
import styled from "styled-components";

export const SisterConcernContainer = styled.div``;

export const SisterWrapper = styled(Container)`
      padding: 60px 0px;

      @media screen and (max-width: 568px) {
            padding: 40px 10px;
            .row {
                  --bs-gutter-y: 0;
                  --bs-gutter-x: 0;

                  .col-lg-5 {
                        order: 1 !important;
                        border-radius: 5px;
                        margin-bottom: 20px;

                        img {
                              border-radius: 5px;
                        }
                  }

                  .col-lg-7 {
                        order: 2 !important;
                  }
            }
      }
`;
