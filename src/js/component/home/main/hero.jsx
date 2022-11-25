import React from "react";

import Button from "../../misc/button.jsx";

const h1Style = {
    fontSize: "clamp(42px, 6vw, 72px)"
}

function Hero(props) {
    return (
        <div className="container-fluid pb-5 px-3 pt-2 mt-2 rounded bg-light">
            <h1 style={h1Style}>{props.title}</h1>
            <p>{props.text}</p>
            <Button label={props.cta} color={props.buttonColor}/>
        </div>
    )
}

export default Hero;