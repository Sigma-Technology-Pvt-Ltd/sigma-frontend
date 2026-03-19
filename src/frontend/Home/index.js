import React, { useContext } from "react";
import {
  AboutBox,
  BannerBox,
  BlogBox,
  CategoryBox,
  OfferBox,
  SubscribeBox,
  TestimonialBox,
  VideoBox,
} from "./components";
import MetaContext from "../../stores/MetaContext";

const Home = () => {
  const metaCtx = useContext(MetaContext);
  metaCtx.handleSlug("home-page");

  return (
    <>
      <BannerBox />
      <CategoryBox />
      <AboutBox button={true} />
      <OfferBox />
      <VideoBox />
      <TestimonialBox />
      <BlogBox />
      <SubscribeBox />
    </>
  );
};

export default Home;
