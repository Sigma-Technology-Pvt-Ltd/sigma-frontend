import React from "react";
import { ContactInfoContainer } from "../../../../frontend/Contact/styles";
import ContactUsItem from "../../../common/ContactUsItem";

const contacts = [
      {
            id: 1,
            title: "phone",
            icon: "/images/png/contact/phone.svg",
            info: [
                  {
                        title: "+977 9801113668",
                  },
                  // {
                  //       title: "+977 9801913945",
                  // },
            ],
      },
      {
            id: 2,
            title: "mail",
            icon: "/images/png/contact/mail.svg",
            info: [
                  {
                        title: "info@sigmatechnologies.com.np",
                  },
                  // {
                  //       title: "atulsigtia@sigmatechnologies.com.np",
                  // },
            ],
      },
      {
            id: 3,
            title: "map",
            icon: "/images/png/contact/location.png",
            info: [
                  {
                        title: "Sigma Technologies Pvt. Ltd, <br />Aspen  Marg, Maitighar, St. Xavier College Rd",
                  },
            ],
      },
];

const ContactInfo = () => {
      return (
            <>
                  <ContactInfoContainer>
                        {contacts?.map((item, index) => (
                              <ContactUsItem
                                    key={index}
                                    title={item.title}
                                    icon={item.icon}
                                    info={item.info}
                              />
                        ))}
                  </ContactInfoContainer>
            </>
      );
};

export default ContactInfo;
