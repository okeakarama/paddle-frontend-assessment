import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/Navbar.css';
import { FaBars} from 'react-icons/fa';

const Navbar = () => {
    
    function navMob(){
        var x = document.getElementById("myLinks");
        // var x = ReactDOM.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    return (
        
        <nav className="dt w-100 border-box pa3 ph5-ns pt4 topnav" id="topnav">
            <a 
                className="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
                <img id="logo" src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
            </a>

            <div id="myLinks" className="dtc v-mid w-75 tr">
                <a className="link dim white f6 f7-ns dib mr3 mr4-ns" href="/about" title="About">ABOUT US</a>
                <a className="link dim white f6 f7-ns dib mr3 mr4-ns" href="/blog" title="blog">BLOG</a>
                <a className="f6 grow link f6 f7-ns br-pill pv3 ph4 mb2 dib white bg-dark-blue hover-bg-purple" href="#0">CONTACT US</a>
            </div>

            <a href="javascript:void(0);" onClick={() => navMob()} id="ham" className="icon">
                <FaBars className="mh3"/>
            </a>
        </nav>
    );
}

export default Navbar;