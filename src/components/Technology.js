import React, { useEffect } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "../css/Technology.css";
import { useLocation } from "react-router-dom";

const Technology = () => {
  const { state } = useLocation();
  useEffect(() => {
    if (state) {
      const { scrollTo } = state;
      const section = document.getElementById(scrollTo);
      section.scrollIntoView();
    }
  }, []);
  return (
    <div className="technology-container">
      <div className="technology-title">
        <div className="tech-box">
          <h1>TECHNOLOGY</h1>
          <h4>
          INDUSTRY-WIDE PRODUCTION OPTIMIZATION AND CLIMATE IMPACT TECHNOLOGIES
          </h4>
          <p>
            The introduction of LCT360 technologies into oil an gas production will optimize the entire economics of the petrochemical sector.
          </p>
        </div>
      </div>
      <div className="technology-content">
        <div className="technology-content-item">
          <Row className="banner-container" id="our_arcs">
            <Col xs={12} lg={6} className="banner-tech-top-left-1">
              <div className="content-techtop-left"></div>
            </Col>
            <Col xs={12} lg={6} className="banner-tech-top-right">
              <div className="content-tech-top-right">
                <h1>FLARE RECOVERY TECHNOLOGY</h1>
                <h4>
                The industry currently flares hydrocarbons into the atmosphere commonly where there is no nearby pipeline infrastructure, and otherwise during routine maintenance or safety driven flaring events. Flaring is igniting and burning of valuable excess hydrocarbon gases into the atmosphere across the industry, both onshore and offshore. These flared hydrocarbons release GHG’s such as carbon dioxide and methane that create large carbon footprints as well as increases global warming. 
                </h4>
                <p>
                The United States ranks second in the flaring of natural gas world-wide and thus a high GHG emitter and is responsible for a substantial loss of revenue in the oil and gas sector.  Texas and North Dakota alone account for 85% of the nation’s natural gas losses from flaring.  It is forecasted that in the year 2022, 22,600 new wells will be drilled across the United States.  According to a recent 2020 study, in the state of Texas, 6,589 wells were considered new drills, re-entries, and re-completions.  With early well completions, these permitted oil productions can be boosted by eliminating much of the flaring using LCT360’s technology.  This technology is also scalable to handle the substantially large gas flaring of major oil refineries around the globe.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="banner-container">
            <Col xs={12} lg={6} className="banner-tech-left">
              <div className="content-tech-left">
                <h1>ASSISTING CLIMATE CONTROL</h1>

                <h4>
The World Bank attributes the rise in global temperature partly to the 492 billion cubic feet of natural gas that is flared at oil and gas wellheads around the world annually resulting in more than 350 million tons of Carbon Dioxide emissions (CO2e). 


                </h4>
                <p>
                LCT360’s 99% flare recovery and natural gas stabilization technology can solve the increase in global warming, dramatically reduce GHG emissions, and reduce the world’s carbon footprint well ahead of the years 2050 target date.  LCT360 can also reduce the World Bank’s Global Gas Flaring Reductions Partnership and Zero Routing Flaring by 2030 initiative to a much sooner year.  Simply put, the installation of LCT360’s technology into the flare system at both oil and gas upstream and downstream facilities such as oil refineries, onshore well heads, and offshore platforms will create a greener earth for humanity.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={6} className="banner-tech-right-1">
              <div className="content-tech-right"></div>
            </Col>
          </Row>
          <Row className="banner-container" >
            <Col xs={12} lg={6} className="banner-tech-top-left-2">
              <div className="content-tech-top-left"></div>
            </Col>
            <Col xs={12} lg={6} className="banner-tech-top-right-2">
              <div className="content-tech-top-right">
                <h1>UNCONVENTIONAL TOWER-LESS GAS PROCESS</h1>
                <h4>
                Unconventional Tower-less Process for Condensate/NGL/HC-DewPointing with 99% C3+ Recovery
with Specification-Ready stabilized product streams.
                </h4>
                <p>
          At almost ½ the CAPEX/OPEX of the almost 100% of
the world's current 50 years old gas and cryogenics and tower based process technologies. The
compactness and flexibility of this process makes previously untenable projects feasible in both offshore
and onshore, starting from individual wellsites to greenfields, to retrofits, revamping existing
Condensate/NGL facilities. 
                </p>
              </div>
            </Col>
          </Row>

          <Row className="banner-container" id="our_swers">
            <Col xs={12} lg={6} className="banner-tech-left-1">
              <div className="content-tech-left">
                <h1>THE MOST ECONOMIC LNG PROCESS</h1>

                <h4>
                 This is the most economic of all LNG liquid processes for extracting heavier NGL components from "Rich" LNG cargoes. With no need for re-compression while delivering HHV Controlled, Gasification ready Liquid LNG or Pipeline Ready Gasification. With no need for Propane or Nitrogen Injections.
                </h4>
                <ul>
                  <li>
                  INCREASED GL REVENUES
                  </li>
                  <li>REDUCED Cost of Oil or BOE Produced</li>
                  <li>REDUCED Cost of Gas Produced</li>
                  <li>INCREASED Oil Throughputs - 2 to 3 times flow increase in existing pipeline infrastructures.</li>
                  <li>INCREASED Gas Throughputs - 3 to 3.5 times flow increase in existing pipeline infrastructures</li>
                  <li>REDUCED Various Process Plant Facilities - CAPEX/OPEX</li>
                  <li>REDUCED Pipeline Sizes, Class and Infrastructure costs - CAPEX/OPEX</li>
                  <li>ENVIRONMENTAL IMPACTS Profound Decrease of Flaring, Venting and Product GHG's</li>
                  <li>INCREASED Clean Fuels (e.g. NGL, LNG, CNG, GTL) closer to source, minus Refined Product logistics.</li>
                  <li>PROVIDES EXTRACTION OF C2(VARIABLE)/NGL from LNG while keeping LNG in Liquid Storage form.</li>
                  <li>CAN FINE-TUNE C2 EXTRACTION (close to 100% C2 Extraction) for HHV control - No N2 Injection.</li>
                  <li>PROVIDES LNG GASIFICATION OPTION. - For better Economic for either FSRU or Onshore Facility</li>
                  <li>PROVIDES BUYER/SELLER NGL Production/Trade Economics/Revenues - margins and strategies.</li>
                  <li>OPENS UP BUYING of wide Range LNG (Heavy-Content) Variable-Specs LNG Cargos.</li>
                  <li>OPENS UP FLEXIBILITIES/ECONOMICS of sourcing including Stranded Field Strategies</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={6} className="banner-tech-right-2">
              <div className="content-tech-right"></div>
            </Col>
          </Row>
          <Row className="banner-container" id="our_capacity">
            <Col xs={12} lg={6} className="banner-tech-top-left-3">
              <div className="content-tech-top-left"></div>
            </Col>
            <Col xs={12} lg={6} className="banner-tech-top-right">
              <div className="content-tech-top-right">
                <h1>INCREASED CAPACITY WITH REDUCED EMISSIONS</h1>
                <h4>
                Pipeline capacity increases can demonstrate decreased GHG Methane Emissions, end to end lifecycle lowered Carbon Footprints. Help achieve Carbon Neutral Crude Oil production improvements.
                </h4>
                <p>
                The United States maintains about 2 million miles of natural gas distribution mains and pipelines, 321,000 miles of gas transmission and gathering pipelines, 175,000 miles hazardous liquid pipeline, and 114 active liquid natural gas plants that are connected to natural gas transmission and distribution systems. These large pipes are up to 42” diameter, with most being more than 10” diameter. Operating pressure is between 1,450 psi and 2,175 psi.  A flange exists at approximately three positions per mile along the transmission lines resulting in a surface target area for fugitive methane emissions to occur.  Increasing the pipeline capacity thus decreasing the operating pressures of system allow for the fugitive methane leaks to not occur.
                </p>
              </div>
            </Col>
          </Row>

          {/* <Row className="banner-container">
            <Col xs={12} lg={6} className="banner-tech-left-2">
              <div className="content-tech-left">
                <h1>CONCEPT SUMMARY</h1>

                <h4>
                  Within a thermal power plant, a condenser accounts for
                  approximately 30% of the heat load. In current models, this
                  heat is wasted. The condenser is cooled using water running in
                  a loop that rejects heat to the atmosphere, via a cooling
                  tower.
                </h4>
                <p>
                  SWERS eliminates the use of water for condensing steam and
                  recovers waste heat for generating additional power. The
                  process is replaced by a closed loop refrigeration circuit
                  operating a turbo expander that generates additional
                  electrical power from the condenser waste heat, thereby,
                  saving water, increasing power output, and minimizing
                </p>
              </div>
            </Col>
            <Col xs={12} lg={6} className="banner-tech-right-3">
              <div className="content-tech-right"></div>
            </Col>
          </Row> */}
        </div>
      </div>
    </div>
  );
};

export default Technology;
