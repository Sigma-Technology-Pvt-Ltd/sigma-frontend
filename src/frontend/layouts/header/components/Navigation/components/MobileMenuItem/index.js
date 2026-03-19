import React, { useEffect, useRef } from "react";
import Mmenu from "mmenu-js";
import "mmenu-js/dist/mmenu.css";
import { Link } from "react-router-dom";

const MobileMenuItem = ({ categories, setShow, categoryList }) => {
      const menuRef = useRef(null);
      useEffect(() => {
            if (!menuRef.current) {
                  menuRef.current = new Mmenu("#menu", {
                        offCanvas: {
                              use: false,
                        },
                        counters: {
                              add: true,
                        },
                        setSelected: {
                              hover: true,
                        },
                        navbars: [
                              {
                                    position: "top",
                                    use: false,
                                    content: ["searchfield"],
                              },
                        ],
                  });
            }
      }, []);

      const checkCategory = (category) => {
            if (category?.title === "Shop") {
                  return categoryList;
            } else {
                  return category?.category;
            }
      };

      const handleExternalLinkClick = (e, url) => {
            e.preventDefault(); // Prevent default behavior of the <a> tag
            window.open(url, "_blank", "noopener,noreferrer"); // Open in a new tab
      };

      return (
            <>
                  <nav id="menu">
                        <ul>
                              {categories.map((cat, index) =>
                                    cat.category?.length > 0 ? (
                                          <li>
                                                {cat?.title === "About" ? (
                                                      <span>{cat.title}</span>
                                                ) : (
                                                      <Link
                                                            to={cat.slug}
                                                            onClick={() =>
                                                                  setShow()
                                                            }
                                                      >
                                                            {cat.title}
                                                      </Link>
                                                )}
                                                <ul>
                                                      {checkCategory(cat)?.map(
                                                            (sub, index) => (
                                                                  <li
                                                                        key={
                                                                              index
                                                                        }
                                                                  >
                                                                        <Link
                                                                              to={
                                                                                    cat?.title ===
                                                                                    "About"
                                                                                          ? sub.slug
                                                                                          : sub?.link
                                                                                          ? sub?.link
                                                                                          : sub
                                                                                                  ?.subCategory
                                                                                                  ?.length ===
                                                                                            0
                                                                                          ? `/product-category/${sub.slug}/products`
                                                                                          : `/product-category/${sub.slug}`
                                                                              }
                                                                              target={
                                                                                    sub?.link
                                                                                          ? "_blank"
                                                                                          : ""
                                                                              }
                                                                              onClick={(
                                                                                    e
                                                                              ) =>
                                                                                    sub?.link
                                                                                          ? handleExternalLinkClick(
                                                                                                  e,
                                                                                                  sub?.link
                                                                                            )
                                                                                          : setShow()
                                                                              }
                                                                        >
                                                                              {
                                                                                    sub.title
                                                                              }
                                                                        </Link>
                                                                        {sub
                                                                              .subCategory
                                                                              ?.length >
                                                                              0 && (
                                                                              <ul>
                                                                                    {sub?.subCategory?.map(
                                                                                          (
                                                                                                item,
                                                                                                key
                                                                                          ) => (
                                                                                                <li
                                                                                                      key={
                                                                                                            key
                                                                                                      }
                                                                                                >
                                                                                                      <Link
                                                                                                            to={
                                                                                                                  item
                                                                                                                        ?.subCategory
                                                                                                                        ?.length ===
                                                                                                                  0
                                                                                                                        ? `/product-category/${item.slug}/products`
                                                                                                                        : `/product-category/${item.slug}`
                                                                                                            }
                                                                                                            onClick={(
                                                                                                                  e
                                                                                                            ) =>
                                                                                                                  sub?.link
                                                                                                                        ? handleExternalLinkClick(
                                                                                                                                e,
                                                                                                                                item?.link
                                                                                                                          )
                                                                                                                        : setShow()
                                                                                                            }
                                                                                                      >
                                                                                                            {
                                                                                                                  item.title
                                                                                                            }
                                                                                                      </Link>
                                                                                                </li>
                                                                                          )
                                                                                    )}
                                                                              </ul>
                                                                        )}
                                                                  </li>
                                                            )
                                                      )}
                                                </ul>
                                          </li>
                                    ) : (
                                          <li key={index}>
                                                <Link
                                                      to={cat.slug}
                                                      onClick={() => setShow()}
                                                >
                                                      {cat.title}
                                                </Link>
                                          </li>
                                    )
                              )}
                        </ul>
                  </nav>
            </>
      );
};

export default MobileMenuItem;
