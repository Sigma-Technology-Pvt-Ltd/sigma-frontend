import React from "react";

import {
      ProductListContent,
      ProductListItems,
      ProductListTitle,
} from "./style";
import CategoryManage from "../CategoryManage";

const CategoryDesktopFilter = ({
      categories,
      handleChangeCategory,
      loadingCategory,
}) => {
      return (
            <>
                  <ProductListItems>
                        <ProductListTitle>
                              <h2>Categories</h2>
                        </ProductListTitle>
                        <ProductListContent>
                              <CategoryManage
                                    loading={loadingCategory}
                                    categories={categories}
                                    handleChangeCategory={handleChangeCategory}
                              />
                        </ProductListContent>
                  </ProductListItems>
            </>
      );
};

export default CategoryDesktopFilter;
