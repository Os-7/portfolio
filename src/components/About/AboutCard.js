import React from "react";
import Card from "react-bootstrap/Card"
import { ImPointRight } from "react-icons/im"

function AboutCard(){
    return(
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hi everyone, I am <span className="purpule">Omshree Samal </span>
                        from <span className="purple">Noida, India.</span>
                        <br/> I am a final year student pursuing B.E. in Computer Science at <span className="purple">Chandigarh University</span> .
                        <br/>
                        <br/>
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Dancing
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Singing
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Sketching
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Painting
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Travelling
                        </li>
                    </ul>
                    <p style={{color:"rgb(155 126 172)"}}>
                        "Urge to learn as much as possible to bring some changes!"{" "}
                    </p>
                    <footer className="blockquote-footer">Omshree</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard;