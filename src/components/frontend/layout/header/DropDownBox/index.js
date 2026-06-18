import React from "react";
import {
      DropDownContainer,
      DropDownList,
      DropDownSubContainer,
} from "../../../../../frontend/layouts/header/styles";
import DropDownItem from "../DropDownItem";
import MenuItem from "./MenuItem";

const DropDownBox = ({ category, about, categories, title, loading }) => {
      let categoryList = [];
      if (title === "Shop") {
            categoryList = categories;
      } else {
            categoryList = category;
      }

      const otherCategory = categories?.find(
            (item) => item?.slug == "sanitization-nepal",
      );

      return (
            <>
                  <DropDownContainer
                        className={`${title === "Shop" ? "dropdown__content" : ""}`}
                  >
                        <DropDownList>
                              {about ? (
                                    <>
                                          {categoryList?.map((cat, index) => (
                                                <DropDownItem
                                                      title={
                                                            cat.subtitle !==
                                                                  "Water Filtration" &&
                                                            cat.subtitle
                                                                  ? cat.subtitle
                                                                  : cat.title
                                                      }
                                                      slug={cat.slug}
                                                      index={index}
                                                      about={about}
                                                      cat={cat}
                                                >
                                                      {cat?.subCategory && (
                                                            <DropDownSubContainer>
                                                                  <DropDownList>
                                                                        {cat?.subCategory.map(
                                                                              (
                                                                                    sub,
                                                                                    index,
                                                                              ) => (
                                                                                    <DropDownItem
                                                                                          title={
                                                                                                sub.title
                                                                                          }
                                                                                          slug={
                                                                                                sub.slug
                                                                                          }
                                                                                          index={
                                                                                                index
                                                                                          }
                                                                                    />
                                                                              ),
                                                                        )}
                                                                  </DropDownList>
                                                            </DropDownSubContainer>
                                                      )}
                                                </DropDownItem>
                                          ))}
                                    </>
                              ) : (
                                    <>
                                          {!loading ? (
                                                categories.length > 0 ? (
                                                      <div className="define">
                                                            <ul>
                                                                  {categories?.map(
                                                                        (
                                                                              item,
                                                                              index,
                                                                        ) =>
                                                                              item?.title !==
                                                                                    "Sanitization" && (
                                                                                    <li
                                                                                          className={
                                                                                                index ==
                                                                                                      1 ||
                                                                                                index ==
                                                                                                      2
                                                                                                      ? "min-width"
                                                                                                      : ""
                                                                                          }
                                                                                          key={
                                                                                                index
                                                                                          }
                                                                                    >
                                                                                          <MenuItem
                                                                                                title={
                                                                                                      item?.title
                                                                                                }
                                                                                                slug={
                                                                                                      item?.slug
                                                                                                }
                                                                                                cat={
                                                                                                      item
                                                                                                }
                                                                                          >
                                                                                                {item?.title ===
                                                                                                      "PEX Pipes & Fittings" && (
                                                                                                      <>
                                                                                                            <MenuItem
                                                                                                                  title={
                                                                                                                        otherCategory?.title
                                                                                                                  }
                                                                                                                  slug={
                                                                                                                        otherCategory?.slug
                                                                                                                  }
                                                                                                                  cat={
                                                                                                                        otherCategory
                                                                                                                  }
                                                                                                            />
                                                                                                            {otherCategory
                                                                                                                  ?.subCategory
                                                                                                                  ?.length >
                                                                                                                  0 && (
                                                                                                                  <ul>
                                                                                                                        {otherCategory?.subCategory?.map(
                                                                                                                              (
                                                                                                                                    subItem,
                                                                                                                                    key,
                                                                                                                              ) => (
                                                                                                                                    <li
                                                                                                                                          key={
                                                                                                                                                key
                                                                                                                                          }
                                                                                                                                    >
                                                                                                                                          <MenuItem
                                                                                                                                                title={
                                                                                                                                                      subItem?.title
                                                                                                                                                }
                                                                                                                                                subCategory={
                                                                                                                                                      true
                                                                                                                                                }
                                                                                                                                                slug={
                                                                                                                                                      subItem?.slug
                                                                                                                                                }
                                                                                                                                                cat={
                                                                                                                                                      subItem
                                                                                                                                                }
                                                                                                                                          />
                                                                                                                                    </li>
                                                                                                                              ),
                                                                                                                        )}
                                                                                                                  </ul>
                                                                                                            )}
                                                                                                      </>
                                                                                                )}
                                                                                          </MenuItem>
                                                                                          {item?.title !==
                                                                                                "Sanitization" &&
                                                                                                item
                                                                                                      ?.subCategory
                                                                                                      ?.length >
                                                                                                      0 && (
                                                                                                      <ul>
                                                                                                            {item?.subCategory?.map(
                                                                                                                  (
                                                                                                                        subItem,
                                                                                                                        key,
                                                                                                                  ) => (
                                                                                                                        <li
                                                                                                                              key={
                                                                                                                                    key
                                                                                                                              }
                                                                                                                        >
                                                                                                                              <MenuItem
                                                                                                                                    title={
                                                                                                                                          subItem?.title
                                                                                                                                    }
                                                                                                                                    subCategory={
                                                                                                                                          true
                                                                                                                                    }
                                                                                                                                    slug={
                                                                                                                                          subItem?.slug
                                                                                                                                    }
                                                                                                                                    cat={
                                                                                                                                          subItem
                                                                                                                                    }
                                                                                                                              />
                                                                                                                        </li>
                                                                                                                  ),
                                                                                                            )}
                                                                                                      </ul>
                                                                                                )}
                                                                                    </li>
                                                                              ),
                                                                  )}
                                                            </ul>
                                                      </div>
                                                ) : null
                                          ) : null}
                                    </>
                              )}
                        </DropDownList>
                  </DropDownContainer>
            </>
      );
};

export default DropDownBox;
