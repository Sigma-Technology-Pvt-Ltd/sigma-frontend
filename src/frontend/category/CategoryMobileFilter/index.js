import React from "react";
import { MobileFilter, MobileFilterBtn, MobileFilterIcon } from "./style";
import { FormSelect, Offcanvas } from "react-bootstrap";
import { ProductFilterSelect } from "../../product/components/ProductFilter/styles";

const CategoryMobileFilter = ({
      show,
      handleShow,
      handleClose,
      children,
      sort,
      setSort,
}) => {
      const handleChange = (event) => {
            setSort(event.target.value);
      };

      return (
            <>
                  <MobileFilter>
                        <MobileFilterIcon>
                              <MobileFilterBtn
                                    onClick={handleShow}
                                    type="button"
                              >
                                    Filter
                              </MobileFilterBtn>
                        </MobileFilterIcon>
                        <ProductFilterSelect>
                              <FormSelect
                                    value={sort}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{
                                          "aria-label": "Without label",
                                    }}
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
                  </MobileFilter>
                  <Offcanvas
                        style={{ background: "white" }}
                        placement="end"
                        show={show}
                        onHide={handleClose}
                  >
                        <Offcanvas.Header closeButton>
                              <Offcanvas.Title>Advance Filter</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="p-0">
                              {children}
                        </Offcanvas.Body>
                  </Offcanvas>
            </>
      );
};

export default CategoryMobileFilter;
