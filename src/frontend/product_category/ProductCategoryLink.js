import React from "react";
import { Link } from "react-router-dom";

const ProductCategoryLink = ({ category, slug }) => {
      let linkUrl;

      if (category?.link) {
            linkUrl = category?.link;
      } else if (category?.subCategory?.length === 0) {
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
                  {category?.link ? (
                        <Link
                              className="w-100 text-center"
                              href={linkUrl}
                              onClick={(e) =>
                                    handleExternalLinkClick(e, linkUrl)
                              }
                        >
                              Show More
                        </Link>
                  ) : (
                        <Link className="w-100 text-center" to={linkUrl}>
                              Show More
                        </Link>
                  )}
            </>
      );
};

export default ProductCategoryLink;
