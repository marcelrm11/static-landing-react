import React from "react";

import Hero from "./main/hero.jsx";
import Card from "./main/card.jsx";
import data from "../products.json"

function Main() {
    const products = data.products;
    const hero = {
        title: "A Warm Welcome!",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis cumque aperiam deleniti optio qui? Magni, voluptate adipisci repellat culpa nemo id saepe tempore porro cumque necessitatibus deleniti? Fuga, obcaecati ab?",
        buttonColor: "primary",
        cta: "Call to action!"
    }
    const cards = products.map(product => {
        return (
            <Card key={product.id}
                imgUrl={product.images[0]}
                title={product.title}
                text= {product.description}
                cta={"Buy now!"}
                price={product.price}
            />
        )
    })

    return (
        <div>
            <Hero 
                title={hero.title}
                text={hero.text}
                buttonColor={hero.buttonColor}
                cta={hero.cta}
            />
            <div className="data-card-group d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-stretch gap-3 my-3 flex-wrap">
                {cards}
            </div>
        </div>
    )
}

export default Main;