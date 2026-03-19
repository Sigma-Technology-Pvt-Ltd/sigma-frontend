import React, { useEffect, useState } from "react";
import {
      BannerContainer,
      BannerContent,
      BannerImage,
      BannerSection,
      BannerWrapper,
} from "./styles";
import { Col, Row } from "react-bootstrap";
import ShopButton from "../../../../components/frontend/home/ShopButton";
import axios from "axios";

const BannerBox = () => {
      const [loading, setLoading] = useState(false);
      const [banners, setBanners] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/banners`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setBanners(response.data.banners);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, []);

      return (
            <>
                  <BannerSection>
                        <BannerWrapper fluid>
                              <Row>
                                    {!loading
                                          ? banners?.map(
                                                  (item, index) =>
                                                        item?.type ===
                                                              "Left Banner Design" && (
                                                              <Col
                                                                    lg={6}
                                                                    key={index}
                                                              >
                                                                    <BannerContainer>
                                                                          <BannerContent>
                                                                                <h3>
                                                                                      {
                                                                                            item.title
                                                                                      }
                                                                                </h3>
                                                                                {item?.subtitle && (
                                                                                      <h3>
                                                                                            {
                                                                                                  item.subtitle
                                                                                            }
                                                                                      </h3>
                                                                                )}
                                                                                <ShopButton
                                                                                      slug={
                                                                                            item.link
                                                                                      }
                                                                                      marginTop="80px"
                                                                                />
                                                                          </BannerContent>
                                                                          <BannerImage>
                                                                                <img
                                                                                      src={
                                                                                            item.image
                                                                                      }
                                                                                      className="img-fluid"
                                                                                      alt={
                                                                                            item.title
                                                                                      }
                                                                                />
                                                                          </BannerImage>
                                                                    </BannerContainer>
                                                              </Col>
                                                        )
                                            )
                                          : null}
                                    <Col lg={6}>
                                          <Row className="g-4">
                                                {banners.map((item, index) => (
                                                      <>
                                                            {item?.type ===
                                                                  "Middle Banner Design" && (
                                                                  <Col
                                                                        lg={6}
                                                                        key={
                                                                              index
                                                                        }
                                                                  >
                                                                        <BannerContainer>
                                                                              <BannerContent>
                                                                                    {/* {item?.title && (
                                                                                          <h3>
                                                                                                {
                                                                                                      item.title
                                                                                                }
                                                                                          </h3>
                                                                                    )} */}
                                                                                    <ShopButton
                                                                                          slug={
                                                                                                item.link
                                                                                          }
                                                                                    />
                                                                              </BannerContent>
                                                                              <BannerImage>
                                                                                    <img
                                                                                          src={
                                                                                                item.image
                                                                                          }
                                                                                          className="img-fluid"
                                                                                          alt={
                                                                                                item.title
                                                                                          }
                                                                                    />
                                                                              </BannerImage>
                                                                        </BannerContainer>
                                                                  </Col>
                                                            )}
                                                      </>
                                                ))}
                                                {banners?.map((item, index) => (
                                                      <>
                                                            {item?.type ===
                                                                  "Bottom Banner Design" && (
                                                                  <Col
                                                                        lg={12}
                                                                        key={
                                                                              index
                                                                        }
                                                                  >
                                                                        <BannerContainer>
                                                                              <BannerContent leftValue="50px">
                                                                                    {/* {item?.title && (
                                                                                          <h3>
                                                                                                {
                                                                                                      item.title
                                                                                                }
                                                                                          </h3>
                                                                                    )}
                                                                                    {item?.tagProduct && (
                                                                                          <h3>
                                                                                                {
                                                                                                      item.subtitle
                                                                                                }
                                                                                          </h3>
                                                                                    )} */}
                                                                                    <ShopButton
                                                                                          slug={
                                                                                                item.link
                                                                                          }
                                                                                    />
                                                                              </BannerContent>
                                                                              <BannerImage height="250px">
                                                                                    <img
                                                                                          src={
                                                                                                item.image
                                                                                          }
                                                                                          className="img-fluid"
                                                                                          alt={
                                                                                                item.title
                                                                                          }
                                                                                    />
                                                                              </BannerImage>
                                                                        </BannerContainer>
                                                                  </Col>
                                                            )}
                                                      </>
                                                ))}
                                          </Row>
                                    </Col>
                              </Row>
                        </BannerWrapper>
                  </BannerSection>
            </>
      );
};

export default BannerBox;
