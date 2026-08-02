import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductItem from "../../../../components/frontend/product/ProductItem";

const ProductList = ({ products, list }) => {
      return (
            <>
                  <Row
                        className="mt-3 g-3"
                        style={{ flexDirection: list ? "column" : "" }}
                  >
                        {products?.map((item, index) => (
                              <Col
                                    key={item.id || item.slug || index}
                                    lg={3}
                                    md={4}
                                    sm={6}
                                    className="col-6"
                                    style={{ width: list ? "100%" : "" }}
                              >
                                    <ProductItem
                                          data={item}
                                          list={list}
                                    />
                              </Col>
                        ))}
                  </Row>
            </>
      );
};

export default ProductList;
