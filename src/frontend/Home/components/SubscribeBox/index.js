import React, { useState } from "react";
import { SubscribeContainer } from "./styles";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommonButton from "../../../../components/frontend/home/CommonButton";
import axios from "axios";
import toast from "react-hot-toast";

const SubscribeBox = () => {
      const [loading, setLoading] = useState(false);
      const [email, setEmail] = useState("");

      const handelSubmit = async (event) => {
            event.preventDefault();
            setLoading(true);
            const data = {
                  email: email,
            };
            await axios
                  .post(
                        `${process.env.REACT_APP_SECRET_KEY}/api/subscriber`,
                        data,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              toast.success(response.data.message);
                        }
                        if (response.data.result === "error") {
                              if (response.data.message.email) {
                                    toast.error(response.data.message.email);
                              }
                        }
                  })
                  .catch((error) => {
                        toast.error(error.message);
                  });
            setLoading(false);
      };

      return (
            <>
                  <Container>
                        <SubscribeContainer>
                              <div className="footer__top w-100">
                                    <Row>
                                          <Col lg="6">
                                                <h3 className="footer__top--title mb-0 pb-0">
                                                      Subscribe to Our
                                                      Newsletter!
                                                </h3>
                                          </Col>
                                          <Col lg={6}>
                                                <Form
                                                      onSubmit={handelSubmit}
                                                      className="form"
                                                >
                                                      <div className="form__group">
                                                            <input
                                                                  type="email"
                                                                  placeholder="Enter Your Email"
                                                                  onChange={(
                                                                        event
                                                                  ) =>
                                                                        setEmail(
                                                                              event
                                                                                    .target
                                                                                    .value
                                                                        )
                                                                  }
                                                            />

                                                            <CommonButton
                                                                  title="subscribe"
                                                                  type="submit"
                                                                  button={true}
                                                                  background={
                                                                        "#fff"
                                                                  }
                                                                  loading={
                                                                        loading
                                                                  }
                                                                  color={"#000"}
                                                            />
                                                      </div>
                                                </Form>
                                          </Col>
                                    </Row>
                              </div>
                        </SubscribeContainer>
                  </Container>
            </>
      );
};

export default SubscribeBox;
