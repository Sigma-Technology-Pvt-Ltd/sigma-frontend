import React, { useEffect, useState } from "react";
import {
      BannerContainer,
      BannerContent,
      BannerImage,
      BannerSection,
      BannerWrapper,
      RightBannerCol,
} from "./styles";
import { Col, Row } from "react-bootstrap";
import ShopButton from "../../../../components/frontend/home/ShopButton";
import axios from "axios";
import { getBackendUrl } from "../../../../utils/getBackendUrl";

const BannerBox = () => {
      const [loading, setLoading] = useState(false);
      const [banners, setBanners] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${getBackendUrl()}/api/banners`, {
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

      const leftBanner = banners?.find((item) => item?.type === "Left Banner Design");
      const middleBanners = banners?.filter((item) => item?.type === "Middle Banner Design") || [];
      const bottomBanner = banners?.find((item) => item?.type === "Bottom Banner Design");

      return (
            <BannerSection>
                  <BannerWrapper fluid>
                        {!loading && (
                              <Row className="g-4 align-items-start">
                                    {/* 1. Left Large Promotional Banner */}
                                    {leftBanner && (
                                          <Col lg={6} key={leftBanner.id || "left-banner"}>
                                                <BannerContainer>
                                                      <BannerContent>
                                                            {leftBanner.title && leftBanner.title !== '..' && leftBanner.title !== '.' && (
                                                                  <h3>{leftBanner.title}</h3>
                                                            )}
                                                            {leftBanner?.subtitle && (
                                                                  <h3>{leftBanner.subtitle}</h3>
                                                            )}
                                                            <ShopButton
                                                                  slug={leftBanner.link}
                                                                  text={leftBanner.subtitle}
                                                            />
                                                      </BannerContent>
                                                      <BannerImage>
                                                            <img
                                                                  src={leftBanner.image}
                                                                  className="img-fluid"
                                                                  alt={leftBanner.title || "Banner"}
                                                                  onError={(e) => {
                                                                        const fname = (leftBanner.image || '').split('/').pop();
                                                                        if (fname && !e.target.src.includes('sigmatechnologies.com.np')) {
                                                                              e.target.src = `https://sigmatechnologies.com.np/images/banners/${fname}`;
                                                                        }
                                                                  }}
                                                            />
                                                      </BannerImage>
                                                </BannerContainer>
                                          </Col>
                                    )}

                                    {/* 2. Right Side: 2 Top Squares + 1 Bottom Wide Banner */}
                                    {(middleBanners.length > 0 || bottomBanner) && (
                                          <RightBannerCol lg={6}>
                                                {middleBanners.length > 0 && (
                                                      <Row className="g-4 middle-row">
                                                            {middleBanners.map((item, index) => (
                                                                  <Col xs={12} sm={6} key={item.id || `middle-${index}`}>
                                                                        <BannerContainer>
                                                                              <BannerContent>
                                                                                    <ShopButton
                                                                                          slug={item.link}
                                                                                          text={item.subtitle}
                                                                                    />
                                                                              </BannerContent>
                                                                              <BannerImage>
                                                                                    <img
                                                                                          src={item.image}
                                                                                          className="img-fluid"
                                                                                          alt={item.title || "Banner"}
                                                                                          onError={(e) => {
                                                                                                const fname = (item.image || '').split('/').pop();
                                                                                                if (fname && !e.target.src.includes('sigmatechnologies.com.np')) {
                                                                                                      e.target.src = `https://sigmatechnologies.com.np/images/banners/${fname}`;
                                                                                                }
                                                                                          }}
                                                                                    />
                                                                              </BannerImage>
                                                                        </BannerContainer>
                                                                  </Col>
                                                            ))}
                                                      </Row>
                                                )}

                                                {bottomBanner && (
                                                      <BannerContainer>
                                                            <BannerContent leftValue="50px">
                                                                  <ShopButton
                                                                        slug={bottomBanner.link}
                                                                        text={bottomBanner.subtitle}
                                                                  />
                                                            </BannerContent>
                                                            <BannerImage>
                                                                  <img
                                                                        src={bottomBanner.image}
                                                                        className="img-fluid"
                                                                        alt={bottomBanner.title || "Banner"}
                                                                        onError={(e) => {
                                                                              const fname = (bottomBanner.image || '').split('/').pop();
                                                                              if (fname && !e.target.src.includes('sigmatechnologies.com.np')) {
                                                                                    e.target.src = `https://sigmatechnologies.com.np/images/banners/${fname}`;
                                                                              }
                                                                        }}
                                                                  />
                                                            </BannerImage>
                                                      </BannerContainer>
                                                )}
                                          </RightBannerCol>
                                    )}
                              </Row>
                        )}
                  </BannerWrapper>
            </BannerSection>
      );
};

export default BannerBox;
