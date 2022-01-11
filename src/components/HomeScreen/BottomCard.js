import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const BottomCard = () => {
  return (
    <>
      <Card
        className="card"
        style={{
          width: "18rem",
          background: "white",
          width: "400px",
          height: "260px",
          border: "1px solid lightgrey",
          borderRadius: "0",
        }}
      >
        <Card.Body
          style={{
            height: "200px",
            padding: "20px",
            paddingLeft: "60px",
            backgroundColor: "#326AC4",
            border: "0",
            color: "white",
          }}
        >
          <Card.Text>
            <h1 style={{ fontSize: "29px", fontWeight: "bold" }}>
              2030 WORLD BANK INITIATIVE
            </h1>
            <h4 style={{ fontSize: "16px" }}>
              Our company vision is in alignment with the World Bank’s “Zero
              Routine Flaring by 2030” initiative.
            </h4>
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "0",
                opacity: "1",
                marginTop: "20px",
                padding: "5px",
                width: "100px",
                fontWeight: "bold",
              }}
            >
              See More
            </button>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="card"
        style={{
          width: "18rem",
          background: "white",
          width: "400px",
          height: "260px",
          border: "1px solid lightgrey",
          // position: "absolute",
          // bottom: "-295%",
          // left: "41%",
          borderRadius: "0",
        }}
      >
        <Card.Body
          style={{
            height: "200px",
            padding: "20px",
            paddingLeft: "60px",
            backgroundColor: "#263340",
            color: "white",
          }}
        >
          <Card.Text>
            <h1 style={{ fontSize: "29px", fontWeight: "bold" }}>
              2050 CARBON NET ZERO
            </h1>
            <h4 style={{ fontSize: "16px" }}>
              Our company vision is also in alignment with reducing global
              carbon dioxide emissions to net zero by 2050.
            </h4>
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "0",
                opacity: "1",
                marginTop: "20px",
                padding: "5px",
                width: "100px",
                fontWeight: "bold",
              }}
            >
              See More
            </button>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="card"
        style={{
          width: "18rem",
          background: "white",
          width: "400px",
          height: "260px",
          border: "1px solid lightgrey",

          borderRadius: "0",
        }}
      >
        <Card.Body
          style={{
            height: "200px",
            padding: "20px",
            paddingLeft: "60px",
            backgroundColor: "#FCC12F",
            color: "black",
          }}
        >
          <Card.Text>
            <h1 style={{ fontSize: "29px", fontWeight: "bold" }}>
              PRESENT FUGITIVE EMISSIONS
            </h1>
            <h4 style={{ fontSize: "16px" }}>
              Our company technology will eliminate fugitive methane emissions
              along the million miles of transmission pipelines.
            </h4>
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "0",
                opacity: "1",
                marginTop: "20px",
                padding: "5px",
                width: "100px",
                fontWeight: "bold",
              }}
            >
              See More
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default BottomCard;
