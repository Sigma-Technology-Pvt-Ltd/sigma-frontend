import styled from "styled-components";

export const DesktopFilter = styled.div`
      @media screen and (max-width: 1200px) {
            display: none;
      }
`;

export const MobileFilter = styled.div`
      display: none;

      @media screen and (max-width: 1200px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            ${DesktopFilter} {
                  display: none;
            }
      }
`;

export const MobileFilterIcon = styled.div``;

export const MobileFilterBtn = styled.button`
      @media screen and (max-width: 1200px) {
            width: fit-content;
            padding: 4px 10px;
            border-radius: 5px;
            border: 1px solid #e4e4e4;
            background-color: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.white};
      }
`;
