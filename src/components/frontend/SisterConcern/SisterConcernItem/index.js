import React from "react";
import DOMPurify from "dompurify";
import {
      SisterConcernContainer,
      SisterWrapper,
} from "../../../../frontend/SisterConcern/styles";
import { Col, Row } from "react-bootstrap";
import {
      SisterConcernDesc,
      SisterConcernDetail,
      SisterConcernHeading,
      SisterConcernItemImage,
} from "./styles";
import CustomHeading from "../../../common/CommonHeading";

const SisterConcernItem = ({ item, index }) => {
      return (
            <>
                  <SisterConcernContainer
                        style={{
                              background: index % 2 === 0 ? "#FCFBFF" : "unset",
                        }}
                  >
                        <SisterWrapper>
                              <Row className="g-5">
                                    <Col
                                          lg={5}
                                          style={{
                                                order:
                                                      index % 2 === 0
                                                            ? "2"
                                                            : "unset",
                                          }}
                                    >
                                          <SisterConcernItemImage>
                                                <img
                                                      src={item?.image}
                                                      alt={item?.title}
                                                      className="img-fluid"
                                                />
                                          </SisterConcernItemImage>
                                    </Col>
                                    <Col lg={7}>
                                          <SisterConcernDetail>
                                                <SisterConcernHeading>
                                                      <CustomHeading
                                                            title={item?.title}
                                                            fontSize="23px"
                                                      />
                                                </SisterConcernHeading>
                                                <SisterConcernDesc>
                                                      <div
                                                            dangerouslySetInnerHTML={{
                                                                  __html: DOMPurify.sanitize(item?.description || ''),
                                                            }}
                                                      ></div>
                                                </SisterConcernDesc>
                                          </SisterConcernDetail>
                                    </Col>
                              </Row>
                        </SisterWrapper>
                  </SisterConcernContainer>
            </>
      );
};

export default SisterConcernItem;
