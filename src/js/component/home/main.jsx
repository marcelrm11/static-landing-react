import React from "react";

import Hero from "./main/hero.jsx";
import Card from "./main/card.jsx";

function Main() {
    const hero = {
        title: "A Warm Welcome!",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis cumque aperiam deleniti optio qui? Magni, voluptate adipisci repellat culpa nemo id saepe tempore porro cumque necessitatibus deleniti? Fuga, obcaecati ab?",
        buttonColor: "primary",
        cta: "Call to action!"
    }
    const cards = [];
    for (let i = 0; i < 4; i++) {
        cards.push(
            <Card key={i}
                imgUrl={"https://picsum.photos/500/325"}
                title={"Card title"}
                text= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus modi vel ea delectus minima id fuga officiis soluta recusandae ipsum!"}
                cta={"Find out more!"}
            />)
    }

    return (
        <div>
            <Hero 
                title={hero.title}
                text={hero.text}
                buttonColor={hero.buttonColor}
                cta={hero.cta}
            />
            <div className="data-card-group d-flex flex-column flex-lg-row align-items-center gap-3 my-3">
                {cards}
            </div>
        </div>
    )
}

export default Main;