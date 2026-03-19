import React from "react";
import { NavLink } from "react-router-dom";
import DropDownBox from "../DropDownBox";

const MenuItem = ({
  title,
  slug,
  category,
  index,
  about,
  categories,
  loading,
}) => {
  return (
    <>
      <li key={index} className="list-inline-item me-0">
        <NavLink
          to={slug}
          className={`d-flex align-items-center gap-1 ${
            title === "Shop" ? "dropdown__container" : "position-relative"
          }`}
          activeclassname="active"
        >
          {title}
          {category && (
            <DropDownBox
              category={category}
              about={about}
              categories={categories}
              title={title}
              loading={loading}
            />
          )}
        </NavLink>
      </li>
    </>
  );
};

export default MenuItem;
