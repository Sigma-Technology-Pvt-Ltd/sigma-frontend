import React, { useState } from "react";
import {
      ProductFilterContainer,
      ProductFilterSelect,
      ProductFilterTitle,
      ProductGrid,
      ProductListItem,
      ProductSort,
} from "./styles";
import { FormSelect } from "react-bootstrap";
import { DesktopFilter } from "../../../category/CategoryMobileFilter/style";

const ProductFilter = ({ setList, list, category, setSort, sort }) => {
      const handleChange = (event) => {
            setSort(event.target.value);
      };

      return (
            <>
                  <ProductFilterContainer>
                        <ProductFilterTitle>
                              {category?.title}
                        </ProductFilterTitle>
                        <ProductSort className="gap-3">
                              <ProductListItem
                                    onClick={() => setList(true)}
                                    list={list}
                              >
                                    <span className="material-symbols-outlined">
                                          menu
                                    </span>
                              </ProductListItem>
                              <ProductGrid
                                    list={list}
                                    onClick={() => setList(false)}
                              >
                                    <span className="material-symbols-outlined">
                                          apps
                                    </span>
                              </ProductGrid>
                              <DesktopFilter>
                                    <ProductFilterSelect>
                                          <FormSelect
                                                value={sort}
                                                onChange={handleChange}
                                                aria-label="Without label"
                                          >
                                                <option value="">
                                                      <em>Default Sorting</em>
                                                </option>
                                                <option value="asc">
                                                      Sort by price: low to high
                                                </option>
                                                <option value="desc">
                                                      Sort by price: high to low
                                                </option>
                                          </FormSelect>
                                    </ProductFilterSelect>
                              </DesktopFilter>
                        </ProductSort>
                  </ProductFilterContainer>
            </>
      );
};

export default ProductFilter;
