import React, { useState, useEffect } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import "../css/Nav.css";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = (page) => () => {
    navigate(`/${page}`);
  };
  const [isBgBlack, setBgBlack] = useState(false);
  useEffect(() => {
    if (location.pathname !== "/") {
      setBgBlack(true);
    }
    if (location.pathname === "/") {
      setBgBlack(false);
    }
  }, [location.pathname]);

  return (
    <>
      <div className={`nav-wrap ${isBgBlack && "nav-bg-black"}`}>
        <Row>
          <Col xs={6} className="nav-left">
            <img
              src="images/logo_c.png"
              alt="logo"
              onClick={handleOnClick("")}
             
            />
          </Col>
          <Col xs={6} className="nav-right">
            <button onClick={handleOnClick("")}> HOME</button>

            <Dropdown className="tech-dropdown">
              <Dropdown.Toggle style={{color:"black"}}>TECHNOLOGY</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleOnClick("technology")}>
                  Our Technology
                </Dropdown.Item>

                <Dropdown.Item onClick={handleOnClick("supporting")}>
                  Supporting Data
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <button onClick={handleOnClick("about")}> ABOUT US</button>

            <button> MEDIA CENTER</button>
            <Dropdown>
              <Dropdown.Toggle>
                <hr />
                <hr />
                <hr />
                <hr />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleOnClick("technology")}>
                  Technology
                </Dropdown.Item>
                <Dropdown.Item onClick={handleOnClick("about")}>
                  About Us
                </Dropdown.Item>
                <Dropdown.Item onClick={handleOnClick("supporting")}>
                  Supporting Data
                </Dropdown.Item>
                <Dropdown.Item onClick={handleOnClick("contact")}>
                  Contact Us
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NavBar;
