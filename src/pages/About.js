//dependencies
import { FaArrowRight } from 'react-icons/fa';
//components
// import ComingSoon from '../components/ComingSoon';

//includes

//runs
const About = () => {
  return (
    <div>
      <section className="aboutsec1 white">
        <div className="crubs">
          <p> <hr /> ABOUT US</p>
        </div>
        <div>
          <h1 className="aboutTitle">Built for SaaS <br /> and the E-commerce</h1>
        </div>
        <div className="aboutDes">
          <p>
            Our tools are easy to setup and use with a user friendly dashboard that enables you setup, launch, automate 
            and manage multi-affiliate campaign in 5 minutes.
          </p>
        </div>
      </section>
      <div className="abs1Bg">
        <div className="bigSquare"></div>
        <div className="smallSquare"></div>
        <div className="abs1Circle"></div>
      </div>

      <section className="aboutsec2 white">
        <p>
          Metricks was developed because just like you, we need a product that could give us <b>good value.</b>
        </p>
      </section>
      
      <section className="aboutsec3 white">
        <div className="contain">
          <p>01</p>
          <h2 className="absheader"> <hr /> WHY US?</h2>
          <p>
            We pride ourselves in the ability to innovate and create world-class tools that provide reliable and efficient 
            touchpoints between advertisers and affiliates.
          </p>
        </div>
        <div className="contain">
          <p>02</p>
          <h2 className="absheader"> <hr /> GROWING WITH YOU </h2>
          <p>
            Leveraging on the best technology, we have developed an all-in-one affiliate marketing tracking software, a genuis
             tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.
          </p>
          <p>
            Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - 
            your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.
          </p>
        </div>
      </section>

      <div className="abs3Bg">
        <div className="bigSquare"></div>
        <div className="smallSquare"></div>
      </div>

      <section className="aboutsec4 white">
        <h1>Got a Question?</h1>
        <p>
          See how Metricks can help your business grow with best affiliate marketing tracking software.
        </p>
        <a href="#">Contact Us <FaArrowRight /></a>
      </section>

      <div className="abs4Bg">
        <div className="smallSquare"></div>
      </div>

    </div>
  );
}

  export default About;