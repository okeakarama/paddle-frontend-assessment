import React from 'react';
import '../css/Footer.css';
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
    <footer className="mt6 tc" id="footer">
        <div>
            <FaYoutube className="mh3 white"/>
            <FaFacebook className="mh3 white"/>
            <FaLinkedin className="mh3 white"/>
            <FaInstagram className="mh3 white"/>
            <FaTwitter className="mh3 white"/>
        </div>

        <div className="flexbox pa3">
            <div className="dib w-20 white">
                <a href="#" className="white">Terms of services</a>
            </div>
            <div className="dib w-20 white">
                <a href="#" className="white">Privacy policy</a>
            </div>
            <p className="white">Copyright {new Date().getFullYear()} @ Peddle Technologies. All Rights Reserved.</p>
        </div>

    </footer>

)};

export default Footer;