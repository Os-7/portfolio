import React from "react";
import{ Container, Row, Col } from "react-bootstrap"
import myImg from "../../Assets/avatar.svg"
import Tilt from "react-parallax-tilt"
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa";

function Home2(){
    return(
    <Container fluid className="home-about-section" id="about">
        <Container>
            <Row>
                <Col md={8} className="home-about-description">
                    <h1 style={{fontSize: "2.6em"}}>
                        LET ME<span className="purple"> INTRODUCE </span>
                    </h1>
                    <p className="home-about-body">
                        I am falling in Love with coding and I want lots of bugs so that i can code more and more,
                        At least that's what I think..... 🤔 
                        <br/>
                        <br/>
                        I am fluent in classics like
                        <i>
                            <b className="purple"> C++, C, JavaScript and Java</b>
                        </i>
                        <br/>
                        <br/>
                        Whenever possible, I also apply my passion for developing products with 
                        <b className="purple"> Node.js </b>and
                        <i>
                            <b className="purple">
                                {" "}
                                Modern JavaScript Library and Frameworks
                            </b>
                        </i>
                    </p>
                </Col>
                <Col md={4} className="myAvatar">
                    <Tilt>
                        <img src={myImg} className="img-fluid" alt="avatar"/>
                    </Tilt>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="home-about-social">
                    <h1>Find Me On</h1>
                    <p>
                        Feel free to <span className="purple">connect </span>with me
                    </p>
                    <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a 
                                href="https://github.com/Os-7"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"                                
                                >
                                    <AiFillGithub/>
                                </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/OmshreeSamal"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiOutlineTwitter/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/omshree-samal-5b5425228/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/omshreesamal/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillInstagram/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </Container>
    )
}

export default Home2;