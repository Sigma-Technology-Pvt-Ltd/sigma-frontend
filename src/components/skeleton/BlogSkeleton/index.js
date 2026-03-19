import { Skeleton } from "@mui/material";
import React from "react";
import { BlogSkeletonContent, BlogSkeletonDate } from "./styles";

const BlogSkeleton = () => {
      return (
            <>
                  <Skeleton
                        variant="rectangular"
                        height={226}
                        animation="wave"
                  />
                  <BlogSkeletonContent>
                        <BlogSkeletonDate>
                              <div>
                                    <Skeleton height={30} width={100} />
                              </div>
                              <div>
                                    <Skeleton height={30} width={100} />
                              </div>
                        </BlogSkeletonDate>
                        <Skeleton variant="text" height={20} animation="wave" />
                        <Skeleton variant="text" height={20} animation="wave" />
                  </BlogSkeletonContent>
            </>
      );
};

export default BlogSkeleton;
