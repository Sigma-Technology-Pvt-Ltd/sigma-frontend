import React, { useContext, useEffect, useState } from "react";
import BreadCrumBox from "../../components/common/BreadCrumbBox";
import { BlogContainer } from "./styles";
import toast from "react-hot-toast";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import BlogItemBox from "../../components/frontend/blogs/BlogItemBox";
import BlogSkeleton from "../../components/skeleton/BlogSkeleton";
import MetaContext from "../../stores/MetaContext";

const BlogPage = () => {
      const metaCtx = useContext(MetaContext);
      useEffect(() => {
            metaCtx.handleSlug("blogs");
      }, []);

      const [blogs, setBlogs] = useState([]);
      const [loading, setLoading] = useState();

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/blogs`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
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
                  <BreadCrumBox title={"Blogs & News"} />
                  <BlogContainer>
                        <Row className="g-5">
                              {!loading ? (
                                    blogs?.length > 0 ? (
                                          blogs?.map((blog, index) => (
                                                <Col lg={4} key={blog.id || index}>
                                                      <BlogItemBox
                                                            blog={blog}
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

export default BlogPage;
