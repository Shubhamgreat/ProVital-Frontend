import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section">
                    <h4>Proactively</h4>
                    <p>Optimize your lifestyle and reverse chronic diseases with expert guidance.</p>
                </div>
                <div className="footer__section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/find-doctor">Find a Doctor</a></li>
                        <li><a href="/practitioners">For Practitioners</a></li>
                        <li><a href="/resources">Resources</a></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                        <li><a href="https://linkedin.com">LinkedIn</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© 2025 Proactively. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
