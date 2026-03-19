import styled from "styled-components";

export const SocialMediaContainer = styled.div`
  display: flex;
  align-content: center;
  gap: 0.5rem;
`;
export const SocialMediaItem = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${(props) =>   props.color || props.theme.secondary};
    display: flex;
    align-content: center;
    transition: all 0.3s ease;

    &:hover {
      color: ${(props) => props.hoverColor || props.theme.primary};
    }

    svg {
      width: 16px;
      height: 16px;

      height: 12px;
      width: 17px;
      fill: ${(props) => props.theme.primary};
    }
  }
`;
