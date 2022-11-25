import React from "react";

import NavLinks from "./navbar/nav-links.jsx";

const brand = "Start Bootstrap";
const linksList = ["Home", "About", "Services", "Contact"]

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{brand}</a>
                {/* button for collapsed menu */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLinks position="right" links={linksList} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;