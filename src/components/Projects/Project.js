import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import Ipod from "../../Assets/Projects/Ipod-pic.png";
import Music from "../../Assets/Projects/Music-Player.png";
import PingPong from "../../Assets/Projects/Ping-Pong.png";
import Bolgie from "../../Assets/Projects/Blogie.png";

function Projects(){
    return(
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works</strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent:"centre", paddingBottom: "10px"}}>
                <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Bolgie}
                            isBlog={false}
                            title="Blogie"
                            description="This project involves building a dynamic blog platform where users can create, edit, and delete their blog posts. The technology stack used is MERN, comprising MongoDB as the database, Express.js for the backend, React.js for the frontend, and Node.js as the runtime environment. To secure user authentication, JSON Web Tokens (JWT) will be employed."
                            ghLink="https://github.com/Os-7/Blog-Web"
                            // demoLink="https://github.com/Os-7/Blog-Web"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                           imgPath={Ipod}
                           isBlog={false}
                           title="I Pod"
                           description="It is a Mini Ipod in which you can listen musics and can able to switch themes and wallpaper of the Ipod. It is an intresting react project and best for new react learners. It also have gesture controlled navbar changer in its wheel which gives you a real I pod like expreince."
                           ghLink="https://github.com/Os-7/Mini-Ipod"
                           demoLink="https://os-7.github.io/Mini-Ipod/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Music}
                            isBlog={false}
                            title="Music Player(Static file)"
                            description="It is static Music player which consists basics of HTML and CSS. It contains two pages home and playlist pages. It can adjust itself according to the screen ratio. Best project for beginers to lern about HTML and CSS."
                            ghLink="https://github.com/Os-7/Wave_Studios"
                            demoLink="https://os-7.github.io/Wave_Studios/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={PingPong}
                            isBlog={false}
                            title="Ping Pong Game"
                            description="It is basic javaScript Project in which you can enjoy playing ping pong game.It is a single-player game controlled by keys on your keyboard. It contains two rods and one ball. As it is just a Java script project it is not dynamic to the screen ratio"
                            ghLink="https://github.com/Os-7/ping-pong-ball"
                            demoLink="https://so6rq9.csb.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects;