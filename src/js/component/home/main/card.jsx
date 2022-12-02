import React from "react";

import Button from "../../misc/button.jsx";

function Card(props) {
    const text = props.text.length > 66 ? props.text.substring(0, 67) + "..." : props.text;
    return (
        <div className="card" style={{maxWidth: "24em"}}>
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{text}</p>
            </div>
            <h5 className="price">${props.price}</h5>
            <Button color="primary" label={props.cta} />
        </div>
    )
}

export default Card;