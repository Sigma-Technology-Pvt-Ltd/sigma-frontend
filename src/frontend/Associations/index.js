import React, { useContext, useEffect, useState } from "react";
import BreadCrumBox from "../../components/common/BreadCrumbBox";
import {
      AssociationContainer,
      AssociationHeadingDesc,
      DistributorSection,
} from "./styles";
import { Container } from "react-bootstrap";
import CustomHeading from "../../components/common/CommonHeading";
import AssociationBox from "../../components/frontend/associations/AssociationBox";
import axios from "axios";
import toast from "react-hot-toast";
import TitleSkeleton from "../../components/skeleton/TitleSkeleton";
import MetaContext from "../../stores/MetaContext";

const Associations = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("associations");

      const [loading, setLoading] = useState(true);
      const [associations, setAssociations] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/associates`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setAssociations(response.data.associates);
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
                  <BreadCrumBox title={"Associations"} />
                  <AssociationContainer>
                        {!loading ? (
                              associations?.map((item, index) => (
                                    <DistributorSection
                                          backgroundColor={
                                                index === 0 ? "#fcfbff" : ""
                                          }
                                    >
                                          <Container>
                                                <CustomHeading
                                                      title={item?.title}
                                                />
                                                {item?.description ? (
                                                      <AssociationHeadingDesc
                                                            className={`${
                                                                  item?.description
                                                                        ? "mb-5"
                                                                        : ""
                                                            }`}
                                                      >
                                                            <span
                                                                  dangerouslySetInnerHTML={{
                                                                        __html: item?.description,
                                                                  }}
                                                            ></span>
                                                      </AssociationHeadingDesc>
                                                ) : (
                                                      <br />
                                                )}
                                                <AssociationBox
                                                      associates={item?.items}
                                                />
                                          </Container>
                                    </DistributorSection>
                              ))
                        ) : (
                              <>
                                    <DistributorSection>
                                          <Container>
                                                <CustomHeading
                                                      loading={loading}
                                                      height="24px"
                                                      width="240px"
                                                />
                                                <AssociationHeadingDesc>
                                                      <TitleSkeleton
                                                            height="20px"
                                                            classes="mb-2"
                                                      />
                                                      <TitleSkeleton
                                                            height="20px"
                                                            width="200px"
                                                      />
                                                </AssociationHeadingDesc>
                                                <AssociationBox
                                                      loading={loading}
                                                      length={12}
                                                />
                                          </Container>
                                    </DistributorSection>
                                    <DistributorSection>
                                          <Container>
                                                <CustomHeading
                                                      loading={loading}
                                                      height="24px"
                                                      width="240px"
                                                />
                                                <br />
                                                <AssociationBox
                                                      loading={loading}
                                                      length={6}
                                                />
                                          </Container>
                                    </DistributorSection>
                              </>
                        )}
                  </AssociationContainer>
            </>
      );
};

export default Associations;
