import styled from 'styled-components';

export const ContactHeadingContainer = styled.div`
   h3 {
      font-size: 20px;
      border-left: 3px solid ${(props) => props.theme.primary};
      padding: 0px 7px;
      font-family: ${(props) => props.theme.primaryFont};
      font-size: 28px;
      ${'' /* font-weight: 700; */}
   }
`;
