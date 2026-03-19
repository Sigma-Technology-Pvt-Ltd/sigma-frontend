import React from 'react';
import {
   ContactItemContainer,
   ContactItemDetail,
   ContactItemIcon,
   ContactItemTitle
} from './styles';
import { Link } from 'react-router-dom';

const ContactUsItem = ({ icon, title, info }) => {
   return (
      <>
         <ContactItemContainer className="d-flex align-items-center">
            <ContactItemIcon>
               <Link
                  to={
                     title === 'phone'
                        ? `tel: ${info}`
                        : title === 'mail'
                        ? `mailto: ${info}`
                        : 'https://maps.app.goo.gl/S8mXjwezYicdGzRS9'
                  }
                  target={title === 'map' ? '_blank' : '_self'}
               >
                  <img src={icon} alt={title} />
               </Link>
            </ContactItemIcon>
            <ContactItemTitle>
               {info?.map((item, index) => (
                  <Link
                     key={index}
                     to={
                        title === 'phone'
                           ? `tel: ${info}`
                           : title === 'mail'
                           ? `mailto: ${info}`
                           : 'https://maps.app.goo.gl/S8mXjwezYicdGzRS9'
                     }
                     target={title === 'map' ? '_blank' : '_self'}
                  >
                     <span
                        dangerouslySetInnerHTML={{ __html: item?.title }}
                     ></span>
                  </Link>
               ))}
            </ContactItemTitle>
         </ContactItemContainer>
      </>
   );
};

export default ContactUsItem;
