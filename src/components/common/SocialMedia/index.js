import React from "react";
import { SocialMediaContainer, SocialMediaItem } from "./styles";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "../../../icons/SocialMediaIcons";
import { Link } from "react-router-dom";

const socialMedia = [
  {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com/sigmatechnologies.com.np",
    icon: <Facebook />,
  },
  {
    id: 2,
    title: "Instagram",
    link: "https://www.instagram.com/sigmatechnologies__/",
    icon: <Instagram />,
  },
  {
    id: 3,
    title: "Twitter",
    link: "",
    icon: <Twitter />,
  },
  {
    id: 4,
    title: "Linkedin",
    link: "https://www.linkedin.com/company/sigmatechnologiesnepal/about/",
    icon: <Linkedin />,
  },
  {
    id: 5,
    title: "Youtube",
    link: "https://www.youtube.com/@sigma_technologies",
    icon: <Youtube />,
  },
];

const SocialMedia = ({color, hoverColor}) => {
  return (
    <>
      <SocialMediaContainer>
        {socialMedia?.map((item, index) => (
          <SocialMediaItem key={index} color={color} hoverColor ={hoverColor}>
            <Link to={item.link}>{item.icon}</Link>
          </SocialMediaItem>
        ))}
      </SocialMediaContainer>
    </>
  );
};

export default SocialMedia;
