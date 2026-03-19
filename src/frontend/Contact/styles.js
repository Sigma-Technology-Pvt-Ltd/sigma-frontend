import { Button, Row } from "react-bootstrap";
import styled from "styled-components";

export const ContactPageContainer = styled.div`
      padding-top: 3rem;
      background-color: #faf9fc;
`;

export const ContactPageWrapper = styled.div`
      @media screen and (max-width: 568px) {
            margin-bottom: 2rem;
      }
`;

export const ContactPageForm = styled.div`
      margin-top: 40px;
      input, textarea {
            padding: 14px 20px;
            ${"" /* font-size: 1.1em; */}
            outline: none;
            border: 2px solid rgba(241, 238, 246, 0.5);
            background-color: #fff;
            font-size: 14px;
            border-radius: 7px;
      }

      input:invalid[focused="true"] ~ span {
            display: block;
      }
      span {
            display: none;
            font-size: 12px;
            color: red;
            padding: 3px;
      }
      .form-control:focus {
            box-shadow: none;
      }
`;

export const FormButton = styled(Button)`
      background: ${(props) => props.theme.primary} !important;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      padding: 13px 16px;
      outline: none;
      border: none;
      &:hover {
            background: ${(props) => props.theme.dark} !important;
      }

      .spinner-border {
            height: 1rem;
            width: 1rem;
            border-width: 1px;
      }
`;
export const ContactInfoContainer = styled.div`
      margin-top: 40px;
`;
export const ContactAdditional = styled(Row)`
      top: 0;
      background: ${(props) => props.theme.primary};
      height: 180px;
      padding: 50px 100px;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 1000;
      border-radius: 8px;
      ${"" /* width: 85%; */}
      margin-bottom: -120px;
      img {
            width: 50px;
            height: 50px;
      }
      button {
            height: 50px;
            width: 250px;
            background: #fff;
            color: #7377ab;
            align-items: center;
            justify-content: center;
            margin-left: 20px;
            bottom: 0;
            border: none;
            margin-top: 15px;
            padding: 9px;
            display: flex;
            &:hover {
                  background: transparent;
                  border: 1px solid #fff;
                  color: #fff;
            }
      }
`;
