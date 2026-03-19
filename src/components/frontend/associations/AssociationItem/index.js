import React from "react";
import { AssociationItemCard } from "./styles";
import { Link } from "react-router-dom";

const AssociationItem = ({ link, image, title }) => {
      return (
            <>
                  <AssociationItemCard>
                        <Link to={link}>
                              <img
                                    className="associations__image"
                                    src={image}
                                    alt={title}
                              />
                        </Link>
                  </AssociationItemCard>
            </>
      );
};

export default AssociationItem;
