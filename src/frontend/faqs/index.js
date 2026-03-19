import React, { useContext } from "react";
import BreadCrumBox from "../../components/common/BreadCrumbBox";
import { FaqAccordionContainer, FaqContainer } from "./styles";
import { Col, Container, Row } from "react-bootstrap";
import FaqAccordion from "../../components/frontend/faqs/FaqAccordion";
import MetaContext from "../../stores/MetaContext";

const FaqPage = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("faqs");

      return (
            <>
                  <BreadCrumBox title={"Faqs"} />
                  <FaqContainer>
                        <Container>
                              <Row>
                                    <Col lg={9}>
                                          <FaqAccordionContainer>
                                                <FaqAccordion />
                                          </FaqAccordionContainer>
                                    </Col>{" "}
                                    <Col lg={3}>
                                          <img src={"images/svg/faqs.svg"} />
                                    </Col>
                              </Row>
                        </Container>
                  </FaqContainer>
            </>
      );
};

export default FaqPage;
