import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "../../css/Heading.css";
import { useNavigate } from "react-router-dom";

const Heading = () => {
  const navigate = useNavigate();
  const handleOnClick = (page) => () => {
    window.scrollTo(0, 0);
    navigate(`/${page}`);
  };
  return (
    <div className="heading-main">
      <div className="left">
        <div className="top">
          <div>
            <h1>PROVIDING ENVIRONMENTALLY AND FINANCIALLY RESPONSIBLE OIL & GAS LOW CARBON TECHNOLOGIES</h1>
            <p>
            LCT360 brings revolutionary technology that changes all oil and gas production across the world. At the same time its global impact on Green House Gas (GHG) reductions will aid the industry transition towards a COP26 Carbon Neutral Future.
            </p>
            <div className="btn-group">
              <div className="btn">
                <button onClick={handleOnClick("technology")}>
                  LEARN MORE
                </button>
              </div>
              <div className="btn">
                <button onClick={handleOnClick("about")}> ABOUT US</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="methane-img"></div>
          <div className="content">
            <h4>
            OUR COMMITMENT TO YOU AND YOUR SUSTAINABILITY IN A CHANGING WORLD IS PARAMOUNT
            </h4>
            <p>
            LCT360 technologies will help the petroleum industry transition to clean energy.
            </p>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Heading;
