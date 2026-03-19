import React, { useEffect, useState } from "react";
import {
      BlogBoxContainer,
      BlogBoxContent,
      BlogBoxEntryContent,
      BlogBoxEntryMeta,
      BlogBoxEntryTitle,
      BlogBoxHeader,
      BlogBoxImage,
      BlogBoxInnerBox,
      BlogBoxInnerContainer,
      BlogBoxMetaInner,
} from "./styles";
import CommonHeading from "../../../../components/frontend/home/CommonHeading";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { TestimonialSlider } from "../TestimonialBox/styles";

const options = {
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000, //2000ms=2s
      autoplayHoverPause: true,
      margin: 30,
      responsive: {
            0: {
                  items: 1,
                  dots: false,
            },
            600: {
                  items: 3,
            },
            1000: {
                  items: 3,
            },
      },
};

const BlogBox = () => {
      const [loading, setLoading] = useState(false);
      const [blogs, setBlogs] = useState([]);

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
                  <BlogBoxContainer>
                        <CommonHeading
                              subTitle={"From Our blogs"}
                              title={"Here's What's Happening"}
                              align={"center"}
                        />
                        <Container className="mt-5">
                              <Row className="g-5">
                                    {!loading ? (
                                          <TestimonialSlider
                                                items={3}
                                                className=" owl-theme"
                                                {...options}
                                          >
                                                {blogs.map((item, index) => (
                                                      <BlogBoxInnerContainer
                                                            key={index}
                                                      >
                                                            <BlogBoxInnerBox>
                                                                  <BlogBoxImage
                                                                        to={`/blogs/${item.slug}`}
                                                                        className="w-100"
                                                                  >
                                                                        <img
                                                                              src={
                                                                                    item.image
                                                                              }
                                                                              alt="Blog"
                                                                              width={
                                                                                    "400"
                                                                              }
                                                                              className="w-100"
                                                                              height={
                                                                                    "210"
                                                                              }
                                                                        />
                                                                  </BlogBoxImage>
                                                                  <BlogBoxContent>
                                                                        <BlogBoxHeader>
                                                                              <BlogBoxEntryMeta>
                                                                                    <BlogBoxMetaInner className="mb-1">
                                                                                          <span className="posted on">
                                                                                                <i
                                                                                                      className="fa fa-calendar"
                                                                                                      aria-hidden="true"
                                                                                                ></i>
                                                                                                <Link
                                                                                                      to={`/blogs/${item.slug}`}
                                                                                                >
                                                                                                      {
                                                                                                            item.date
                                                                                                      }
                                                                                                </Link>
                                                                                          </span>
                                                                                    </BlogBoxMetaInner>
                                                                              </BlogBoxEntryMeta>
                                                                              <BlogBoxEntryTitle>
                                                                                    <Link
                                                                                          to={`/blogs/${item.slug}`}
                                                                                    >
                                                                                          {
                                                                                                item.title
                                                                                          }
                                                                                    </Link>
                                                                              </BlogBoxEntryTitle>
                                                                        </BlogBoxHeader>
                                                                        <BlogBoxEntryContent>
                                                                              <Link
                                                                                    to={`/blogs/${item.slug}`}
                                                                              >
                                                                                    <span>
                                                                                          READ
                                                                                          MORE
                                                                                    </span>
                                                                                    <i
                                                                                          className="fa fa-long-arrow-right"
                                                                                          aria-hidden="true"
                                                                                    ></i>
                                                                              </Link>
                                                                        </BlogBoxEntryContent>
                                                                  </BlogBoxContent>
                                                            </BlogBoxInnerBox>
                                                      </BlogBoxInnerContainer>
                                                ))}
                                          </TestimonialSlider>
                                    ) : null}
                              </Row>
                        </Container>
                  </BlogBoxContainer>
            </>
      );
};

export default BlogBox;
