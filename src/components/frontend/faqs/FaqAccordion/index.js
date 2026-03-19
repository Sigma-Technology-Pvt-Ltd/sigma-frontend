import React, { useState } from "react";
import {
      FaqAccordionContent,
      FaqAccordionItem,
      FaqAccordionTitle,
} from "./styles";
import { Accordion } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import FaqSkeleton from "../../../skeleton/FaqSkeleton";

const FaqAccordion = () => {
      const [loading, setLoading] = useState(false);
      const [types, setTypes] = useState([]);

      const loadData = async () => {
            setLoading(true);

            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/faqs`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setTypes(response.data.types);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, []);
      
      return (
            <>
                  {!loading ? (
                        types?.length > 0 ? (
                              types?.map((type, index) => (
                                    <FaqAccordionItem key={index}>
                                          <FaqAccordionTitle
                                                color={(props) =>
                                                      props.theme.primary
                                                }
                                          >
                                                {type.title}
                                          </FaqAccordionTitle>
                                          {type?.faqs?.length > 0 ? (
                                                <FaqAccordionContent defaultActiveKey="0" flush>
                                                      {type?.faqs?.map(
                                                            (item, key) => (
                                                                  <Accordion.Item
                                                                        eventKey={`${key}`}
                                                                  >
                                                                        <Accordion.Header>
                                                                              {
                                                                                    item.question
                                                                              }
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                              {
                                                                                    item.answer
                                                                              }
                                                                        </Accordion.Body>
                                                                  </Accordion.Item>
                                                            )
                                                      )}
                                                </FaqAccordionContent>
                                          ) : null}
                                    </FaqAccordionItem>
                              ))
                        ) : null
                  ) : (
                        <FaqSkeleton />
                  )}
            </>
      );
};

export default FaqAccordion;
