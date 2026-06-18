import React from "react";
import { FooterBody, FooterContainer } from "./styles";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialMedia from "../../../components/common/SocialMedia";
import SocialMediaPopup from "../SocialMediaPopup";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <FooterContainer>
        <FooterBody fluid>
          <div className="footer__inner--wrap">
            <Container>
              <div className="footer__inner">
                <Row>
                  <Col lg={4}>
                    <div className="footer__block first">
                      <Link to="/" className="footer__logo">
                        <img
                          src="/images/png/logo/sigma-logo.jpeg"
                          alt="logo"
                        />
                      </Link>
                      <p className="footer__text">
                        When you give us confidence, we guarantee we will not
                        let you down. With Sigma technologies, let's experience
                        the best we have tried. Our success has an enthusiastic
                        contribution from you.
                      </p>
                      <SocialMedia />
                    </div>
                  </Col>
                  <Col lg={true}>
                    <div className="footer__block">
                      <h3 className="footer__title">Quick link</h3>
                      <ul className="footer__list list-inline">
                        <li className="footer__item">
                          <Link to="/about-us">About us</Link>
                        </li>
                        <li className="footer__item">
                          <Link to="/associations">Associates</Link>
                        </li>
                        <li className="footer__item">
                          <Link to="/products">Our Products</Link>
                        </li>
                        <li className="footer__item">
                          <Link to="/blogs">blog & news</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={true}>
                    <div className="footer__block">
                      <h3 className="footer__title">other links</h3>
                      <ul className="footer__list list-inline">
                        <li className="footer__item">
                          <Link to="/faqs">faqs</Link>
                        </li>
                        <li className="footer__item">
                          <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li className="footer__item">
                          <Link to="/terms-and-condition">
                            Terms & Condition
                          </Link>
                        </li>

                        <li className="footer__item">
                          <Link to="/contact-us">contact us</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="footer__block">
                      <h3 className="footer__title"> Contact Us</h3>
                      <ul className="footer__info footer__list list-inline">
                        <li className="footer__info--item footer__item">
                          <span className="material-symbols-outlined">
                            phone_in_talk
                          </span>
                          <div className="footer__info--composite">
                            <Link to="tel:+9779801113668" className="d-block">
                              +977 9801113668
                            </Link>
                            {/* <Link to="tel:+9779801913945" className="d-block">
                              +977 9801913945
                            </Link> */}
                          </div>
                        </li>
                        <li className="footer__info--item footer__item">
                          <span className="material-symbols-outlined ">
                            mail
                          </span>
                          <div className="footer__info--composite">
                            <Link
                              to="mailto:info@sigmatechnologies.com.np"
                              className="d-block"
                            >
                              info@sigmatechnologies.com.np
                            </Link>
                            {/* <Link
                              to="mailto:atulsigtia@sigmatechnologies.com.np"
                              className="d-block"
                            >
                              atulsigtia@sigmatechnologies.com.np
                            </Link> */}
                          </div>
                        </li>
                        <li className="footer__info--item footer__item align-items-center">
                          <span className="material-symbols-outlined">
                            location_on
                          </span>
                          <div>
                            <Link className="address d-block mb-2" to="#">
                              Sigma Technologies Pvt. Ltd, Aspen Marg,
                              Maitighar, St. Xavier College Rd
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <div className="responsive-footer footer__block">
                  <Tabs defaultActiveKey="Sigma Technologies" id="my-tabs">
                    <Tab
                      eventKey="Sigma Technologies"
                      title="Sigma Technologies"
                    >
                      <Link to="/" className="footer__logo">
                        <img
                          src="/images/png/logo/sigma.png"
                          width="100%"
                          height="100%"
                          alt="logo"
                        />
                      </Link>
                      <p className="footer__text">
                        When you give us confidence, we guarantee we will not
                        let you down. With Sigma technologies, let's experience
                        the best we have tried. Our success has an enthusiastic
                        contribution from you.
                      </p>
                      <SocialMedia />
                    </Tab>
                    <Tab eventKey="Quick link" title="Quick link">
                      <ul className="footer__list list-inline">
                        <li className="footer__item">
                          <Link to="/about-us">About us</Link>
                        </li>
                        <li className="footer__item">
                          <Link to="/associations">Associates</Link>
                        </li>
                        <li className="footer__item">
                          <Link to="/products">Our Products</Link>
                        </li>
                        <li className="footer__item">
                          <Link to="/blogs">blog & news</Link>
                        </li>
                      </ul>
                    </Tab>

                    <Tab eventKey="other links" title="other links">
                      <ul className="footer__list list-inline">
                        <li className="footer__item">
                          <Link to="/faqs">faqs</Link>
                        </li>
                        <li className="footer__item">
                          <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li className="footer__item">
                          <Link to="/terms-and-condition">
                            Terms & Condition
                          </Link>
                        </li>

                        <li className="footer__item">
                          <Link to="/contact-us">contact us</Link>
                        </li>
                      </ul>
                    </Tab>
                    <Tab eventKey="Contact us" title="Contact us">
                      <ul className="footer__info footer__list list-inline">
                        <li className="footer__info--item footer__item">
                          <span className="material-symbols-outlined">
                            phone_in_talk
                          </span>
                          <div className="footer__info--composite">
                            {/* <Link to="tel:+9779801913945" className="d-block">
                              +977 9801913945
                            </Link> */}
                            <Link to="tel:+9779801113668" className="d-block">
                              +977 9801113668
                            </Link>
                          </div>
                        </li>
                        <li className="footer__info--item footer__item">
                          <span className="material-symbols-outlined ">
                            mail
                          </span>
                          <div className="footer__info--composite">
                            <Link
                              to="mailto:info@sigmatechnologies.com.np"
                              className="d-block"
                            >
                              info@sigmatechnologies.com.np
                            </Link>
                            {/* <Link
                              to="mailto:atulsigtia@sigmatechnologies.com.np"
                              className="d-block"
                            >
                              atulsigtia@sigmatechnologies.com.np
                            </Link> */}
                          </div>
                        </li>
                        <li className="footer__info--item footer__item align-items-center">
                          <span className="material-symbols-outlined">
                            location_on
                          </span>
                          <div>
                            <Link className="address mb-2 d-block" to="#">
                              Sigma Technologies Pvt. Ltd, Aspen Marg,
                              Maitighar, St. Xavier College Rd
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Container>
            <div className="footer__bottom">
              <Container>
                <div className="bottom-list">
                  <div className="footer__copyright">
                    Copyright &copy;
                    {currentYear}{" "}
                    <Link to={"#"}>Sigma Technologies Pvt. Ltd.</Link>
                  </div>
                  <div className="footer__credit">
                    Powered by:
                    <Link to="https://infinityinfosys.com/" target="_blank">
                      Infinity Infosys
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </FooterBody>
      </FooterContainer>
      <SocialMediaPopup />
    </>
  );
};

export default Footer;
