import React from "react";
import { HeaderContainer } from "./styles";
import { HeaderTop } from "./components";
import Navigation from "./components/Navigation";
import useSticky from "../../../hooks/Sticky";

const Header = () => {
      const isSticky = useSticky();
      return (
            <>
                  <HeaderContainer className="w-100">
                        <HeaderTop />
                        <Navigation isSticky={isSticky} />
                  </HeaderContainer>
            </>
      );
};

export default React.memo(Header);
