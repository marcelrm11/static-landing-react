import React from "react";

import Button from "../../misc/button.jsx";

function Card(props) {
    return (
        <div className="card" style={{maxWidth: "24em"}}>
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <Button color="primary" label={props.cta} />
            </div>
        </div>
    )
}

export default Card;