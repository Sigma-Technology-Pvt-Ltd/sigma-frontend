import React from "react";
import { CommonHeadingContainer } from "./styles";

const CommonHeading = ({ subTitle, title, width, align }) => {
  return (
    <>
      <CommonHeadingContainer $width={width} $align={align}>
        <h5>{subTitle}</h5>
        <h2>{title}</h2>
      </CommonHeadingContainer>
    </>
  );
};

export default CommonHeading;
