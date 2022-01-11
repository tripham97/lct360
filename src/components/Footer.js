import React, { useState } from "react";
import { Row, Col, Card, Button, Container, Modal } from "react-bootstrap";
import "../css/footer.css";
import { useNavigate } from "react-router-dom";
import FooterTab from "./FooterTab";

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
        <Col sm={12} md={6} className="footer-left">
          <img src="images/logo_c.png" alt="logo" style={{size:"50%"}} onClick={handleOnClick("")} />
         
          <p style={{color:"#24245E"}}>Copyright 2021 LCT360, LLC. All Rights Reserved. </p>
          <Button style={{ border: "none"}} onClick={toogleTerms}> Terms & Conditions </Button>
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
