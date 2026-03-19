import React from "react";
import { Container, Row } from "react-bootstrap";
import { BreadcrumbContainer } from "./styles";
import { Link, useLocation } from "react-router-dom";
const BreadCrumBox = ({ title, link, linkTitle, children }) => {
      const location = useLocation();
      const isProductPath =
            location.pathname.startsWith("/product/");

      return (
            <>
                  <BreadcrumbContainer>
                        <Container>
                              <Row>
                                    <div className="col-lg-12">
                                          <div className="ltn__breadcrumb-inner">
                                                {!isProductPath && (
                                                      <h1 className="page-title text-center">
                                                            {title}
                                                      </h1>
                                                )}

                                                <div className="ltn__breadcrumb-list">
                                                      <ol
                                                            className={`breadcrumb ${
                                                                  isProductPath
                                                                        ? "justify-content-end"
                                                                        : "justify-content-center"
                                                            }`}
                                                      >
                                                            <li className="breadcrumb-item">
                                                                  <Link to="/">
                                                                        Home
                                                                  </Link>
                                                            </li>
                                                            {children &&
                                                                  children}
                                                            {linkTitle && (
                                                                  <li className="breadcrumb-item">
                                                                        <Link
                                                                              to={
                                                                                    link
                                                                              }
                                                                        >
                                                                              {
                                                                                    linkTitle
                                                                              }
                                                                        </Link>
                                                                  </li>
                                                            )}
                                                            <li
                                                                  className="breadcrumb-item active"
                                                                  aria-current="page"
                                                            >
                                                                  {title}
                                                            </li>
                                                      </ol>
                                                </div>
                                          </div>
                                    </div>
                              </Row>
                        </Container>
                  </BreadcrumbContainer>
            </>
      );
};

export default BreadCrumBox;
