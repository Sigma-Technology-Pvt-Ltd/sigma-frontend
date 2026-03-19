import React from "react";
import { CustomHeadingContainer } from "./styles";
import TitleSkeleton from "../../skeleton/TitleSkeleton";

const CustomHeading = ({ title, fontSize, loading, height, width }) => {
      return (
            <>
                  <CustomHeadingContainer fontSize={fontSize}>
                        {!loading ? (
                              <h3
                                    className="title"
                                    style={{ fontSize: fontSize }}
                              >
                                    {title}
                              </h3>
                        ) : (
                              <h3>
                                    <TitleSkeleton
                                          height={height}
                                          width={width}
                                    />
                              </h3>
                        )}
                  </CustomHeadingContainer>
            </>
      );
};

export default CustomHeading;
