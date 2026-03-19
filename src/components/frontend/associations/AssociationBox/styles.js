import styled from 'styled-components';

export const AssociationLogoContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   background-color: #eaeaea;
   border: 1px solid #eaeaea;
   grid-column-gap: 1px;
   grid-row-gap: 1px;
   @media screen and (max-width: 950px) {
      grid-template-columns: repeat(3, 1fr);
   }
`;
