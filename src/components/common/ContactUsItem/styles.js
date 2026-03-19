import styled from 'styled-components';

export const ContactItemContainer = styled.div`
   margin-bottom: 1rem;
`;
export const ContactItemTitle = styled.div`
   a {
      display: block;
      color: #626161;
   }
`;
export const ContactItemDetail = styled.div``;
export const ContactItemIcon = styled.div`
   min-width: 60px;
   height: 60px;
   background: ${(props) => props.theme.primary};
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.5em;
   border-radius: 7px;
   color: #fff;
   margin-right: 15px;
   transform-style: preserve-3d;
   transition: all 0.5s ease;
   img {
      width: 25px;
      height: 25px;
   }
`;
