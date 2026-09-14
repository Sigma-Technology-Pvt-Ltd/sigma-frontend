import React, { useEffect, useState } from "react";
import {
      AboutBoxContainer,
      AboutBoxContent,
      AboutBoxDesc,
      AboutBoxImage,
} from "./styles";
import { Col, Container, Row } from "react-bootstrap";
import CommonHeading from "../../../../components/frontend/home/CommonHeading";
import CommonButton from "../../../../components/frontend/home/CommonButton";
import axios from "axios";
import { getBackendUrl } from "../../../../utils/getBackendUrl";

const AboutBox = ({ button }) => {
      const [aboutImage, setAboutImage] = useState("images/img/about/about.png");

      useEffect(() => {
            let isMounted = true;
            axios.get(`${getBackendUrl()}/api/banners/about`, {
                  headers: {
                        apikey: process.env.REACT_APP_API_KEY,
                  },
            })
            .then((res) => {
                  if (isMounted && res.data?.result === "success" && res.data?.banner?.image) {
                        setAboutImage(res.data.banner.image);
                  }
            })
            .catch(() => {
                  // Fallback safely to static original graphic
            });

            return () => {
                  isMounted = false;
            };
      }, []);

      return (
            <>
                  <AboutBoxContainer>
                        <Container>
                              <Row className="g-5 align-items-center">
                                    <Col lg={6}>
                                          <AboutBoxImage>
                                                <img
                                                      src={aboutImage}
                                                      alt="About Sigma Technologies"
                                                      className="img-fluid"
                                                      onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = "images/img/about/about.png";
                                                      }}
                                                />
                                          </AboutBoxImage>
                                    </Col>
                                    <Col lg={6}>
                                          <AboutBoxContent>
                                                <CommonHeading
                                                      subTitle={"about us"}
                                                      title={
                                                            " We are Sigma Technologies Pvt. Ltd"
                                                      }
                                                      width={"80%"}
                                                />
                                                <AboutBoxDesc className="mt-3 mb-4">
                                                      Retooled with the view of
                                                      giant technology, this
                                                      company assures all things
                                                      necessary to uplift and
                                                      empower the lives of
                                                      people in Nepal, both
                                                      residential and
                                                      commercial. Passionate in
                                                      assisting our clients with
                                                      solutions, Sigma
                                                      Technologies exhaustively
                                                      supports in the following
                                                      areas: Water filtration,
                                                      hot water systems, water
                                                      pumps, glass bottling
                                                      plant, fireplaces,
                                                      swimming pool solutions,
                                                      multi-level car parking
                                                      systems, and many more
                                                      technical advances of
                                                      today.
                                                </AboutBoxDesc>
                                                {button && (
                                                      <CommonButton
                                                            slug={"about-us"}
                                                            title={"Read More"}
                                                      />
                                                )}
                                          </AboutBoxContent>
                                    </Col>
                              </Row>
                        </Container>
                  </AboutBoxContainer>
            </>
      );
};

export default AboutBox;
