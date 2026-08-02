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
            (item) => item?.slug === "sanitization-nepal" || item?.title === "Sanitization",
      );

      // Filter out standalone Sanitization (since it is paired with PEX Pipes)
      let displayCategories = (categories || []).filter(
            (item) => item?.title !== "Sanitization" && item?.slug !== "sanitization-nepal"
      );

      // SWAP: Move Compact Sewage Treatment to Top Right (index 2) and PEX Pipes & Fittings to Bottom Left
      const sewageIdx = displayCategories.findIndex(
            (c) => c?.title?.toLowerCase().includes("sewage") || c?.slug?.includes("sewage")
      );
      const pexIdx = displayCategories.findIndex(
            (c) => c?.title === "PEX Pipes & Fittings" || c?.slug?.includes("pipes")
      );

      if (sewageIdx !== -1 && pexIdx !== -1) {
            const temp = displayCategories[sewageIdx];
            displayCategories[sewageIdx] = displayCategories[pexIdx];
            displayCategories[pexIdx] = temp;
      }

      return (
            <>
                  <DropDownContainer
                        className={`${title === "Shop" ? "dropdown__content" : ""}`}
                  >
                        {about ? (
                              <DropDownList>
                                    {categoryList?.map((cat, index) => (
                                          <DropDownItem
                                                key={cat.id || cat.slug || index}
                                                title={
                                                      cat.subtitle !== "Water Filtration" && cat.subtitle
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
                                                                  {cat?.subCategory.map((sub, index) => (
                                                                        <DropDownItem
                                                                              key={sub.id || sub.slug || index}
                                                                              title={sub.title}
                                                                              slug={sub.slug}
                                                                              index={index}
                                                                        />
                                                                  ))}
                                                            </DropDownList>
                                                      </DropDownSubContainer>
                                                )}
                                          </DropDownItem>
                                    ))}
                              </DropDownList>
                        ) : (
                              <>
                                    {!loading && displayCategories.length > 0 && (
                                          <div className="define">
                                                <ul>
                                                      {displayCategories.map((item, index) => (
                                                            <li
                                                                  className={index === 1 || index === 2 ? "min-width" : ""}
                                                                  key={item.id || item.slug || index}
                                                            >
                                                                  <MenuItem
                                                                        title={item?.title}
                                                                        slug={item?.slug}
                                                                        cat={item}
                                                                  />

                                                                  {item?.title === "PEX Pipes & Fittings" && otherCategory && (
                                                                        <div style={{ marginTop: "12px" }}>
                                                                              <MenuItem
                                                                                    title={otherCategory?.title}
                                                                                    slug={otherCategory?.slug}
                                                                                    cat={otherCategory}
                                                                              />
                                                                              {otherCategory?.subCategory?.length > 0 && (
                                                                                    <ul>
                                                                                          {otherCategory.subCategory.map((subItem, key) => (
                                                                                                <li key={subItem.id || subItem.slug || key}>
                                                                                                      <MenuItem
                                                                                                            title={subItem?.title}
                                                                                                            subCategory={true}
                                                                                                            slug={subItem?.slug}
                                                                                                            cat={subItem}
                                                                                                      />
                                                                                                </li>
                                                                                          ))}
                                                                                    </ul>
                                                                              )}
                                                                        </div>
                                                                  )}

                                                                  {item?.subCategory?.length > 0 && (
                                                                        <ul>
                                                                              {item.subCategory.map((subItem, key) => (
                                                                                    <li key={subItem.id || subItem.slug || key}>
                                                                                          <MenuItem
                                                                                                title={subItem?.title}
                                                                                                subCategory={true}
                                                                                                slug={subItem?.slug}
                                                                                                cat={subItem}
                                                                                          />
                                                                                    </li>
                                                                              ))}
                                                                        </ul>
                                                                  )}
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                    )}
                              </>
                        )}
                  </DropDownContainer>
            </>
      );
};

export default DropDownBox;
