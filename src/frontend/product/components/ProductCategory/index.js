import React from "react";
import { ProductCategoryContainer } from "./styles";
import ProductCategoryItem from "../../../../components/frontend/product/ProductCategoryItem";
import ProductTitle from "../../../../components/frontend/product/ProductTitle";

const ProductCategory = ({ categories }) => {
      return (
            <>
                  <ProductCategoryContainer>
                        <ProductTitle title={"Product Category"} />
                        {categories?.map((item, index) => (
                              <ProductCategoryItem
                                    title={item.title}
                                    key={index}
                                    slug={item.slug}
                                    subCategory={item.subCategory}
                              />
                        ))}
                  </ProductCategoryContainer>
            </>
      );
};

export default ProductCategory;
