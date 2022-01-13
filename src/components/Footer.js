import React, { useState } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import "../css/footer.css";
import { useNavigate } from "react-router-dom";
import FooterTab from "./FooterTab";
import * as FA from "react-icons/fa";


const Footer = () => {
  const navigate = useNavigate();
  const [terms, setTerms] = useState(false);
  const toogleTerms = () => setTerms(!terms);

  const handleOnClick = (page) => () => {
    window.scrollTo(0, 0);
    navigate(`/${page}`);
  };

  return (
    <div className="footer-wrap">
      <Row>
      <div className="footer-link">
        <a href="https://twitter.com/Lct360">
          <FA.FaTwitter size={20} />
        </a>
        <a href="https://www.linkedin.com/company/lct-360">
          <FA.FaLinkedin  size={20} style={{marginLeft:"20px"}} />
        </a>
        <a href="https://www.facebook.com/Low-Carbon-Technology-360-108961375009916">
          <FA.FaFacebook size={20} style={{marginLeft:"20px"}}/>
        </a>
        <a href="https://t.me/LCT360">
          <FA.FaTelegram size={20} style={{marginLeft:"20px"}}/>
        </a>
      </div>
      </Row>
      <Row>
        <Col sm={12} md={6} className="footer-left">
          <img src="images/logo_c.png" alt="logo" style={{size:"50%"}} onClick={handleOnClick("")} />
          <p style={{color:"#24245E"}}>Copyright 2021 LCT360, LLC. All Rights Reserved. </p>
          <Button style={{ border: "none", fontSize:"20px"}} onClick={toogleTerms}> Terms & Conditions </Button>
          <Modal size="lg" show={terms} onHide={toogleTerms} centered>
            <Modal.Header closeButton>
              <Modal.Title>Terms and Conditions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FooterTab/>
            </Modal.Body>
          </Modal>

        </Col>
        <Col sm={12} md={6} className="footer-right">
        
          <button onClick={handleOnClick("")}> HOME</button>
          <button onClick={handleOnClick("technology")}> TECHNOLOGY</button>
          <button onClick={handleOnClick("about")}> ABOUT US</button>
          <button onClick={handleOnClick("contact")}> CONTACT</button>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
