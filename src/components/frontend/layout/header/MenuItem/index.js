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
            <li key={index} className={`list-inline-item me-0 ${title === "Shop" ? "dropdown__container" : "position-relative"}`}>
                  <NavLink
                        to={slug}
                        className="d-flex align-items-center gap-1"
                        activeclassname="active"
                  >
                        {title}
                  </NavLink>
                  {category && (
                        <DropDownBox
                              category={category}
                              about={about}
                              categories={categories}
                              title={title}
                              loading={loading}
                        />
                  )}
            </li>
      );
};

export default MenuItem;
