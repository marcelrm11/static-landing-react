import React from "react";

import Button from "../../misc/button.jsx";

function Card({ imgUrl, title, text, cta, price }) {
  let cardText = text.length > 66 ? text.substring(0, 67) + "..." : text;
  return (
    <div className="card" style={{ maxWidth: "24em" }}>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{cardText}</p>
      </div>
      <h5 className="price">${price}</h5>
      <Button color="primary" label={cta} />
    </div>
  );
}

export default Card;
