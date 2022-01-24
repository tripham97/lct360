import React from "react";
import "../css/supporting.css";

const SupportingScreen = () => {
  return (
    <>
      <div className="main">
        <div className="tag">
          <h1>SUPPORTING DATA</h1>
        </div>
      </div>
      <div className="content-wrapper">
        <h1>LOW CARBON TECHNOLOGY</h1>
        <p>
          Its application starts from the reduction and elimination of flaring into the atmosphere, to increasing net oil volume recoveries, to boosting the recoveries of Natural Gas Liquids (NGL - Propane, etc) to the highest possible levels, and to changing the economics of Liquefied Natural Gas (LNG) production plants.
        </p>
        <div className="document-wrapper">
          <div className="document-img">
            <img src="images/hydrate.png" />
          </div>
          <div className="document-description">
            <h1>TECHNOLOGIES OVERVIEW</h1>
            <a href="images/hydrate.pdf" download={true}>
              {" "}
              <button>DOWNLOAD</button>
            </a>
            <p></p>
          </div>
        </div>

        <div className="document-wrapper">
          <div className="document-img">
            <img src="images/tech_comp.jpg" />
          </div>
          <div className="document-description">
            <h1>TECHNOLOGIES COMPARISION</h1>
            <a href="images/tech_comp.jpg" download={true}>
              {" "}
              <button>DOWNLOAD</button>
            </a>
            <p></p>
            {/* <p>Description of what this is needs to go in this space.</p> */}
          </div>
        </div>
        <div className="document-wrapper">
          <div className="document-img">
            <img src="images/gas-plant.jpg" />
          </div>
          <div className="document-description">
            <h1>GAS PLANT RECONFIGURATION </h1>
            {/* <p>Description of what this is needs to go in this space.</p> */}
            <a href="images/gas-plant.jpg" download={true}>
              {" "}
              <button>DOWNLOAD</button>
            </a>
            <p></p>
          </div>
        </div>
        <div className="document-wrapper">
          <div className="document-img">
            <img src="images/a.png" />
          </div>
          <div className="document-description">
            <h1>GAS PLANT NEW TECHNOLOGY</h1>
            <a href="images/a.png" download={true}>
              {" "}
              <button>DOWNLOAD</button>
            </a>
            <p></p>
            {/* <p>Description of what this is needs to go in this space.</p> */}
          </div>
        </div>
        <div className="document-wrapper">
          <div className="document-img">
            <img src="images/major-impact.jpg" />
          </div>
          <div className="document-description">
            <h1>MAJOR PROJECT IMPACTS</h1>
            <a href="images/major-impact.jpg" download={true}>
              {" "}
              <button>DOWNLOAD</button>
            </a>
            <p></p>
            {/* <p>Description of what this is needs to go in this space.</p> */}
          </div>
        </div>
        <div className="document-wrapper">
          <div className="document-img">
            <img src="images/lng.png" />
          </div>
          <div className="document-description">
            <h1>LNG RECEIVING PROCESS</h1>
            <a href="images/lng.png" download={true}>
              {" "}
              <button>DOWNLOAD</button>
            </a>
            <p></p>
            {/* <p>Description of what this is needs to go in this space.</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportingScreen;
