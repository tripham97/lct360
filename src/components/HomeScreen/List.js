import React from "react";
import { Cards } from "./Cards";
import "../../css/list.css";
import BottomCard from "./BottomCard";
import { Button } from "react-bootstrap";

const List = () => {
  return (
    <>
      <div className="list-banner">
        <h1>
          TRANSITIONING TO CLEAN ENERGY WILL OPTIMIZE THE OIL AND GAS INDUSTRY WHILE REDUCING EMISSIONS AT A GLOBAL SCALE
        </h1>

        <p>
          The introduction of REHM, ARCS, and SWERS technologies into the
          landscape will create a better future for the energy industry.
        </p>
      </div>

      <div className="list-banner-sub">
        <div className="top-cards">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default List;
