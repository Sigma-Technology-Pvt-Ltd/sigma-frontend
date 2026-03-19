import React from "react";
import {
      AboutBoxContainer,
      AboutBoxContent,
      AboutBoxDesc,
      AboutBoxImage,
      AboutBoxWrapper,
} from "./styles";
import { Col, Container, Row } from "react-bootstrap";
import CommonHeading from "../../../../components/frontend/home/CommonHeading";
import CommonButton from "../../../../components/frontend/home/CommonButton";

export const information = [
      {
            id: 1,
            title: "Experience",
            desc: "Our great team of more than 140 software experts.",
            image: "images/img/about/diploma.png",
      },
      {
            id: 2,
            title: "Quick Support",
            desc: "We’ll help you test bold new ideas while sharing your.",
            image: "/images/img/about/wrench.png",
      },
];

const AboutBox = ({ button }) => {
      return (
            <>
                  <AboutBoxContainer>
                        <Container>
                              <Row className="g-5">
                                    <Col lg={6}>
                                          <AboutBoxImage>
                                                <img
                                                      src="images/img/about/about.png"
                                                      className="img-fluid"
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
                                                {/* <AboutBoxWrapper className=""></AboutBoxWrapper>
                                                <AboutBoxDesc className="mt-3 mb-4">
                                                      Our showroom is located at
                                                      Aspen Marg, Maitighar, St.
                                                      Xavier College Rd,
                                                      Kathmandu, Nepal, with all
                                                      the products displayed and
                                                      brief description of the
                                                      items.
                                                </AboutBoxDesc> */}
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
