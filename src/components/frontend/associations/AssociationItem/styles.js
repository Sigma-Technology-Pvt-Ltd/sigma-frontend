import styled from "styled-components";

export const AssociationItemCard = styled.div`
      background-color: ${(props) => props.theme.white};

      img {
            max-width: 100%;
            height: auto;
            aspect-ratio: 3/2;
            object-fit: contain;
      }
`;
