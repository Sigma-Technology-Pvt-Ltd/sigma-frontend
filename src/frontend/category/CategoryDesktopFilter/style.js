import styled from "styled-components";

export const ProductListItems = styled.div`
      background: white;
      padding: 10px 20px;
      margin-bottom: 20px;
      position: sticky;
      top: 7rem;
`;

export const ProductListTitle = styled.div`
      h2 {
            border-bottom: 1px dotted #000000;
            font-size: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding-bottom: 10px;
      }
`;

export const ProductListContent = styled.div`
      /* max-height: 286px; */
      overflow: hidden auto;
      padding: 10px 0;
      overflow-x: hidden !important;

      &::-webkit-scrollbar {
            width: 6px;
      }

      &::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
            transition: background 0.3s ease-in-out;
      }

      &::-webkit-scrollbar-thumb:hover {
            background: #555;
      }
`;
