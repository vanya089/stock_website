import React from 'react';
import './Footer.scss'

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer__nav">
                <div>
                    <div className="footer__number-info">Need help? Call us</div>
                    <div className="footer__number">8(888)8887755</div>
                </div>
                <div className="footer__buttons">
                    <div className="footer__contact">Contact</div>
                    <div className="footer__jobs">Jobs</div>
                    <div className="footer__faq">FAQ</div>
                </div>
                <div>
                    <div className="footer__number-info">Get secret notes</div>
                    <input placeholder="Enter your email" type="email"/>
                </div>

            </div>
            <div className="footer__info">
                <div>© 2022, React stocks</div>
                <div>Privacy Policy</div>
            </div>
        </div>
    );
};

export default Footer;