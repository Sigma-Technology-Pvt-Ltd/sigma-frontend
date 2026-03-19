import React, { useContext, useEffect, useState } from "react";
import BreadCrumBox from "../../components/common/BreadCrumbBox";
import { SisterConcernContainer, SisterWrapper } from "./styles";
import SisterConcernItem from "../../components/frontend/SisterConcern/SisterConcernItem";
import axios from "axios";
import toast from "react-hot-toast";
import { Col, Row } from "react-bootstrap";
import {
      SisterConcernDesc,
      SisterConcernDetail,
      SisterConcernHeading,
      SisterConcernItemImage,
} from "../../components/frontend/SisterConcern/SisterConcernItem/styles";
import TitleSkeleton from "../../components/skeleton/TitleSkeleton";
import CustomHeading from "../../components/common/CommonHeading";
import MetaContext from "../../stores/MetaContext";

const SisterConcern = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("sister-concern");

      const [concerns, setConcerns] = useState([]);
      const [loading, setLoading] = useState(true);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/sister-concern`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setConcerns(response.data.concerns);
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

      return (
            <>
                  <BreadCrumBox title={"Sister Concern"} />
                  <SisterConcernContainer>
                        {!loading ? (
                              concerns?.map((item, index) => (
                                    <SisterConcernItem
                                          item={item}
                                          key={index}
                                          index={index}
                                    />
                              ))
                        ) : (
                              <>
                                    <SisterConcernContainer>
                                          <SisterWrapper>
                                                <Row className="g-5">
                                                      <Col lg={7}>
                                                            <SisterConcernDetail>
                                                                  <SisterConcernHeading>
                                                                        <CustomHeading
                                                                              loading={
                                                                                    loading
                                                                              }
                                                                              height="24px"
                                                                              width="220px"
                                                                        />
                                                                  </SisterConcernHeading>
                                                                  <SisterConcernDesc>
                                                                        <TitleSkeleton
                                                                              height="18px"
                                                                              classes="mb-2"
                                                                        />
                                                                        <TitleSkeleton
                                                                              height="18px"
                                                                              classes="mb-2"
                                                                              width="80%"
                                                                        />
                                                                        <TitleSkeleton
                                                                              height="18px"
                                                                              classes="mb-2"
                                                                              width="60%"
                                                                        />
                                                                        <TitleSkeleton
                                                                              height="18px"
                                                                              classes="mb-2"
                                                                              width="50%"
                                                                        />
                                                                  </SisterConcernDesc>
                                                            </SisterConcernDetail>
                                                      </Col>
                                                      <Col lg={5}>
                                                            <SisterConcernItemImage>
                                                                  <TitleSkeleton height="360px" />
                                                            </SisterConcernItemImage>
                                                      </Col>
                                                </Row>
                                          </SisterWrapper>
                                    </SisterConcernContainer>
                              </>
                        )}
                  </SisterConcernContainer>
            </>
      );
};

export default SisterConcern;
