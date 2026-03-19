import { Skeleton } from "@mui/material";
import React from "react";

const FaqSkeleton = () => {
      return (
            <>
                  <div>
                        <Skeleton
                              height="28px"
                              width="300px"
                              style={{
                                    transform: "scale(1)",
                                    marginBottom: "2rem",
                              }}
                              animation="wave"
                        />
                        <Skeleton
                              height="32px"
                              width="100%"
                              style={{
                                    transform: "scale(1)",
                                    marginBottom: "1rem",
                              }}
                              animation="wave"
                        />
                        <Skeleton
                              height="32px"
                              width="80%"
                              style={{
                                    transform: "scale(1)",
                                    marginBottom: "1rem",
                              }}
                              animation="wave"
                        />
                        <Skeleton
                              height="32px"
                              width="75%"
                              style={{
                                    transform: "scale(1)",
                                    marginBottom: "1rem",
                              }}
                              animation="wave"
                        />
                        <Skeleton
                              height="32px"
                              width="60%"
                              style={{
                                    transform: "scale(1)",
                                    marginBottom: "1rem",
                              }}
                              animation="wave"
                        />{" "}
                        <Skeleton
                              height="32px"
                              width="70%"
                              style={{
                                    transform: "scale(1)",
                                    marginBottom: "1rem",
                              }}
                              animation="wave"
                        />
                  </div>
            </>
      );
};

export default FaqSkeleton;
