import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "../../css/banner.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner-section">
      <Row className="banner-container">
        <Col xs={12} md={6} className="banner-top-left">
          <div className="content-top-left"></div>
        </Col>
        <Col xs={12} md={6} className="banner-top-right">
          <h1>REVOLUTIONIZING THE PROCESSING OF OIL AND GAS WHILE REDUCING GREEN HOUSE GASES (GHG's)</h1>
          <h4>
          REDUCING EMISSIONS AT A GLOBAL SCALE WILL HELP THE WORLD GET TO CARBON-NEUTRAL AND CARBON NET-ZERO WELL AHEAD OF TARGET DATE.
          </h4>
          <ul>
            <li>
            Most efficient elimination and monetizing of flaring
            </li>
            <li>
            Most efficient low carbon production of oil and gas
            </li>
            <li>
            Most efficient CAPEX and OPEX of oil and gas pipeline infrastructures
            </li>
            <li>
            Most efficient method of Natural Gas Liquids (NGL) recovery
            </li>
            <li>
            Most efficient method of all hydrocarbon condensates recovery
            </li>
          </ul>
          <button
            onClick={() => {
              navigate("/technology", {
                state: { scrollTo: "our_rehm" },
              });
            }}
          >
            LEARN MORE
          </button>
        </Col>
      </Row>
      {/* <Row className="banner-container">
        <Col xs={12} lg={6} className="banner-left">
          <div className="content-left">
            <h1>USING SOLAR ENERGY CAPTURED BY THE OCEAN USING ARCS</h1>

            <p>
              ARCS provides a means to use solar energy captured by the oceans
              for emission-free power generation.
            </p>
          </div>
        </Col>
        <Col xs={12} lg={6} className="banner-right">
          <div className="content-right">
            <h1>POWER GENERATION ENERGY RECOVERY USING SWERS</h1>
            <p>
              SWERS provides ability to save water and recover waste energy in
              thermal power plants.
            </p>
          </div>
        </Col>
      </Row> */}
    </div>
  );
};

export default Banner;
