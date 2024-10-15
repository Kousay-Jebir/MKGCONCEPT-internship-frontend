import React from 'react';
import mailIcon from "../../assets/mailIcon.svg"
import phoneIcon from "../../assets/phoneIcon.svg"
import mapPinIcon from "../../assets/mapPinIcon.svg"
import './contact.css'; // Import your CSS file

const ContactInfoItem = ({ icon, information }) => {
    return (
        <div className="contact-info-item">
            <img src={icon} className="contact-icon" alt="" />
            <p  style={{maxWidth:'350px'}} className="contact-info-text">{information}</p>
        </div>
    );
};

export default function ContactInformation() {
    return (
        <div className="contact-info-container">
            <ContactInfoItem icon={mapPinIcon} information="6386 Spring St undefined Anchorage, Georgia 12473 United States" />
            <ContactInfoItem icon={phoneIcon} information="(843) 555-0130" />
            <ContactInfoItem icon={mailIcon} information="willie.jennings@example.com" />
        </div>
    );
}
