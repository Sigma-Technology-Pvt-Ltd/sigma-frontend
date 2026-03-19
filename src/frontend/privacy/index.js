import React, { useContext, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PrivacyNavbar from "../../components/frontend/privacy/PrivacyNavbar";
import PrivacyItem from "../../components/frontend/privacy/PrivacyItem";
import BreadCrumBox from "../../components/common/BreadCrumbBox";
import { CommonContainer } from "../../styles/components/common/CommonStyle";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import MetaContext from "../../stores/MetaContext";

const navigations = [
      {
            id: 1,
            title: "Privacy Policy",
            link: "/privacy-policy",
      },
      {
            id: 2,
            title: "Terms & Condition",
            link: "/terms-and-condition",
      },
];

const PrivacyPage = () => {
      const [pages, setPages] = useState([]);
      const [loading, setLoading] = useState(false);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/pages`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setPages(response.data.pages);
                        }
                  })
                  .catch((error) => {
                        toast.error(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, []);

      const location = useLocation();
      const currentLocation = location.pathname;

      const termsRef = useRef(null);
      const policyRef = useRef(null);

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug(
            location.pathname === "/terms-and-condition"
                  ? "terms-and-condition"
                  : "privacy-policy"
      );

      useEffect(() => {
            if (
                  location.pathname === "/terms-and-condition" &&
                  termsRef.current
            ) {
                  termsRef.current.scrollIntoView({ behavior: "smooth" });
            } else if (
                  location.pathname === "/privacy-policy" &&
                  policyRef.current
            ) {
                  policyRef.current.scrollIntoView({ behavior: "smooth" });
            }
      }, [currentLocation]);

      return (
            <>
                  <BreadCrumBox
                        title={
                              navigations?.find(
                                    (item) => item.link === currentLocation
                              )?.title
                        }
                  />
                  <CommonContainer>
                        <Container>
                              <Row className="g-0">
                                    <Col lg={2}>
                                          <PrivacyNavbar
                                                navigations={navigations}
                                          />
                                    </Col>
                                    <Col lg={10}>
                                          <PrivacyItem
                                                loading={loading}
                                                pages={pages}
                                                termsRef={termsRef}
                                                policyRef={policyRef}
                                                currentLocation={
                                                      currentLocation
                                                }
                                          />
                                    </Col>
                              </Row>
                        </Container>
                  </CommonContainer>
            </>
      );
};

export default PrivacyPage;
