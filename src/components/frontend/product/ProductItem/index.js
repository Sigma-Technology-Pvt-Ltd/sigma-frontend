import React from "react";
import {
      ProductActionItem,
      ProductItemAction,
      ProductItemContainer,
      ProductItemContent,
      ProductItemImage,
      ProductStatus,
      ProductStatusItem,
} from "./styles";
import { Link } from "react-router-dom";

const ProductItem = ({ data, list }) => {
      return (
            <>
                  <ProductItemContainer
                        style={{
                              flexDirection: list ? "" : "column",
                              gap: list ? "30px" : "",
                              textAlign: list ? "left" : "",
                        }}
                        list={list}
                  >
                        <ProductItemImage>
                              <Link to={`/product/${data.slug}`}>
                                    <img
                                          src={data?.image}
                                          alt={data?.title}
                                          width={"100%"}
                                          height={"100%"}
                                          className="img-fluid"
                                    />
                              </Link>
                        </ProductItemImage>
                        <ProductItemContent className="mt-2">
                              <h3>
                                    <Link to={`/product/${data?.slug}`}>
                                          {data?.title}
                                    </Link>
                              </h3>
                              {data.sale_price ? (
                                    <p>
                                          <del>Rs: {data?.price}</del> Rs:{" "}
                                          {data?.sale_price}
                                    </p>
                              ) : data.price ? (
                                    <p> Rs: {data?.price}</p>
                              ) : (
                                    ""
                              )}

                              <ProductItemAction
                                    style={{
                                          position: list ? "relative" : "",
                                          display: list ? "flex" : "",
                                          gap: list ? "20px" : "",
                                          marginTop: list ? "20px " : "",
                                    }}
                              >
                                    <ProductActionItem list={list}>
                                          <span className="material-symbols-outlined">
                                                favorite
                                          </span>
                                    </ProductActionItem>
                                    <ProductActionItem list={list}>
                                          <span className="material-symbols-outlined">
                                                search
                                          </span>
                                    </ProductActionItem>
                                    <ProductActionItem list={list}>
                                          <span className="material-symbols-outlined">
                                                compare_arrows
                                          </span>
                                    </ProductActionItem>
                              </ProductItemAction>
                        </ProductItemContent>

                        <ProductStatus>
                              {data?.order_status ? (
                                    <ProductStatusItem>
                                          SOLD OUT
                                    </ProductStatusItem>
                              ) : (
                                    <>
                                          {data?.type ? (
                                                <ProductStatusItem>
                                                      {data?.type}
                                                </ProductStatusItem>
                                          ) : (
                                                ""
                                          )}
                                    </>
                              )}
                        </ProductStatus>
                  </ProductItemContainer>
            </>
      );
};

export default ProductItem;
