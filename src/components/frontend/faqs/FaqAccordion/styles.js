import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';

export const FaqAccordionContainer = styled.div``;

export const FaqAccordionTitle = styled.h4`
   margin-bottom: 20px;
   font-family: ${(props) => props.theme.primaryFont};
   ${'' /* font-weight: 600; */}
`;
export const FaqAccordionContent = styled(Accordion)`
   .accordion-item {
      background-color: #eff3f6;
      margin-bottom: 20px;
      border: 0;

      &:last-child {
         margin-bottom: 0;
      }
   }

   .accordion-button:not(.collapsed) {
      box-shadow: none;
   }
   .accordion-body {
      background: ${(props) => props.theme.white};
   }
   .accordion-button {
      position: 0;
      background-color: ${(props) => props.theme.white};
   }
   .accordion-button::after {
      flex-shrink: 0;
      position: absolute;
      top: 18px;
      right: 21px;
      width: 11px;
      height: 11px;
      margin-left: auto;
      content: '';
      background-color: #eeeeee;
      display: none;
      background-repeat: no-repeat;
      background-size: var(--bs-accordion-btn-icon-width);
      transition: var(--bs-accordion-btn-icon-transition);
      background-image: none;
      transition: height 0.3s ease-in-out, all 0.3s ease-in-out;
   }
   .accordion-button::before {
      position: absolute;
      top: 18px;
      right: 15px;
      flex-shrink: 0;
      width: 13px;
      height: 13px;
      margin-left: auto;
      content: '';
      background-color: #eeeeee;
      background-repeat: no-repeat;
      background-size: var(--bs-accordion-btn-icon-width);
      transition: var(--bs-accordion-btn-icon-transition);
   }
   .accordion-button:not(.collapsed)::after {
      transform: none;
      ${'' /* height: 14px; */}
      width: 2px;
      transform: none;
      height: 100%;
      display: block;
      transition: height 0.3s ease-in-out, all 0.3s ease-in-out;
   }
   .accordion-button:not(.collapsed)::before {
   }
   .accordion-button:not(.collapsed) {
      box-shadow: none;
      color: ${(props) => props.theme.primary};
   }
   .accordion-button:focus {
      z-index: 3;
      border-color: transparent;
      outline: 0;
      box-shadow: none;
   }
`;

export const FaqAccordionItem = styled.div`
   margin-bottom: 40px;
`;

export const WidgetContainer = styled.div`
   top: 90px;
`;
