import React from 'react';
import { ProductTitleContainer } from './styles';

const ProductTitle = ({ title }) => {
   return (
      <>
         <ProductTitleContainer>{title}</ProductTitleContainer>
      </>
   );
};

export default ProductTitle;
