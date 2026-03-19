import React, { memo, useEffect, useState } from "react";
import BreadCrumBox from "../../components/common/BreadCrumbBox";
import {
      BlogCategory,
      BlogCategoryItem,
      BlogCategoryList,
      BlogDetailContent,
      BlogDetailDesc,
      BlogDetailDescription,
      BlogDetailImage,
      BlogDetailSection,
      BlogHeading,
      BlogHeadingCategory,
      BlogHeadingInner,
      BlogHeadingMeta,
      BlogRecentImage,
      BlogRecentInfo,
      BlogRecentItem,
      BlogSearch,
} from "./styles";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Skeleton } from "@mui/material";
import TitleSkeleton from "../../components/skeleton/TitleSkeleton";
import RelatedBlogSkeleton from "../../components/skeleton/RelatedBlogSkeleton";
import { Helmet } from "react-helmet";

const BlogDetail = memo(() => {
      const { blogId } = useParams();
      const [blog, setBlog] = useState([]);
      const [blogs, setBlogs] = useState([]);
      const [categories, setCategories] = useState([]);
      const [loading, setLoading] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/blogs/${blogId}`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setBlog(response.data.blog);
                              setCategories(response.data.categories);
                              setBlogs(response.data.blogs);
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
                              <title>
                                    {blog?.seo_title || blog?.title}
                              </title>
                              <link
                                    rel="canonical"
                                    href={window.location.href}
                              />
                              {blog.seo_description && (
                                    <meta
                                          name="description"
                                          content={blog.seo_description}
                                    />
                              )}
                              {blog.seo_keyword && (
                                    <meta
                                          name="keyword"
                                          content={blog.seo_keyword}
                                    />
                              )}
                              <meta property="og:locale" content="en_US" />
                              <meta property="og:type" content="website" />
                              <meta
                                    property="og:title"
                                    content={
                                          blog?.seo_title || blog?.title
                                    }
                              />
                              <meta
                                    property="og:url"
                                    content={window.location.href}
                              />
                              {blog?.seo_description && (
                                    <meta
                                          property="og:description"
                                          content={blog?.seo_description}
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
                  <BlogDetailContent>
                        <BreadCrumBox
                              linkTitle={"Blogs"}
                              link="/blogs"
                              title={blog?.title}
                        />
                  </BlogDetailContent>
                  <BlogDetailSection>
                        <Container>
                              <Row>
                                    <Col lg={8}>
                                          <BlogDetailDesc>
                                                {!loading ? (
                                                      <BlogDetailImage>
                                                            <img
                                                                  src={
                                                                        blog.image
                                                                  }
                                                                  className="img-fluid w-100"
                                                                  alt={
                                                                        blog?.title
                                                                  }
                                                            />
                                                      </BlogDetailImage>
                                                ) : (
                                                      <Skeleton
                                                            height="511px"
                                                            width="100%"
                                                            style={{
                                                                  transform:
                                                                        "scale(1)",
                                                                  marginBottom:
                                                                        "0rem",
                                                            }}
                                                      />
                                                )}

                                                {!loading ? (
                                                      <BlogHeadingCategory>
                                                            <h1>
                                                                  {blog?.title}
                                                            </h1>
                                                      </BlogHeadingCategory>
                                                ) : (
                                                      <Skeleton
                                                            height="24px"
                                                            width="50%"
                                                            style={{
                                                                  transform:
                                                                        "scale(1)",
                                                                  marginBottom:
                                                                        "0.5rem",
                                                            }}
                                                            className="mt-3"
                                                      />
                                                )}
                                                <BlogHeading>
                                                      <BlogHeadingMeta>
                                                            {!loading ? (
                                                                  <BlogHeadingCategory className="m-0">
                                                                        <Link
                                                                              to={`/category/${blog.category_slug}`}
                                                                              className="text-white"
                                                                        >
                                                                              {
                                                                                    blog.category
                                                                              }
                                                                        </Link>
                                                                  </BlogHeadingCategory>
                                                            ) : (
                                                                  <Skeleton
                                                                        height="24px"
                                                                        width="112px"
                                                                        style={{
                                                                              transform:
                                                                                    "scale(1)",
                                                                              marginBottom:
                                                                                    "0rem",
                                                                        }}
                                                                  />
                                                            )}
                                                            {!loading ? (
                                                                  <BlogHeadingInner>
                                                                        <Link
                                                                              to={
                                                                                    "#"
                                                                              }
                                                                              className="d-flex align-items-center gap-2"
                                                                        >
                                                                              <span className="material-symbols-outlined">
                                                                                    calendar_month
                                                                              </span>
                                                                              {
                                                                                    blog.date
                                                                              }
                                                                        </Link>
                                                                  </BlogHeadingInner>
                                                            ) : (
                                                                  <Skeleton
                                                                        height="24px"
                                                                        width="124px"
                                                                        style={{
                                                                              transform:
                                                                                    "scale(1)",
                                                                              marginBottom:
                                                                                    "0rem",
                                                                        }}
                                                                  />
                                                            )}
                                                      </BlogHeadingMeta>
                                                </BlogHeading>
                                                {!loading ? (
                                                      <BlogDetailDescription
                                                            dangerouslySetInnerHTML={{
                                                                  __html: blog.description,
                                                            }}
                                                      />
                                                ) : (
                                                      <>
                                                            <TitleSkeleton
                                                                  height="20px"
                                                                  classes="mb-3"
                                                            />
                                                            <TitleSkeleton
                                                                  height="20px"
                                                                  classes="mb-3"
                                                                  width="90%"
                                                            />
                                                            <TitleSkeleton
                                                                  height="20px"
                                                                  classes="mb-3"
                                                                  width="75%"
                                                            />
                                                            <TitleSkeleton
                                                                  height="20px"
                                                                  classes="mb-3"
                                                                  width="80%"
                                                            />
                                                      </>
                                                )}
                                          </BlogDetailDesc>
                                    </Col>
                                    <Col lg={4}>
                                          <BlogSearch></BlogSearch>
                                          <BlogCategory>
                                                <h2 className="title">
                                                      Categories
                                                </h2>
                                                <BlogCategoryList className="list-inline">
                                                      {!loading ? (
                                                            categories?.map(
                                                                  (
                                                                        category,
                                                                        index
                                                                  ) =>
                                                                        !loading ? (
                                                                              <BlogCategoryItem
                                                                                    key={
                                                                                          index
                                                                                    }
                                                                              >
                                                                                    <Link
                                                                                          to={`/category/${category.slug}`}
                                                                                          className="d-flex align-items-centers"
                                                                                    >
                                                                                          <span className="material-symbols-outlined">
                                                                                                expand_circle_right
                                                                                          </span>
                                                                                          {
                                                                                                category.title
                                                                                          }
                                                                                    </Link>
                                                                              </BlogCategoryItem>
                                                                        ) : (
                                                                              <Skeleton
                                                                                    height="24px"
                                                                                    width="371px"
                                                                                    style={{
                                                                                          transform:
                                                                                                "scale(1)",
                                                                                          marginTop:
                                                                                                "1rem",
                                                                                    }}
                                                                              />
                                                                        )
                                                            )
                                                      ) : (
                                                            <>
                                                                  <TitleSkeleton
                                                                        height="20px"
                                                                        classes="mb-3"
                                                                  />
                                                                  <TitleSkeleton
                                                                        height="20px"
                                                                        classes="mb-3"
                                                                  />
                                                            </>
                                                      )}
                                                      {}
                                                </BlogCategoryList>
                                          </BlogCategory>
                                          <BlogCategory>
                                                <h2 className="title">
                                                      Recent News
                                                </h2>
                                                <BlogCategoryList className="list-inline">
                                                      {!loading ? (
                                                            blogs?.map(
                                                                  (
                                                                        blog,
                                                                        index
                                                                  ) => (
                                                                        <BlogCategoryItem
                                                                              key={
                                                                                    index
                                                                              }
                                                                        >
                                                                              <BlogRecentItem className="d-flex align-items-center  justify-content-between gap-2">
                                                                                    <BlogRecentImage>
                                                                                          <Link
                                                                                                to={`/blogs/${blog.slug}`}
                                                                                          >
                                                                                                <img
                                                                                                      src={
                                                                                                            blog.image
                                                                                                      }
                                                                                                      alt={
                                                                                                            blog.title
                                                                                                      }
                                                                                                      width="120px"
                                                                                                      height="auto"
                                                                                                />
                                                                                          </Link>
                                                                                    </BlogRecentImage>
                                                                                    <BlogRecentInfo>
                                                                                          <Link
                                                                                                to={`/blogs/${blog.slug}`}
                                                                                                className="d-flex align-items-centers"
                                                                                          >
                                                                                                {
                                                                                                      blog.title
                                                                                                }
                                                                                          </Link>

                                                                                          <span>
                                                                                                {
                                                                                                      blog.date
                                                                                                }
                                                                                          </span>
                                                                                    </BlogRecentInfo>
                                                                              </BlogRecentItem>
                                                                        </BlogCategoryItem>
                                                                  )
                                                            )
                                                      ) : (
                                                            <>
                                                                  <RelatedBlogSkeleton />
                                                                  <RelatedBlogSkeleton />
                                                                  <RelatedBlogSkeleton />
                                                            </>
                                                      )}
                                                      {}
                                                </BlogCategoryList>
                                          </BlogCategory>
                                    </Col>
                              </Row>
                        </Container>
                  </BlogDetailSection>
            </>
      );
});

export default BlogDetail;
