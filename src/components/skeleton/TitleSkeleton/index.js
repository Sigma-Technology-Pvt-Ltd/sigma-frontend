import { Skeleton } from "@mui/material";
import React from "react";

const TitleSkeleton = ({ height, width, classes }) => {
      return (
            <>
                  <Skeleton
                        animation="wave"
                        variant="text"
                        height={height ? height : 12}
                        width={width}
                        style={{ transform: "scale(1)" }}
                        className={classes}
                  />
            </>
      );
};

export default TitleSkeleton;
