//dependencies
import { Outlet, Link } from "react-router-dom";
import { FaBars, FaYoutube, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
//components

//includes
import styles from '../Github.module.css';

//runs
const Layout = () => {
    return (
      <div className="main">
        <nav className="dt w-100 border-box pa3 ph5-ns pt4 topnav" id="topnav">
            <a 
                className="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
                <img id="logo" src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
            </a>

            <div id="myLinks" className="dtc v-mid w-75 tr">
                <Link to="/about" className="link dim white f6 f7-ns dib mr3 mr4-ns">ABOUT US</Link>
                <Link to="/blog" className="link dim white f6 f7-ns dib mr3 mr4-ns">BLOG</Link>
                <Link to="/github" className="link dim white f6 f7-ns dib mr3 mr4-ns">GITHUB</Link>
                <Link to="/" class="f6 grow link f6 f7-ns br-pill pv3 ph4 mb2 dib white bg-dark-blue hover-bg-purple">CONTACT US</Link>
            </div>
            {/* "Hamburger menu" / "Bar icon" to toggle the navigation links */}
            <a href="javascript:void(0);" id="ham" class="icon" onclick="myFunction()">
                {/* <i class="fa fa-bars"></i> */}
                <FaBars className="mh3"/>
            </a>

        </nav>
  
        <Outlet />

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
                    <a href="#" className="white" id="footerLink">Terms of services</a>
                </div>
                <div className="dib w-20 white">
                    <a href="#" className="white" id="footerLink">Privacy policy</a>
                </div>
                <p className="white">Copyright {new Date().getFullYear()} @ Peddle Technologies. All Rights Reserved.</p>
            </div>

        </footer>
      </div>
    )
  };
  
  export default Layout;