import React, { useEffect, useState } from "react";

import { CategoryBoxContainer } from "./styles";
import CommonHeading from "../../../../components/frontend/home/CommonHeading";
import { Col, Container, Row } from "react-bootstrap";
import CategoryItem from "./components/CategoryItem";
import axios from "axios";
import toast from "react-hot-toast";
import CategorySlider from "./components/CategorySlider";

const CategoryBox = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const loadData = async () => {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_SECRET_KEY}/api/categories`, {
        headers: {
          apikey: process.env.REACT_APP_API_KEY,
        },
      })
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
      <CategoryBoxContainer>
        <Container fluid="sm">
          <CommonHeading
            subTitle={"why choose us"}
            title={"Our Product Category"}
            align={"center"}
          />
          <Row className=" mt-4 g-3 ">
            {categories?.map((category, index) => (
              <Col lg={4} key={index}>
                <CategoryItem
                  category={category}
                  desc={category.desc}
                  icon={category.image}
                  slug={category.slug}
                />
              </Col>
            ))}
          </Row>
          {!loading ? <CategorySlider categories={categories} /> : null}
        </Container>
      </CategoryBoxContainer>
    </>
  );
};

export default CategoryBox;
