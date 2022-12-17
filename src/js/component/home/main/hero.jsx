import React from "react";

import Button from "../../misc/button.jsx";

const h1Style = {
  fontSize: "clamp(42px, 6vw, 72px)",
};

function Hero({ title, text, cta, buttonColor }) {
  return (
    <div className="container-fluid pb-5 px-3 pt-2 mt-2 rounded bg-light">
      <h1 style={h1Style}>{title}</h1>
      <p>{text}</p>
      <Button label={cta} color={buttonColor} />
    </div>
  );
}

export default Hero;
