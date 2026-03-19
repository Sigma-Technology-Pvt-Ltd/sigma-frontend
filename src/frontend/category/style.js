import styled from "styled-components";

export const FilterContainer = styled.div`
      display: flex;
      margin-bottom: 0rem;
      justify-content: space-between;
      align-items: center;
      background: white;
      padding: 8px 12px;

      @media screen and (max-width: 600px) {
            margin-bottom: 1rem;
      }
`;

export const CategoryListFilter = styled.ul`
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
      -webkit-box-align: baseline;
      -ms-flex-align: baseline;
      align-items: baseline;
      margin: 0;
      padding-left: 17px !important;
      grid-gap: 10px;
      padding-bottom: 0px;
      list-style: none;
`;

export const CategoryListItem = styled.div`
      position: relative;
      background-color: #fff;
      text-transform: capitalize;
      color: #3e4152;
      cursor: default;
      font-size: 14px;
      padding: 6px 36px 5px 20px;
      -webkit-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;
      border-radius: 20px;
      border: 1px solid #d4d5d9;
`;

export const CategoryListRemove = styled.label`
      position: absolute;
      top: 4px;
      right: 4px;
      width: 18px;
      height: 20px;
      z-index: 1;
      text-align: center;
      cursor: pointer;
      right: 10px;
      top: 4px;
`;

export const CategoryListRemoveIcon = styled.span`
      vertical-align: middle;
      opacity: 0.7;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);

      i {
            font-size: 20px;
      }
`;
