import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
import logoImage from '../Assets/logo2.png';
import gps from '../Assets/gps.png';
import email from '../Assets/email(1).png';
import facebook from '../Assets/facebook.png';
import phone from '../Assets/phone-call(1).png';
import twitter from '../Assets/twitter.png';
import instagram from '../Assets/instagram.png';
import linkedin from '../Assets/linkedin.png';

const Footer = () => {
    const openFacebookPage = () => {
        window.open("https://www.facebook.com", "_blank");
    };
    const openInsta = () => {
        window.open("https://www.instagram.com", "_blank");
    };
    const openLinkedin = () => {
        window.open("https://www.linkedin.com", "_blank");
    };
    const openTwitter = () => {
        window.open("https://www.x.com", "_blank");
    };

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="left-footer">
                    <img src={logoImage} alt="logo" className="logoImage" />
                    <p style={{ textAlign: "justify", paddingLeft: '2%', margin: '0' }}>
                        Buildmate+ is the ultimate construction enablement platform, offering a seamless experience for clients and professionals alike. With its user-friendly interface, innovative features, and strong community, Buildmate+ is revolutionizing the construction industry, making dreams a reality.
                    </p>
                    <div className="socialMedia">
                        <img
                            src={facebook}
                            alt="facebook"
                            className="mediaImg"
                            onClick={openFacebookPage}
                        />
                        <img
                            src={linkedin} alt="linkedin" className="mediaImg"
                            onClick={openLinkedin}
                        />
                        <img
                            src={instagram} alt="insta" className="mediaImg"
                            onClick={openInsta}
                        />
                        <img
                            src={twitter} alt="twitter" className="mediaImg"
                            onClick={openTwitter}
                        />
                    </div>
                </div>
                <div className="middle-footer">
                    <h1 style={{ margin: '0' }}>Support</h1>
                    <p style={{ margin: '8% 0 0 0' }}>Help Center</p>
                    <p style={{ margin: '8% 0 0 0' }}>Contact Us</p>
                    <p style={{ margin: '8% 0 0 0' }}>FQA</p>
                    <p style={{ margin: '8% 0 0 0' }}>Community</p>
                </div>
                <div className="right-footer">
                    <h1 style={{ margin: '0' }}>Contact Us</h1>
                    <p style={{ margin: '3% 0 0 0' }}>Feel free to contact & reach us</p>
                    <div className="contact-info">
                        <div className="contact-logo">
                            <div className="contact-detail"><img src={phone} alt="phone" className="c-logo" /><p style={{ margin: ' 0 ', paddingLeft: '5%' }}>123-456-7890</p></div>
                            <div className="contact-detail"><img src={email} alt="email" className="c-logo" /><p style={{ margin: '0', paddingLeft: '5%' }}> info@buildmateplus.com</p></div>
                            <div className="contact-detail"><img src={gps} alt="gps" className="c-logo" /><p style={{ margin: '0 ', paddingLeft: '5%' }}>123 Main Street, City, Country</p></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>© 2024 Buildmate+. All Rights Reserved.</p>
                <Link to="/privacy-policy">Privacy and Policy</Link>
            </div>
        </div>
    );
}

export default Footer;