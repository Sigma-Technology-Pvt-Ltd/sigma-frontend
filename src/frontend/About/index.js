import React, { useContext } from "react";
import BreadCrumBox from "../../components/common/BreadCrumbBox";

import AboutBox from "../Home/components/AboutBox";
import MetaContext from "../../stores/MetaContext";

const AboutPage = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("about-us");

      return (
            <>
                  <BreadCrumBox title={"About Us"} />
                  <AboutBox />
            </>
      );
};

export default AboutPage;
