import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa";

function Footer(){
  let date = new Date();
  let year = date.getFullYear();
  return(
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and devloped by Omshree Samal</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} OS</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-body">
              <li className="social-icons">
                <a
                  href="https://github.com/Os-7"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/OmshreeSamal"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/omshree-samal-5b5425228/"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/omshreesamal/"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    )
}

export default Footer;