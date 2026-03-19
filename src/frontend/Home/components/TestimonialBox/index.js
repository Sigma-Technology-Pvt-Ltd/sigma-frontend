import React, { useEffect, useState } from "react";
import {
      TestimonialCard,
      TestimonialInner,
      TestimonialSection,
      TestimonialSlider,
} from "./styles";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row } from "react-bootstrap";
import CommonHeading from "../../../../components/frontend/home/CommonHeading";
import axios from "axios";
import toast from "react-hot-toast";

const TestimonialBox = () => {
      //Owl Carousel Settings
      const options = {
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000, //2000ms=2s
            autoplayHoverPause: true,
            nav: false,
            margin: 30,
            responsive: {
                  0: {
                        items: 1,
                        dots: false,
                  },
                  600: {
                        items: 3,
                  },
                  1000: {
                        items: 3,
                  },
            },
      };

      const [loading, setLoading] = useState(false);
      const [testimonials, setTestimonials] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/testimonials`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setTestimonials(response.data.testimonials);
                        }
                  })
                  .catch((error) => {
                        toast.error(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, []);

      return (
            <>
                  {testimonials?.length > 0 && (
                        <TestimonialSection>
                              <Container>
                                    <CommonHeading
                                          title={"What They Say"}
                                          subTitle={"Testimonial"}
                                          align={"center"}
                                    />
                                    <Row className="mt-5">
                                          {!loading ? (
                                                <TestimonialSlider
                                                      items={3}
                                                      className=" owl-theme"
                                                      {...options}
                                                >
                                                      {testimonials?.map(
                                                            (item, index) => (
                                                                  <TestimonialCard
                                                                        key={
                                                                              index
                                                                        }
                                                                  >
                                                                        <TestimonialInner>
                                                                              <figure className="author-thumb">
                                                                                    <img
                                                                                          src={
                                                                                                item.image
                                                                                          }
                                                                                    />
                                                                              </figure>
                                                                              <p className="card-text">
                                                                                    {
                                                                                          item.message
                                                                                    }
                                                                              </p>
                                                                              <h4 className="card-title">
                                                                                    {
                                                                                          item.name
                                                                                    }
                                                                              </h4>
                                                                              <span>
                                                                                    {
                                                                                          item.position
                                                                                    }
                                                                              </span>
                                                                        </TestimonialInner>
                                                                  </TestimonialCard>
                                                            )
                                                      )}
                                                </TestimonialSlider>
                                          ) : null}
                                    </Row>
                              </Container>
                        </TestimonialSection>
                  )}
            </>
      );
};

export default TestimonialBox;
