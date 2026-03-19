import React, { useState } from "react";
import { ShareModal } from "../ShareBox/style";
import {
      Col,
      FormControl,
      FormLabel,
      Modal,
      Row,
      Spinner,
} from "react-bootstrap";
import { ProductEnquiryButton } from "../../../../frontend/ProductDetail/styles";
import axios from "axios";
import toast from "react-hot-toast";
import { ProductForm } from "./style";

const ProductEnquiry = ({ show, handleClose, slug }) => {
      const [loading, setLoading] = useState(false);
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
      const [remarks, setRemarks] = useState("");

      const handleForm = async (event) => {
            event.preventDefault();
            setLoading(true);
            const data = {
                  first_name: firstName,
                  last_name: lastName,
                  email: email,
                  phone_number: phoneNumber,
                  remarks: remarks,
            };
            await axios
                  .post(
                        `${process.env.REACT_APP_SECRET_KEY}/api/products/${slug}`,
                        data,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        setTimeout(() => {
                              if (response.data.result === "success") {
                                    toast.success(response.data.message);
                                    setFirstName("");
                                    setLastName("");
                                    setEmail("");
                                    setRemarks("");
                                    setPhoneNumber("");
                                    handleClose();
                              }
                              if (response.data.result === "error") {
                                    if (response.data.message.first_name) {
                                          toast.error(
                                                response.data.message.first_name
                                          );
                                    }
                                    if (response.data.message.last_name) {
                                          toast.error(
                                                response.data.message.last_name
                                          );
                                    }
                                    if (response.data.message.email) {
                                          toast.error(
                                                response.data.message.email
                                          );
                                    }
                                    if (response.data.message.phone_number) {
                                          toast.error(
                                                response.data.message
                                                      .phone_number
                                          );
                                    }
                                    if (response.data.message.remarks) {
                                          toast.error(
                                                response.data.message.remarks
                                          );
                                    }
                              }

                              setLoading(false);
                        }, 3000);
                  })
                  .catch((error) => {
                        setTimeout(() => {
                              toast.error(error.message);
                              setLoading(false);
                        }, 3000);
                  });
      };

      return (
            <>
                  <ShareModal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        size="lg"
                  >
                        <Modal.Header closeButton>
                              <Modal.Title>Product Enquiry</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <ProductForm onSubmit={handleForm}>
                                    <Row className="g-3">
                                          <Col lg={6}>
                                                <FormLabel>
                                                      First Name
                                                </FormLabel>
                                                <FormControl
                                                      type="text"
                                                      onChange={(event) =>
                                                            setFirstName(
                                                                  event.target
                                                                        .value
                                                            )
                                                      }
                                                      value={firstName}
                                                />
                                          </Col>
                                          <Col lg={6}>
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl
                                                      type="text"
                                                      onChange={(event) =>
                                                            setLastName(
                                                                  event.target
                                                                        .value
                                                            )
                                                      }
                                                      value={lastName}
                                                />
                                          </Col>
                                          <Col lg={6}>
                                                <FormLabel>
                                                      Email Address
                                                </FormLabel>
                                                <FormControl
                                                      type="email"
                                                      onChange={(event) =>
                                                            setEmail(
                                                                  event.target
                                                                        .value
                                                            )
                                                      }
                                                      value={email}
                                                />
                                          </Col>
                                          <Col lg={6}>
                                                <FormLabel>Phone No.</FormLabel>
                                                <FormControl
                                                      type="text"
                                                      onChange={(event) =>
                                                            setPhoneNumber(
                                                                  event.target
                                                                        .value
                                                            )
                                                      }
                                                      value={phoneNumber}
                                                />
                                          </Col>
                                          <Col lg={12}>
                                                <FormLabel>Remarks</FormLabel>
                                                <FormControl
                                                      as="textarea"
                                                      rows={4}
                                                      onChange={(event) =>
                                                            setRemarks(
                                                                  event.target
                                                                        .value
                                                            )
                                                      }
                                                      value={remarks}
                                                />
                                          </Col>
                                          <Col lg={12}>
                                                <ProductEnquiryButton type="submit">
                                                      <span>
                                                            {!loading ? (
                                                                  "Enquire Now"
                                                            ) : (
                                                                  <Spinner />
                                                            )}
                                                      </span>
                                                </ProductEnquiryButton>
                                          </Col>
                                    </Row>
                              </ProductForm>
                        </Modal.Body>
                  </ShareModal>
            </>
      );
};

export default ProductEnquiry;
