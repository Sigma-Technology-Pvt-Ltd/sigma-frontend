import { styled, css } from 'styled-components';

export const AssociationContainer = styled.div`
   ${'' /* padding: 50px 0px; */}
   ${'' /* padding: 30px 0px 0px 0px; */}
`;

export const AssociationHeadingDesc = styled.p``;

export const AssociationPadding = css`
   padding: 3rem 0;
`;
export const AssociationHeading = styled.div`
   ${AssociationPadding};
`;
export const DistributorSection = styled.section`
   background: ${(props) =>
      props.backgroundColor ? props.backgroundColor : ''};
   ${AssociationPadding};
`;

export const AssociationWrapper = styled.div``;
