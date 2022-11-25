import React from "react";

function NavLinks(props) {
    let positionClass = "";
    if (props.position === "right") positionClass = "ms-auto";
    else if (props.position === "left") positionClass = "me-auto";
    else if (props.position === "center") positionClass = "mx-auto";

    const linksList = props.links.map(link => {
        return (
            <li className="nav-item" key={link}>
                <a className="nav-link" href="#">{link}</a>
            </li>
        )
    })

    return (
            <ul className={`navbar-nav ${positionClass} mb-2 mb-lg-0`}>
                {linksList}
            </ul>
    )
}

export default NavLinks;