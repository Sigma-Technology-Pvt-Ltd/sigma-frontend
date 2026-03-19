import React from "react";
import { Accordion } from "react-bootstrap";
import {
      CategoryFilterBody,
      CategoryFilterContainer,
      CategoryFilterHeader,
} from "./style";
import CategoryFilter from "../CategoryFilter";

const CategoryManage = ({ loading, categories, handleChangeCategory }) => {
      return (
            <>
                  <CategoryFilterContainer flush>
                        {!loading ? (
                              categories.length > 0 ? (
                                    categories.map((category, index) =>
                                          category.subCategory.length > 0 ? (
                                                <Accordion.Item
                                                      eventKey={category.id}
                                                      key={index}
                                                >
                                                      <CategoryFilterHeader>
                                                            {category.title}
                                                      </CategoryFilterHeader>
                                                      <CategoryFilterBody>
                                                            <ul>
                                                                  {category
                                                                        .subCategory
                                                                        .length >
                                                                  0 ? (
                                                                        category.subCategory.map(
                                                                              (
                                                                                    subCategory,
                                                                                    key
                                                                              ) =>
                                                                                    subCategory
                                                                                          .childCategory
                                                                                          .length >
                                                                                    0 ? (
                                                                                          <CategoryFilterContainer
                                                                                                flush
                                                                                          >
                                                                                                <Accordion.Item
                                                                                                      eventKey={
                                                                                                            subCategory.id
                                                                                                      }
                                                                                                >
                                                                                                      <CategoryFilterHeader>
                                                                                                            {
                                                                                                                  subCategory.title
                                                                                                            }
                                                                                                      </CategoryFilterHeader>
                                                                                                      <CategoryFilterBody>
                                                                                                            <ul>
                                                                                                                  {subCategory.childCategory.map(
                                                                                                                        (
                                                                                                                              childCategory,
                                                                                                                              indexKey
                                                                                                                        ) => (
                                                                                                                              <li
                                                                                                                                    key={
                                                                                                                                          indexKey
                                                                                                                                    }
                                                                                                                              >
                                                                                                                                    <CategoryFilter
                                                                                                                                          category={
                                                                                                                                                childCategory
                                                                                                                                          }
                                                                                                                                          handleChangeCategory={
                                                                                                                                                handleChangeCategory
                                                                                                                                          }
                                                                                                                                          type="childCategory"
                                                                                                                                    />
                                                                                                                              </li>
                                                                                                                        )
                                                                                                                  )}
                                                                                                            </ul>
                                                                                                      </CategoryFilterBody>
                                                                                                </Accordion.Item>
                                                                                          </CategoryFilterContainer>
                                                                                    ) : (
                                                                                          <li
                                                                                                key={
                                                                                                      key
                                                                                                }
                                                                                          >
                                                                                                <CategoryFilter
                                                                                                      category={
                                                                                                            subCategory
                                                                                                      }
                                                                                                      type="subCategory"
                                                                                                      handleChangeCategory={
                                                                                                            handleChangeCategory
                                                                                                      }
                                                                                                />
                                                                                          </li>
                                                                                    )
                                                                        )
                                                                  ) : (
                                                                        <li
                                                                              key={
                                                                                    index
                                                                              }
                                                                        >
                                                                              <CategoryFilter
                                                                                    category={
                                                                                          category
                                                                                    }
                                                                                    type="category"
                                                                                    handleChangeCategory={
                                                                                          handleChangeCategory
                                                                                    }
                                                                              />
                                                                        </li>
                                                                  )}
                                                            </ul>
                                                      </CategoryFilterBody>
                                                </Accordion.Item>
                                          ) : (
                                                <div className="border-bottom">
                                                      <CategoryFilter
                                                            category={category}
                                                            type="category"
                                                            handleChangeCategory={
                                                                  handleChangeCategory
                                                            }
                                                      />
                                                </div>
                                          )
                                    )
                              ) : (
                                    <>No categories found</>
                              )
                        ) : (
                              <>Loading</>
                        )}
                  </CategoryFilterContainer>
            </>
      );
};

export default CategoryManage;
