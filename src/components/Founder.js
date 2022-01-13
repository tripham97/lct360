import React from "react";
import { Card } from "react-bootstrap";
import * as FA from "react-icons/fa";

const Founder = ({ name, title, img, linkedln }) => {
  return (
    <Card style={{ width: "100%", marginBottom: "0 !important" , zIndex:"0"}}>
      <Card.Img variant="top" src={img} className="img-fluid" />
      <Card.Body>
        <Card.Text style={{ position: "relative" }}>
          <h2>{name}</h2>
          <p>{title}</p>
          <a href={linkedln} target="_blank">
            <FA.FaLinkedin size={30}  />
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Founder;
