import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { ProductCategoryCollapse, ProductCategoryWrapper } from "./styles";
import { Checkbox } from "@mui/material";

const ProductCategoryItem = ({ title, slug, subCategory }) => {
      const [open, setOpen] = useState(false);
      const label = { inputProps: { "aria-label": `${title}` } };
      console.log(subCategory);
      return (
            <>
                  <ProductCategoryWrapper>
                        <ProductCategoryCollapse
                              onClick={() => setOpen(!open)}
                              aria-controls="example-collapse-text"
                              aria-expanded={open}
                              className="d-flex align-items-center justify-content-between"
                        >
                              <div>
                                    <Checkbox {...label} checked={open} />
                                    {title}
                              </div>
                              {subCategory?.length > 0 && (
                                    <span className="material-symbols-outlined">
                                          expand_more
                                    </span>
                              )}
                        </ProductCategoryCollapse>
                        {subCategory?.length > 0 &&
                              subCategory?.map((item, index) => (
                                    <Collapse
                                          in={open}
                                          key={index}
                                          className="ps-5"
                                    >
                                          <div id="example-collapse-text">
                                                {item.title}
                                          </div>
                                    </Collapse>
                              ))}
                  </ProductCategoryWrapper>
            </>
      );
};

export default ProductCategoryItem;
