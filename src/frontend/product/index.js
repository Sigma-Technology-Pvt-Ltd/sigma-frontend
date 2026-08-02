import React, { useEffect, useState } from "react";
import {
      CategoryContent,
      CategoryItem,
      CategoryItemImage,
      ProductPageContainer,
} from "./styles";
import BreadCrumBox from "../../components/common/BreadCrumbBox";
import {
      CommonContainer,
      CommonWrapper,
} from "../../styles/components/common/CommonStyle";
import { Col, Row } from "react-bootstrap";
import ParentSkeleton from "../../components/skeleton/ParentSkeleton";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCategoryLink from "../product_category/ProductCategoryLink";

const ProductPage = () => {
      const [loading, setLoading] = useState(false);
      const [categories, setCategories] = useState([]);

      const loadData = async () => {
            setLoading(true);

            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/categories/navigation/lists`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setCategories(response.data.categories);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });

            setLoading(false);
      };

      const location = useLocation();

      useEffect(() => {
            loadData();
      }, [location.pathname]);

      return (
            <>
                  <BreadCrumBox title={"Our Products"} />
                  <ProductPageContainer>
                        <CommonWrapper>
                              <CommonContainer>
                                    <Row className="g-5">
                                          {!loading ? (
                                                categories?.length > 0 ? (
                                                      categories?.map(
                                                            (item, index) => (
                                                                  <Col
                                                                        lg={4}
                                                                        key={
                                                                              index
                                                                        }
                                                                  >
                                                                        <CategoryItem>
                                                                              {item?.image !==
                                                                                    "" && (
                                                                                    <CategoryItemImage>
                                                                                          <img
                                                                                                src={
                                                                                                      item?.image
                                                                                                }
                                                                                                alt={
                                                                                                      item?.title
                                                                                                }
                                                                                                width="100%"
                                                                                                height="100%"
                                                                                          />
                                                                                    </CategoryItemImage>
                                                                              )}
                                                                              <CategoryContent>
                                                                                    <h2>
                                                                                          {
                                                                                                item.title
                                                                                          }
                                                                                    </h2>
                                                                                    <div className="mt-auto">
                                                                                          <ProductCategoryLink
                                                                                                category={
                                                                                                      item
                                                                                                }
                                                                                                slug={
                                                                                                      item?.slug
                                                                                                }
                                                                                          />
                                                                                    </div>
                                                                              </CategoryContent>
                                                                        </CategoryItem>
                                                                  </Col>
                                                            )
                                                      )
                                                ) : null
                                          ) : (
                                                <>
                                                      <Col lg={4}>
                                                            <ParentSkeleton />
                                                      </Col>
                                                      <Col lg={4}>
                                                            <ParentSkeleton />
                                                      </Col>
                                                      <Col lg={4}>
                                                            <ParentSkeleton />
                                                      </Col>
                                                </>
                                          )}
                                    </Row>
                              </CommonContainer>
                        </CommonWrapper>
                  </ProductPageContainer>
            </>
      );
};

export default ProductPage;
