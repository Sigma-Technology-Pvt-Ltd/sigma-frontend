import styled, { css } from "styled-components";

export const ProductFilterContainer = styled.div`
      background: #f5f5f5;
      padding: 11px 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
`;

export const ProductFilterTitle = styled.h1`
      font-size: 20px;
      margin-bottom: 0px;
`;
export const MouseIcon = css`
      cursor: pointer;
`;
export const ProductSort = styled.div`
      display: flex;
      align-items: center;
`;
export const ProductListItem = styled.div`
      cursor: pointer;
      display: flex;
      align-items: center;
      color: ${(props) => (props.list ? props.theme.primary : "")};
      &:hover {
            color: ${(props) => props.theme.primary};
      }
`;
export const ProductGrid = styled.div`
      cursor: pointer;
      display: flex;
      align-items: center;
      color: ${(props) => (props.list ? " " : props.theme.primary)};
      &:hover {
            color: ${(props) => props.theme.primary};
      }
`;
export const ProductSearchResult = styled.div``;
export const ProductFilterSelect = styled.div`
      .form-select {
            box-shadow: none;
      }
`;
