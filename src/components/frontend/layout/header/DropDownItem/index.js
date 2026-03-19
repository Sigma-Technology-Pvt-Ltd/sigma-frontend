import React from "react";
import { Link } from "react-router-dom";
import { DropDownListItem } from "../../../../../frontend/layouts/header/styles";
import { ExpandChevron } from "../../../../../icons";

const DropDownItem = ({ index, slug, title, children, about, cat }) => {
      let linkUrl;

      if (about) {
            linkUrl = slug;
      } else if (cat?.link) {
            linkUrl = cat?.link;
      } else {
            linkUrl = `/product-category/${slug}`;
      }

      const handleExternalLinkClick = (e, url) => {
            e.preventDefault(); // Prevent default behavior of the <a> tag
            window.open(url, "_blank", "noopener,noreferrer"); // Open in a new tab
      };

      return (
            <>
                  <DropDownListItem key={index}>
                        {cat?.link ? (
                              <Link
                                    href={linkUrl}
                                    onClick={(e) =>
                                          handleExternalLinkClick(e, linkUrl)
                                    }
                              >
                                    {title}
                                    {cat?.subCategory?.length > 0 && (
                                          <ExpandChevron />
                                    )}
                              </Link>
                        ) : (
                              <Link
                                    to={linkUrl}
                                    className="d-flex  justify-content-between align-items-center"
                              >
                                    {title}
                                    {cat?.subCategory?.length > 0 && (
                                          <ExpandChevron />
                                    )}
                              </Link>
                        )}

                        {children && children}
                  </DropDownListItem>
            </>
      );
};

export default DropDownItem;
