import React from "react";
import {
  CustomCard,
  OfferContent,
  OfferImage,
  OfferItemContainer,
} from "./styles";
import ShopButton from "../../../../../../components/frontend/home/ShopButton";
import { Col } from "react-bootstrap";

const OfferItem = ({ image, slug, title, position, slogan, order }) => {
  return (
    <>
      <Col
        className="d-flex align-items-center justify-content-center"
        style={{ order: order }}
      >
        <OfferItemContainer order={order}>
          <OfferContent $text="center">
            <h3 className="text-1 w-100">{title}</h3>
            {slogan && <p>{slogan}</p>}
            <ShopButton slug={slug} />
          </OfferContent>
          <CustomCard
            className={position === "left" ? "left" : "center"}
            $backgroundImage={image}
          >
            <OfferImage className="d-flex w-100 align-items-center justify-content-center h-100">
              <img src="/images/img/offer/Vector.png" alt={title} />
            </OfferImage>
          </CustomCard>
        </OfferItemContainer>
      </Col>
    </>
  );
};

export default OfferItem;
