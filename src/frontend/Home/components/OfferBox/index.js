import React, { useEffect, useState } from "react";
import { OfferBoxContainer } from "./styles";
import { Col, Container, Row } from "react-bootstrap";
import OfferItem from "./components/OfferItem";
import axios from "axios";
import { getBackendUrl } from "../../../../utils/getBackendUrl";

const OfferBox = () => {
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState([]);

  const loadData = async () => {
    setLoading(true);
    await axios
      .get(`${getBackendUrl()}/api/banners/offer`, {
        headers: {
          apikey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => {
        if (response.data.result === "success") {
          setOffers(response.data.banners);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <OfferBoxContainer>
        <Container>
          <Row className="align-items-center">
            {offers?.map((item, index) => (
              <React.Fragment key={item.id || index}>
                {item.type === "Middle Offer Banner" && (
                  <OfferItem
                    slug={item.link}
                    title={item.title}
                    image={item.image}
                    position="center"
                    slogan={item.subtitle}
                    order={2}
                  />
                )}
                {item?.type === "Side Offer Banner" && (
                  <OfferItem
                    slug={item.link}
                    title={item.title}
                    image={item.image}
                    order={index === 1 ? 1 : 3}
                    position="left"
                  />
                )}
              </React.Fragment>
            ))}
          </Row>
        </Container>
      </OfferBoxContainer>
    </>
  );
};

export default OfferBox;
