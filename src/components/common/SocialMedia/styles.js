import styled from "styled-components";

export const SocialMediaContainer = styled.div`
      display: flex;
      align-content: center;
      gap: 0.5rem;

      svg {
            width: 16px;
            height: 16px;

            height: 12px;
            width: 17px;
            fill: ${(props) => props.theme.cloudColor};
      }
`;
export const SocialMediaItem = styled.div`
      color: ${(props) => props.theme.primary};
      display: flex;
      align-items: center;

      a {
            display: flex;
            align-content: center;

            svg {
                  width: 16px;
                  height: 16px;

                  height: 12px;
                  width: 17px;
                  fill: ${(props) => props.theme.primary};
            }
      }
`;
