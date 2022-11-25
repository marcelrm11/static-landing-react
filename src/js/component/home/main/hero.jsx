import React from "react";

import Button from "../../misc/button.jsx";

function Hero(props) {
    return (
        <div className="container-fluid pb-5 px-3 pt-2 bg-light">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Button label={props.cta} color={props.buttonColor}/>
        </div>
    )
}

export default Hero;