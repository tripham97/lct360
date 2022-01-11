import React from "react";
import { Card } from "react-bootstrap";

const Founder = ({ name, title, img, linkedln }) => {
  return (
    <Card style={{ width: "100%", marginBottom: "0 !important" }}>
      <Card.Img variant="top" src={img} className="img-fluid" />
      <Card.Body>
        <Card.Text style={{ position: "relative" }}>
          <h2>{name}</h2>
          <p>{title}</p>
          <a href={linkedln} target="_blank">
            <img style={{}} src="./images/linkedin.png" className="line" />
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Founder;
