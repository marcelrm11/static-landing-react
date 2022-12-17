import React from "react";

import Hero from "./main/hero.jsx";
import Card from "./main/card.jsx";
import data from "../products.json";

function Main() {
  const products = data.products;
  const hero = {
    title: "A Warm Welcome!",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis cumque aperiam deleniti optio qui? Magni, voluptate adipisci repellat culpa nemo id saepe tempore porro cumque necessitatibus deleniti? Fuga, obcaecati ab?",
    buttonColor: "primary",
    cta: "Call to action!",
  };
  const cards = products.map(({ id, images, title, description, price }) => {
    return (
      <Card
        key={id}
        imgUrl={images[0]}
        title={title}
        text={description}
        cta={"Buy now!"}
        price={price}
      />
    );
  });

  return (
    <div>
      <Hero {...hero} />
      <article className="data-card-group d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-stretch my-3 flex-wrap">
        {cards}
      </article>
    </div>
  );
}

export default Main;
