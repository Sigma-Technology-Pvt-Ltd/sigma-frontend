import React, { useEffect, useState } from "react";
import BreadCrumBox from "../../components/common/BreadCrumbBox";
import { BlogContainer } from "../Blogs/styles";
import { Col, Row } from "react-bootstrap";
import BlogItemBox from "../../components/frontend/blogs/BlogItemBox";
import BlogSkeleton from "../../components/skeleton/BlogSkeleton";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogCategory = () => {
      const [blogs, setBlogs] = useState([]);
      const [loading, setLoading] = useState();
      const { categoryId } = useParams();
      const [category, setCategory] = useState();

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/blogs/categories/${categoryId}`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setBlogs(response.data.blogs);
                              setCategory(response.data.category);
                        }
                  })
                  .catch((error) => {
                        toast.error(error.message);
                  });
            setLoading(false);
      };
      useEffect(() => {
            loadData();
      }, []);

      return (
            <>
                  {!loading && (
                        <Helmet>
                              <title>{`Blog by ${
                                    category?.seo_title || category?.title
                              }`}</title>
                              <link
                                    rel="canonical"
                                    href={window.location.href}
                              />
                              {category?.seo_description && (
                                    <meta
                                          name="description"
                                          content={category?.seo_description}
                                    />
                              )}
                              {category?.seo_keyword && (
                                    <meta
                                          name="keyword"
                                          content={category?.seo_keyword}
                                    />
                              )}
                              <meta property="og:locale" content="en_US" />
                              <meta property="og:type" content="website" />
                              <meta
                                    property="og:title"
                                    content={`Blog by ${
                                          category?.seo_title || category?.title
                                    }`}
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
                        linkTitle="Blogs"
                        link="/blogs"
                        title={`Blog by ${category?.title}`}
                  />
                  <BlogContainer>
                        <Row className="g-5">
                              {!loading ? (
                                    blogs?.length > 0 ? (
                                          blogs?.map((blog, index) => (
                                                <Col lg={4}>
                                                      <BlogItemBox
                                                            blog={blog}
                                                            key={index}
                                                      />
                                                </Col>
                                          ))
                                    ) : null
                              ) : (
                                    <>
                                          <Col lg={4}>
                                                <BlogSkeleton />
                                          </Col>
                                          <Col lg={4}>
                                                <BlogSkeleton />
                                          </Col>
                                          <Col lg={4}>
                                                <BlogSkeleton />
                                          </Col>
                                    </>
                              )}
                        </Row>
                  </BlogContainer>
            </>
      );
};

export default BlogCategory;
