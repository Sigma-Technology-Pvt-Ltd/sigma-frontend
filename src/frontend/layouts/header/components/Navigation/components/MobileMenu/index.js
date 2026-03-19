import React, { useEffect, useState } from "react";
import { MobileMenuButton } from "../../../../styles";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import MobileMenuItem from "../MobileMenuItem";

const MobileMenu = ({ categories, categoryList }) => {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [menu, setMenu] = useState(null);

      useEffect(() => {
            if (show) {
                  setMenu(
                        <MobileMenuItem
                              categories={categories}
                              setShow={setShow}
                              categoryList={categoryList}
                        />
                  );
            }
      }, [show]);

      return (
            <>
                  <MobileMenuButton onClick={handleShow} className="btn">
                        <span className="material-symbols-outlined">menu</span>
                  </MobileMenuButton>
                  <Offcanvas
                        className="sidebar__menu"
                        show={show}
                        placement={"start"}
                        onHide={handleClose}
                  >
                        <Offcanvas.Header closeButton>
                              <Offcanvas.Title>
                                    <div className="header__canvas--image">
                                          <Link to="/">
                                                <img
                                                      src="/images/png/logo/sigma.png"
                                                      className="img-fluid text-start"
                                                      width={150}
                                                      alt="Sigma Technologies Pvt. Ltd."
                                                      height={150}
                                                      style={{
                                                            height: "40px",
                                                            objectFit:
                                                                  "contain",
                                                            width: "80px",
                                                      }}
                                                ></img>
                                          </Link>
                                    </div>
                              </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>{menu}</Offcanvas.Body>
                  </Offcanvas>
            </>
      );
};

export default MobileMenu;
