import React, { useState } from "react";
import { Form } from "react-bootstrap";

const FormInput = (props) => {
      const { id, type, errorMessage, onChange, ...inputprops } = props;
      const [focused, setFocused] = useState(false);

      const handleFocus = (e) => {
            setFocused(true);
      };

      return (
            <>
                  {type === "textarea" ? (
                        <>
                              <Form.Control
                                    as={type}
                                    className="border-0"
                                    rows={7}
                                    {...inputprops}
                                    onChange={onChange}
                                    onBlur={handleFocus}
                                    focused={focused.toString()}
                              />
                              {errorMessage && <span>*{errorMessage}</span>}
                        </>
                  ) : (
                        <>
                              <Form.Control
                                    type={type}
                                    className="border-0"
                                    {...inputprops}
                                    onChange={onChange}
                                    onBlur={handleFocus}
                                    focused={focused.toString()}
                              />
                              {errorMessage && <span>*{errorMessage}</span>}
                        </>
                  )}
            </>
      );
};

export default FormInput;
