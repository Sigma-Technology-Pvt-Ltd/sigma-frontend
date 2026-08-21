import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import BreadCrumBox from "../../components/common/BreadCrumbBox";
import axios from "axios";
import toast from "react-hot-toast";
import { ProductPageContainer } from "../product/styles";
import {
      CommonContainer,
      CommonWrapper,
} from "../../styles/components/common/CommonStyle";
import { Col, Row } from "react-bootstrap";
import ProductFilter from "../product/components/ProductFilter";
import ProductList from "../product/components/ProductList/ProductList";
import { CategoryListFilter } from "./style";
import { Helmet } from "react-helmet";

const Category = () => {
      const { categoryId } = useParams();

      const [list, setList] = useState(false);
      const [loading, setLoading] = useState(false);
      const [products, setProducts] = useState([]);
      const [category, setCategory] = useState([]);

      const [sort, setSort] = useState("desc");

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/category/${categoryId}`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setCategory(response.data.category);
                              setProducts(response.data.products);
                        }
                  })
                  .catch((error) => {
                        toast.error(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, [categoryId]);

      return (
            <>
                  {!loading && (
                        <Helmet>
                              <title>
                                    {category?.seo_title || category?.title}
                              </title>
                              <link
                                    rel="canonical"
                                    href={window.location.href}
                              />
                              {category.seo_description && (
                                    <meta
                                          name="description"
                                          content={category.seo_description}
                                    />
                              )}
                              {category.seo_keyword && (
                                    <meta
                                          name="keyword"
                                          content={category.seo_keyword}
                                    />
                              )}
                              <meta property="og:locale" content="en_US" />
                              <meta property="og:type" content="website" />
                              <meta
                                    property="og:title"
                                    content={
                                          category?.seo_title || category?.title
                                    }
                              />
                              <meta
                                    property="og:url"
                                    content={window.location.href}
                              />
                              {category?.seo_description && (
                                    <meta
                                          property="og:description"
                                          content={category?.seo_description}
                                    />
                              )}
                              <meta
                                    property="og:site_name"
                                    content="Sigma Technologies"
                              />
                              <meta
                                    name="twitter:card"
                                    content="summary_large_image"
                              />
                        </Helmet>
                  )}
                  <BreadCrumBox
                        title={category?.title}
                        link={`/product-category/${category?.sub_category_link}`}
                        linkTitle={category?.sub_category}
                  />
                  <ProductPageContainer>
                        <CommonWrapper>
                              <CommonContainer>
                                    <Row>
                                          <Col>
                                                <div
                                                      dangerouslySetInnerHTML={{
                                                            __html: DOMPurify.sanitize(category?.description || ''),
                                                      }}
                                                ></div>
                                                <ProductFilter
                                                      setList={setList}
                                                      setProducts={setProducts}
                                                      list={list}
                                                      category={category}
                                                      setSort={setSort}
                                                      sort={sort}
                                                />
                                                <CategoryListFilter></CategoryListFilter>
                                                <ProductList
                                                      products={products}
                                                      list={list}
                                                />
                                          </Col>
                                    </Row>
                              </CommonContainer>
                        </CommonWrapper>
                  </ProductPageContainer>
            </>
      );
};

export default Category;
