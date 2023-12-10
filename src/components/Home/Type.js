import React from "react";
import Typewritter from "typewriter-effect";

function Type(){
    return(
        <Typewritter
            options={{
                strings:[
                    "Software Developer",
                    "Beta Tester",
                    "Debugger",
                    "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;