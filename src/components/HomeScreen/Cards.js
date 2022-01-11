import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../../css/card.css";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();
  const handleOnClick = (page) => () => {
    navigate(`/${page}`);
  };
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src="images/Mask Group 5.jpg"
          className="img-fluid"
        />
        <Card.Body>
          <Card.Text>
            <h2>FLARE CAPTURE AND MONETIZATION</h2>
            <p>
              Most efficient elimination and monetizing of onshore refinery, offshore platform, and land oil-well flaring. 
            </p>
            <button
              onClick={() => {
                navigate("/technology", {
                  state: { scrollTo: "our_arcs" },
                });
              }}
            >
              LEARN MORE
            </button>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          variant="top"
          src="images/Mask Group 26.jpg"
          className="img-fluid"
        />
        <Card.Body>
          <Card.Text>
            <h2>NATURAL GAS LIQUIDS RECOVERY </h2>
            <p>
             Most efficient method of Natural Gas Liquids recovery and hydrocarbon condensates recovery.
            </p>
            <button
              onClick={() => {
                navigate("/technology", {
                  state: { scrollTo: "our_swers" },
                });
              }}
            >
              LEARN MORE
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="images/Midstream.jpeg"
          className="img-fluid"
        />
        <Card.Body>
          <Card.Text>
            <h2>INCREASED PIPELINE CAPACITY </h2>
            <p>
            Most efficient CAPEX and OPEX of oil and gas pipeline infrastructures from capacity optimization.
            </p>
            <button
              onClick={() => {
                navigate("/technology", {
                  state: { scrollTo: "our_capacity" },
                });
              }}
            >
              LEARN MORE
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export { Cards };
