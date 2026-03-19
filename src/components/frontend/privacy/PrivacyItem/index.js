import React from "react";
import {
      PrivacyItemContainer,
      PrivacyItemContent,
      PrivacyItemTime,
      PrivacyItemTitle,
} from "./styles";
import TitleSkeleton from "../../../skeleton/TitleSkeleton";

const PrivacyItem = ({
      pages,
      loading,
      policyRef,
      termsRef,
      currentLocation,
}) => {
      return (
            <>
                  {!loading ? (
                        pages?.map((item, index) => (
                              <PrivacyItemContainer
                                    key={index}
                                    ref={
                                          item?.slug === "privacy-policy"
                                                ? policyRef
                                                : item?.slug ===
                                                  "terms-and-condition"
                                                ? termsRef
                                                : null
                                    }
                                    className={
                                          currentLocation === `/${item?.slug}`
                                                ? "sticky"
                                                : ""
                                    }
                              >
                                    <PrivacyItemContent>
                                          <PrivacyItemTitle>
                                                {item?.title}
                                          </PrivacyItemTitle>
                                          <PrivacyItemTime>
                                                <span>
                                                      Last updated: {item?.date}
                                                </span>
                                          </PrivacyItemTime>
                                          <p
                                                dangerouslySetInnerHTML={{
                                                      __html: item?.description,
                                                }}
                                          ></p>
                                    </PrivacyItemContent>
                              </PrivacyItemContainer>
                        ))
                  ) : (
                        // Skeleton loader when loading is true
                        <>
                              <PrivacyItemContainer id="2">
                                    <PrivacyItemTitle>
                                          <TitleSkeleton height="24px" />
                                    </PrivacyItemTitle>
                                    <PrivacyItemTime>
                                          <TitleSkeleton
                                                height="24px"
                                                width="30%"
                                                classes="mb-5"
                                          />
                                    </PrivacyItemTime>
                                    <PrivacyItemContent>
                                          <TitleSkeleton
                                                height="20px"
                                                classes="mb-3"
                                          />
                                          <TitleSkeleton
                                                height="20px"
                                                width="90%"
                                                classes="mb-3"
                                          />
                                          <TitleSkeleton
                                                height="20px"
                                                classes="mb-3"
                                                width="75%"
                                          />
                                          <TitleSkeleton
                                                height="20px"
                                                width="80%"
                                          />
                                    </PrivacyItemContent>
                              </PrivacyItemContainer>
                        </>
                  )}
            </>
      );
};

export default PrivacyItem;
