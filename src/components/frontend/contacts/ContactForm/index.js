import React, { useState } from "react";
import {
      ContactPageForm,
      FormButton,
} from "../../../../frontend/Contact/styles";
import { Form, Row, Spinner } from "react-bootstrap";
import FormInput from "../../../Form/FormInput";
import toast from "react-hot-toast";
import axios from "axios";

const inputs = [
      {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Your Name",
            errorMessage: "",
            required: true,
      },
      {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Your Email",
            errorMessage: "",
            required: true,
      },
      {
            id: 3,
            name: "phoneno",
            type: "phone",
            placeholder: "Phone Number",
            errorMessage: "",
            required: true,
            pattern: "(\\+977)?[9][6-9]\\d{8}",
      },
      {
            id: 4,
            name: "subject",
            type: "text",
            placeholder: "Subject",
            errorMessage: "",
      },
      {
            id: 5,
            name: "message",
            type: "textarea",
            placeholder: "Your Message",
            errorMessage: "",
            required: true,
      },
];

const ContactForm = () => {
      const [values, setValues] = useState({
            name: "",
            email: "",
            phoneno: "",
            subject: "",
            message: "",
      });

      const handleChange = (e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
      };
      const [loading, setLoading] = useState(false);

      const handleForm = async (event) => {
            event.preventDefault();
            setLoading(true);
            const data = {
                  name: values?.name,
                  subject: values?.subject,
                  email: values?.email,
                  phone_number: values?.phoneno,
                  message: values?.message,
            };
            await axios
                  .post(
                        `${process.env.REACT_APP_SECRET_KEY}/api/contact-us`,
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
                                    setValues({
                                          name: "",
                                          email: "",
                                          phoneno: "",
                                          subject: "",
                                          message: "",
                                    });
                              }
                              if (response.data.result === "error") {
                                    if (response.data.message.name) {
                                          toast.error(
                                                response.data.message.name
                                          );
                                    }
                                    if (response.data.message.subject) {
                                          toast.error(
                                                response.data.message.subject
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
                                    if (response.data.message.message) {
                                          toast.error(
                                                response.data.message.message
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
                  <ContactPageForm>
                        <Form onSubmit={handleForm}>
                              <Row>
                                    {inputs?.map((input) =>
                                          input.type === "textarea" ? (
                                                <Form.Group
                                                      className="mb-3 col-lg-12"
                                                      controlId="formBasicEmail"
                                                      key={input.id}
                                                >
                                                      <FormInput
                                                            {...input}
                                                            value={
                                                                  values[
                                                                        input
                                                                              .name
                                                                  ]
                                                            }
                                                            onChange={
                                                                  handleChange
                                                            }
                                                      />
                                                </Form.Group>
                                          ) : (
                                                <Form.Group
                                                      className="mb-3 col-lg-6"
                                                      controlId="formBasicEmail"
                                                      key={input.id}
                                                      type={input.type}
                                                >
                                                      <FormInput
                                                            {...input}
                                                            value={
                                                                  values[
                                                                        input
                                                                              .name
                                                                  ]
                                                            }
                                                            onChange={
                                                                  handleChange
                                                            }
                                                      />
                                                </Form.Group>
                                          )
                                    )}

                                    <Form.Group className="col-lg-5">
                                          <FormButton type="submit">
                                                Send Message{" "}
                                                {loading && <Spinner />}
                                          </FormButton>
                                    </Form.Group>
                              </Row>
                        </Form>
                  </ContactPageForm>
            </>
      );
};

export default ContactForm;
