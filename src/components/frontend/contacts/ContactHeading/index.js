import React from 'react';
import { ContactHeadingContainer } from './styles';

const ContactHeading = ({ title }) => {
    return (
        <>
            <ContactHeadingContainer>
                <h3>{title}</h3>
            </ContactHeadingContainer>
        </>
    );
};

export default ContactHeading;
