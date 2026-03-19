import styled from "styled-components";

export const ProductPageContainer = styled.div``;

export const CategoryItem = styled.div`
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: white;

      h4 {
            font-weight: 400;
      }

      a {
            text-decoration: none;
            display: inline-block;
            color: ${(props) => props.theme.primary};
            padding: 6px 20px;
            transition: all 0.3s ease-in;
            border: 1px solid ${(props) => props.theme.primary};

            &:hover {
                  color: ${(props) => props.theme.white};
                  background-color: ${(props) => props.theme.primary};
            }
      }
`;

export const CategoryItemImage = styled.div`
      height: ${(props) => props.height};

      img {
            width: 100%;
            height: 100%;
            object-fit: contain;
      }
`;

export const CategoryContent = styled.div`
      /* padding: 20px; */
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      h2 {
            font-size: 20px;
            margin-top: 5px;
      }
`;
