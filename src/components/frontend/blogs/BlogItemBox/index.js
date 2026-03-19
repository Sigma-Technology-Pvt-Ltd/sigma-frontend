import React from "react";
import {
      BlogBoxContent,
      BlogBoxEntryContent,
      BlogBoxEntryMeta,
      BlogBoxEntryTitle,
      BlogBoxHeader,
      BlogBoxImage,
      BlogBoxInnerBox,
      BlogBoxInnerContainer,
      BlogBoxMetaInner,
} from "../../../../frontend/Home/components/BlogBox/styles";
import { Link } from "react-router-dom";

const BlogItemBox = ({ blog }) => {
      return (
            <>
                  <BlogBoxInnerContainer>
                        <Link to={`/blogs/${blog.slug}`}>
                              <BlogBoxInnerBox>
                                    <BlogBoxImage>
                                          <img
                                                src={blog.image}
                                                alt="Blog"
                                                width={"400"}
                                                height={"210"}
                                          />
                                    </BlogBoxImage>
                                    <BlogBoxContent>
                                          <BlogBoxHeader>
                                                <BlogBoxEntryMeta>
                                                      <BlogBoxMetaInner className="mb-1 d-flex align-items-center gap-4">
                                                            <span className="posted-on ">
                                                                  <Link
                                                                        to={`/blogs/${blog.slug}`}
                                                                  >
                                                                        {
                                                                              blog.date
                                                                        }
                                                                  </Link>
                                                            </span>
                                                            {/* <span className="byline ">
                                 BY
                                 <span className="author vcard">
                                    <Link
                                       className=""
                                       to={`/blogs/${blog.slug}`}
                                    ></Link>
                                    ADMIN
                                 </span>
                              </span> */}
                                                      </BlogBoxMetaInner>
                                                </BlogBoxEntryMeta>
                                                <BlogBoxEntryTitle>
                                                      <Link
                                                            to={`/blogs/${blog.slug}`}
                                                      >
                                                            {blog.title}
                                                      </Link>
                                                </BlogBoxEntryTitle>
                                          </BlogBoxHeader>
                                          <BlogBoxEntryContent>
                                                <Link
                                                      to={`/blogs/${blog.slug}`}
                                                >
                                                      <span>READ MORE</span>
                                                      <i
                                                            className="fa fa-long-arrow-right"
                                                            aria-hidden="true"
                                                      ></i>
                                                </Link>
                                          </BlogBoxEntryContent>
                                    </BlogBoxContent>
                              </BlogBoxInnerBox>
                        </Link>
                  </BlogBoxInnerContainer>
            </>
      );
};

export default BlogItemBox;
