import React from "react";
import './styles.css';
import footerImage from '../../view/images/footer-wave.png'

const Footer = () => {
    return (
        <div className="footer">
            <img className="w-100" src={footerImage} alt="footerImage" />
        </div>
    );
};

export default Footer;