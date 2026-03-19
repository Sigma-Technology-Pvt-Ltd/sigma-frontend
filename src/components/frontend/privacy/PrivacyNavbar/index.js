import React from "react";
import { PrivacyNavItem, PrivacyNavWrapper } from "./styles";
import { NavLink, useLocation } from "react-router-dom";

import useSmoothScroll from "../../../../hooks/SmoothScroll";

const PrivacyNavbar = ({ navigations }) => {
      const location = useLocation();
      const currentLocation = location.pathname;
      useSmoothScroll("C4");

      return (
            <>
                  <PrivacyNavWrapper>
                        {navigations?.map((nav, index) => (
                              <PrivacyNavItem key={index}>
                                    {currentLocation === nav.link ? (
                                          <NavLink
                                                to={`${nav.link}`}
                                                className="active"
                                          >
                                                <span>{nav.title}</span>
                                          </NavLink>
                                    ) : (
                                          <NavLink to={`${nav.link}`}>
                                                {nav.title}
                                          </NavLink>
                                    )}
                              </PrivacyNavItem>
                        ))}
                  </PrivacyNavWrapper>
            </>
      );
};

export default PrivacyNavbar;
