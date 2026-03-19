import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ slug, title, cat, subCategory, children }) => {
      let linkUrl;

      if (cat?.link) {
            linkUrl = cat?.link;
      } else if (cat?.subCategory?.length === 0) {
            linkUrl = `/product-category/${slug}/products`;
      } else {
            linkUrl = `/product-category/${slug}`;
      }

      const handleExternalLinkClick = (e, url) => {
            e.preventDefault(); // Prevent default behavior of the <a> tag
            window.open(url, "_blank", "noopener,noreferrer"); // Open in a new tab
      };

      return (
            <>
                  {cat?.link ? (
                        <Link
                              href={linkUrl}
                              onClick={(e) =>
                                    handleExternalLinkClick(e, linkUrl)
                              }
                        >
                              {title}
                        </Link>
                  ) : (
                        <>
                              <Link
                                    to={linkUrl}
                                    className="d-flex align-items-start"
                                    style={{ gap: "5px" }}
                              >
                                    {subCategory && (
                                          <div>
                                                <i className="bx bx-chevron-right"></i>
                                          </div>
                                    )}
                                    {title}
                              </Link>
                              {children}
                        </>
                  )}
            </>
      );
};

export default MenuItem;
