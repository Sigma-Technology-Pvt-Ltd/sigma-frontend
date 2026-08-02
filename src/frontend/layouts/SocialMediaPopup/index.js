import React from "react";
import {
      MessenegerLink,
      ViberLink,
      SocialMediaItem,
      WhatsAppLink,
      SocialMediaContainer,
} from "./styles";
import { MessengerIcon, ViberIcon, WhatsAppIcon } from "../../../icons";

function SocialMediaPopup() {
      return (
            <SocialMediaContainer>
                  <SocialMediaItem>
                        <WhatsAppLink
                              size="50"
                              to="https://wa.me/9779801113668"
                              target="_blank"
                              color="#4dc247"
                              id="getbutton-whatsapp"
                              data-component-name="BaseButton"
                        >
                              <WhatsAppIcon />
                        </WhatsAppLink>
                  </SocialMediaItem>
                  {/* <SocialMediaItem>
                        <ViberLink
                              to="viber://chat?number=9779802310000"
                              target="_blank"
                        >
                              <ViberIcon />
                        </ViberLink>
                  </SocialMediaItem> */}
                  <SocialMediaItem>
                        <MessenegerLink
                              size="50"
                              to="https://m.me/112334230499533"
                              target="_blank"
                              color="#0084ff"
                              id="getbutton-facebook"
                              data-component-name="BaseButton"
                              className="q8c6tt-0 jBfflV"
                        >
                              <MessengerIcon />
                        </MessenegerLink>
                  </SocialMediaItem>
            </SocialMediaContainer>
      );
}

export default SocialMediaPopup;
