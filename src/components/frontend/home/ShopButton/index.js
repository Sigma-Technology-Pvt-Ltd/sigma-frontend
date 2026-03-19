import React from "react";
import { ShopButtonContainer } from "../../../../frontend/Home/components/BannerBox/styles";
import { Link } from "react-router-dom";

const ShopButton = ({ slug, marginTop }) => {
      return (
            <>
                  <ShopButtonContainer marginTop={marginTop}>
                        <Link to={slug || "#"} className="text-white">
                              shop now
                        </Link>
                  </ShopButtonContainer>
            </>
      );
};

export default ShopButton;
