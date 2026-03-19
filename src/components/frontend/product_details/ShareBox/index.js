import React from "react";
import { Modal } from "react-bootstrap";
import { ShareModal } from "./style";

const ShareBox = ({ show, handleClose }) => {
      return (
            <>
                  <ShareModal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                  >
                        <Modal.Header closeButton>
                              <Modal.Title>Share with your friends</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <div className="text-center">
                                    <a
                                          href={`https://www.facebook.com/sharer.php?t=Air Purifier&u=${window.location.href}`}
                                          target="_blank"
                                    >
                                          <i className="bx bxl-facebook text-deoration-none text-dark fs-2 border rounded-circle p-2"></i>
                                    </a>
                                    <a
                                          href={`https://x.com/intent/post?text=Air Purifier&url=${window.location.href}`}
                                          target="_blank"
                                          className="ms-4"
                                    >
                                          <i className="bx bxl-twitter text-deoration-none text-dark fs-2 border rounded-circle p-2"></i>
                                    </a>
                                    <a
                                          href={`https://www.linkedin.com/shareArticle?title=Air Purifier&url=${window.location.href}`}
                                          target="_blank"
                                          className="ms-4"
                                    >
                                          <i className="bx bxl-linkedin text-deoration-none text-dark fs-2 border rounded-circle p-2"></i>
                                    </a>
                              </div>
                        </Modal.Body>
                  </ShareModal>
            </>
      );
};

export default ShareBox;
