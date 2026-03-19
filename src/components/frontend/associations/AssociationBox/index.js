import React from "react";
import { AssociationLogoContainer } from "./styles";
import AssociationItem from "../AssociationItem";
import { AssociationItemCard } from "../AssociationItem/styles";
import TitleSkeleton from "../../../skeleton/TitleSkeleton";

const AssociationBox = ({ associates, loading, length }) => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      const slicedArray = array.slice(0, length);

      return (
            <>
                  <AssociationLogoContainer>
                        {!loading ? (
                              associates?.map((item, index) => (
                                    <AssociationItem
                                          key={index}
                                          title={item.title}
                                          image={item.image}
                                          link={item.links}
                                    />
                              ))
                        ) : (
                              <>
                                    {slicedArray?.map((item, index) => (
                                          <AssociationItemCard key={index}>
                                                <TitleSkeleton
                                                      height="200px"
                                                      width="calc(100% - 20px)"
                                                      classes="m-2"
                                                />
                                          </AssociationItemCard>
                                    ))}
                              </>
                        )}
                  </AssociationLogoContainer>
            </>
      );
};

export default AssociationBox;
