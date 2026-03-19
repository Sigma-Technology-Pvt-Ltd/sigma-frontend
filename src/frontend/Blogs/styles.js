import { Container } from "react-bootstrap";
import styled from "styled-components";

export const BlogContainer = styled(Container)`
      padding: 60px 0px;

      @media screen and (max-width: 568px) {
            padding: 50px 20px;
            .row {
                  --bs-gutter-y: 0;
                  --bs-gutter-x: 0;
            }
      }
`;
