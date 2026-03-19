import React, { memo, useContext } from "react";
import BreadCrumBox from "../../components/common/BreadCrumbBox";
import { ContactPageContainer, ContactPageWrapper } from "./styles";
import { Col, Container, Row } from "react-bootstrap";
import ContactHeading from "../../components/frontend/contacts/ContactHeading";

import ContactForm from "../../components/frontend/contacts/ContactForm";
import ContactInfo from "../../components/frontend/contacts/ContactInfo";
import ContactIframe from "../../components/frontend/contacts/ContactIframe";
import MetaContext from "../../stores/MetaContext";

const ContactPage = memo(() => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("contact-us");

      return (
            <>
                  <BreadCrumBox title={"Contact Us"} />
                  <ContactPageContainer>
                        <Container>
                              <Row className="mb-5">
                                    <Col lg={7}>
                                          <ContactPageWrapper>
                                                <ContactHeading
                                                      title={"Send a Message"}
                                                />
                                                <ContactForm />
                                          </ContactPageWrapper>
                                    </Col>
                                    <Col lg={5}>
                                          <ContactPageWrapper>
                                                <ContactHeading
                                                      title={
                                                            "Get in touch with us"
                                                      }
                                                />
                                                <ContactInfo />
                                          </ContactPageWrapper>
                                    </Col>
                              </Row>
                        </Container>
                        <ContactIframe />
                  </ContactPageContainer>
            </>
      );
});

export default ContactPage;
