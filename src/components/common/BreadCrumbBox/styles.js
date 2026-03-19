import styled from 'styled-components';

export const BreadcrumbContainer = styled.div`
   background-image: url('/images/img/banner/background3.png');
   padding: 50px 0;
   background-size: cover;
   background-position: center center;
   background-repeat: no-repeat;
   border-bottom: 1px solid #f2f5fc;
   a {
      color: ${(props) => props.theme.primary};
   }

   @media only screen and (max-width: 568px) {
      padding: 20px 0;
   }
`;
