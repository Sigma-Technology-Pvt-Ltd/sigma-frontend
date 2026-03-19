import React from "react";
import {
  CategoryItemContainer,
  CategoryItemContent,
  CategoryItemIcon,
} from "./styles";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  let linkUrl;

  if (category?.link) {
    linkUrl = category?.link;
  } else if (category?.subCategory?.length === 0) {
    linkUrl = `/product-category/${category?.slug}/products`;
  } else {
    linkUrl = `/product-category/${category?.slug}`;
  }

  const handleExternalLinkClick = (e, url) => {
    e.preventDefault(); // Prevent default behavior of the <a> tag
    window.open(url, "_blank", "noopener,noreferrer"); // Open in a new tab
  };
  return (
    <>
      {category?.link ? (
        <CategoryItemContainer
          href={linkUrl}
          onClick={(e) => handleExternalLinkClick(e, linkUrl)}
        >
          <CategoryItemIcon
            dangerouslySetInnerHTML={{
              __html: category?.icon,
            }}
          />
          <CategoryItemContent>
            <Link
              href={linkUrl}
              onClick={(e) => handleExternalLinkClick(e, linkUrl)}
              className="text-center pb-4"
            >
              <h5>{category?.subtitle || category?.title}</h5>
            </Link>
          </CategoryItemContent>
        </CategoryItemContainer>
      ) : (
        <CategoryItemContainer to={linkUrl}>
          <CategoryItemIcon
            dangerouslySetInnerHTML={{
              __html: category?.icon,
            }}
          />
          <CategoryItemContent>
            <Link to={linkUrl} className="text-center pb-4">
              <h5>{category?.subtitle || category?.title}</h5>
            </Link>
          </CategoryItemContent>
        </CategoryItemContainer>
      )}
    </>
  );
};

export default CategoryItem;
