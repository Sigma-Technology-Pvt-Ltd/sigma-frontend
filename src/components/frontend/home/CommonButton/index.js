import React from "react";
import { Link } from "react-router-dom";
import { CommonButtonContainer } from "./styles";
import { Button, Spinner } from "react-bootstrap";

const CommonButton = ({
      slug,
      title,
      background,
      color,
      loading,
      button,
      type,
}) => {
      return (
            <>
                  <CommonButtonContainer $background={background} $color={color}>
                        {button ? (
                              <Button
                                    type={type}
                                    className=" align-items-center justify-content-center gap-1"
                              >
                                    {title} {loading && <Spinner />}
                                    <span className="material-symbols-outlined">
                                          arrow_right_alt
                                    </span>
                              </Button>
                        ) : (
                              <Link
                                    to={slug}
                                    className=" align-items-center justify-content-center gap-1"
                              >
                                    {title} {loading && <Spinner />}
                                    <span className="material-symbols-outlined">
                                          arrow_right_alt
                                    </span>
                              </Link>
                        )}
                  </CommonButtonContainer>
            </>
      );
};

export default CommonButton;
