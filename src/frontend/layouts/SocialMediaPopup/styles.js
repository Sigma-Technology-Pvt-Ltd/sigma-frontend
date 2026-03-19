import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
      position: fixed;
      bottom: 14px;
      right: 16px;
      z-index: 9999999;
`;

export const SocialMediaItem = styled.div`
      display: flex;
      margin: 7px;
      position: relative;
      -webkit-box-pack: end;
      justify-content: flex-end;
      max-height: 50px;
      margin-bottom: 16px;

      /* &:last-child {
            margin-bottom: 0;
      } */
`;

export const WhatsAppLink = styled(Link)`
      flex-shrink: 0;
      opacity: 1;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: block;
      order: 2;
      padding: 5px;
      box-sizing: border-box;
      cursor: pointer;
      overflow: hidden;
      box-shadow: rgba(136, 136, 136, 0.4) 0px 1px 7px;
      transition: all 0.5s ease 0s;
      position: relative;
      z-index: 200;
      text-decoration: none !important;
      background-color: rgb(77, 194, 71) !important;
`;

export const ViberLink = styled(Link)`
      flex-shrink: 0;
      opacity: 1;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: block;
      order: 2;
      padding: 5px;
      box-sizing: border-box;
      cursor: pointer;
      overflow: hidden;
      box-shadow: rgba(136, 136, 136, 0.4) 0px 1px 7px;
      transition: all 0.5s ease 0s;
      position: relative;
      z-index: 200;
      text-decoration: none !important;
      background-color: rgb(123, 81, 157) !important;
`;

export const MessenegerLink = styled(Link)`
      flex-shrink: 0;
      opacity: 1;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: block;
      order: 2;
      padding: 5px;
      box-sizing: border-box;
      cursor: pointer;
      overflow: hidden;
      box-shadow: rgba(136, 136, 136, 0.4) 0px 1px 7px;
      transition: all 0.5s ease 0s;
      position: relative;
      z-index: 200;
      text-decoration: none !important;
      background-color: rgb(0, 132, 255) !important;
`;
