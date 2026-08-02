import React, { useEffect, useState } from "react";
import {
      HeaderContent,
      NavigationAdditional,
      NavigationContainer,
      NavigationIcon,
      NavigationInfo,
      NavigationLogo,
      NavigationMenu,
      NavigationWrapper,
} from "../../styles";
import { Link } from "react-router-dom";
import MenuItem from "../../../../../components/frontend/layout/header/MenuItem";
import {
      aboutCategory,
      productCategory,
} from "../../../../../data/menuCategoryList";
import MobileMenu from "./components/MobileMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { getBackendUrl } from "../../../../../utils/getBackendUrl";

const navLink = [
      {
            id: 1,
            title: "Home",
            slug: "/",
      },
      {
            id: 2,
            title: "About",
            slug: "/about-us",
            category: aboutCategory,
      },
      {
            id: 3,
            title: "Shop",
            slug: "/products",
            children: "true",
            category: productCategory,
      },
      {
            id: 5,
            title: "Blogs",
            slug: "/blogs",
      },
      {
            id: 4,
            title: "Contact",
            slug: "contact-us",
      },
];

const Navigation = ({ isSticky }) => {
      const [loading, setLoading] = useState(false);
      const [categories, setCategories] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${getBackendUrl()}/api/categories/navigation/lists`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        },
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setCategories(response.data.categories);
                        }
                  })
                  .catch((error) => {
                        toast.error(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, []);

      return (
            <>
                  <NavigationContainer
                        className={`d-flex align-items-center justify-content-between ${
                              isSticky ? "sticky" : ""
                        }`}
                  >
                        <NavigationLogo>
                              <Link to={"/"}>
                                    <img
                                          src="/images/png/logo/sigma-logo.jpeg"
                                          alt="sigma logo"
                                    />
                              </Link>
                        </NavigationLogo>
                        <HeaderContent>
                              <nav>
                                    <NavigationMenu className="list-inline mb-0">
                                          {navLink?.map((item, index) => (
                                                <MenuItem
                                                      key={item.id || index}
                                                      title={item.title}
                                                      slug={item.slug}
                                                      category={item.category}
                                                      categories={categories}
                                                      index={index}
                                                      about={
                                                            item.title ===
                                                            "About"
                                                                  ? true
                                                                  : false
                                                      }
                                                      loading={loading}
                                                />
                                          ))}
                                    </NavigationMenu>
                              </nav>
                              <NavigationAdditional>
                                    <NavigationWrapper>
                                          <NavigationIcon>
                                                <img
                                                      src={
                                                            "/images/png/logo/headphones.png"
                                                      }
                                                />
                                          </NavigationIcon>
                                          <NavigationInfo>
                                                <span>Have Any Questions?</span>
                                                <a
                                                      href="tel:+9779801113668"
                                                      className="mb-0"
                                                >
                                                      (+977) 9801113668
                                                </a>
                                          </NavigationInfo>
                                    </NavigationWrapper>
                              </NavigationAdditional>
                        </HeaderContent>

                        <MobileMenu
                              categories={navLink}
                              categoryList={categories}
                        />
                  </NavigationContainer>
            </>
      );
};

export default Navigation;
