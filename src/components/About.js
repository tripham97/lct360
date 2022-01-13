import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "../css/About.css";
import Founder from "./Founder";


const About = () => {
  return (
    <>
      <div className="about-heading">
        <div className="about-tag">
          <h1>ABOUT US</h1>
        </div>
      </div>

      <div className="banner-container-1">
        <div className="content-left">
          <h1>WHAT IS</h1>
         
          <h1>LCT360</h1>
        </div>

        <div className="content-right">
          <h4>
          LCT360 was founded in Sugarland, Texas with the mission of bringing optimizing technologies to the Upstream, Midstream and Downstream Petrochemical industry while providing Low Carbon Footprint productions and aiding in climate control. Our low carbon technology not only significantly reduces Green House Gas (GHG’s) emissions but also enhances the entire industry by both increasing revenue and providing sustainability across the entire spectrum from production to consumer.
          </h4>
          <p>
There are three major components of our technology: Optimized and Integrated Oil – Gas To-Spec Productions reducing loads on Gas Plants or optimizing them, flare gas recoveries, and resultant Oil and Gas pipeline flow capacity increases. Our low carbon technology applies to upstream, midstream, and downstream operations in the petrochemical industry.


          </p>
          <p>
          Our technology application starts from the reduction and elimination of flaring into the atmosphere, to increasing new oil volume recoveries, to boosting the recoveries of Natural Gas Liquids to the highest possible levels, and to changing the economics of Liquefied Natural Gas production plants.
          </p>
        </div>
      </div>

      <div className="about-banner2">
        <div className="about-banner2-left">
          <div className="ceo-card">
            <Founder
              name="KIRTI PATEL"
              title="FOUNDER AND CTO"
              linkedln="https://www.linkedin.com/in/k-patel-220238177"
              img="images/founder.jpg"
            />
          </div>
        </div>
        <div className="about-banner2-right">
          <h1>WHO IS</h1>
          <h1>LCT360</h1>
          <h6>KIRTI PATEL</h6>
          <p>
          Lead Supervisory positions for Front End Pre-FEED Conceptuals, FEED’s to detailed design of many of the world’s most significant offshore and onshore projects. Including, LNG, NGL, Oil, Gas, Waxy Crudes, Heavy Crudes, difficult Emulsion-Crudes, Produced Water Processing, to including evaluations of flow assurance to sub-surface/surface facility issues. Including multi-phase, heavy crudes, waxy crudes, dense-phase, tar-sands oil-diluents, flow lines, optimization and cost studies. Can start from raw field data and completely design oil and gas process facilities. Other past experience includes Plant Designs for Ethylene, Propylene, Ethoxylation, Polyols, & Methanol productions per License Packages (Fluor, United Engineers).
          </p>
          <a href="/images/EXPERIENCE LIST OF PROJECTS.pdf"> LIST OF PROJECTS EXPERIENCE</a>
        </div>
      </div>
      <div className="about-banner2 bg-blue">
        <div className="about-banner2-left">
          <div className="ceo-card">
            <Founder
              name="DR. JAY PATEL"
              title="CEO"
              img="images/jay_patel-white.png"
              linkedln="https://www.linkedin.com/in/jay-patel-77795910b/"
            />
          </div>
        </div>
        <div className="about-banner2-right">
          <h1>WHO IS</h1>
          <h1>LCT360</h1>
          <h6>DR. JAY PATEL</h6>
          <p>
            Jay Patel is an MD in Medicine and a Philanthropist having supported
            many initiatives across various institutions and geographies. Being
            a visionary evangelist and consensus team-builder, he set foot
            within entrepreneurship and founded several companies to help
            businesses reach their true potential. His commercial and business
            acumen provides invaluable leadership to all his projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
