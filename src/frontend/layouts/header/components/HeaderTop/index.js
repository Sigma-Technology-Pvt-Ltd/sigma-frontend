import React from "react";
import {
  HeaderIcon,
  HeaderInfo,
  HeaderItem,
  HeaderTopContainer,
} from "../../styles";
import { Link } from "react-router-dom";
import SocialMedia from "../../../../../components/common/SocialMedia";

const HeaderTop = () => {
  return (
    <>
      <HeaderTopContainer
        fluid
        className="d-flex w-100 align-items-center justify-content-between"
      >
        <HeaderInfo className="d-flex ">
          <HeaderItem className="pe-3">
            <Link className="d-flex align-items-center justify-content-center gap-2">
              <HeaderIcon className="d-flex align-items-center">
                <i className="bx bxs-map"></i>
              </HeaderIcon>
              <span>Aspen Marg, Maitighar</span>
            </Link>
          </HeaderItem>
          <HeaderItem className="ms-3">
            <a
              href="mailto:info@sigmatechnologies.com.np"
              className="d-flex align-items-center justify-content-center gap-2"
            >
              <HeaderIcon className="d-flex align-items-center">
                <i className="bx bx-envelope"></i>
              </HeaderIcon>
              <span>info@sigmatechnologies.com.np</span>
            </a>
          </HeaderItem>
        </HeaderInfo>
        <HeaderInfo>
          <SocialMedia color="white" hoverColor="#3A3A3A"/>
        </HeaderInfo>
      </HeaderTopContainer>
    </>
  );
};

export default HeaderTop;
