import React from "react";
import { ShopButtonContainer } from "../../../../frontend/Home/components/BannerBox/styles";
import { Link } from "react-router-dom";

const ShopButton = ({ slug, text, title, marginTop }) => {
      const buttonLabel = text || title || "Shop Now";
      return (
            <ShopButtonContainer $marginTop={marginTop}>
                  <Link to={slug || "#"} className="shop-now-btn">
                        <span>{buttonLabel}</span>
                        <svg 
                              width="15" 
                              height="15" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              style={{ transition: 'transform 0.2s ease', display: 'inline-block', verticalAlign: 'middle' }}
                        >
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                  </Link>
            </ShopButtonContainer>
      );
};

export default ShopButton;
