import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-top">
        <div className="tag">
          <h1>CONTACT US</h1>
        </div>
      </div>
      <Row className="contact-bottom">
        <Col className="contact-bottom-left">
          <div className="contact-bottom-left-content">
            <h1>REACH OUT TO US</h1>
            <p>
              Fill out the contact form to the right and someone from our
              organization will reach out to you at their earliest convienece.
            </p>
            <h6>LCT360, LLC</h6>
            <h6>2150 TOWN SQUARE PL #200</h6>
            <h6> SUGARLAND, TX 77479</h6>
            <h6>U.S.A</h6>
          </div>
        </Col>
        <Col className="contact-bottom-right">
          <table>
            <tr>
              <tr>
                <input type="text" />
                <span>Name *</span>
              </tr>
              <tr>
                <input type="text" />
                <span>Company </span>
              </tr>
              <tr>
                <input type="number" />
                <span>Phone *</span>
              </tr>
              <tr>
                <input type="email" />
                <span>Email *</span>
              </tr>
              <tr>
                <textarea />
                <span>Your Message</span>
              </tr>
            </tr>
            <button>SEND</button>
          </table>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
