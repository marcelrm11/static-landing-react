import React from "react";

function Footer(props) {
    return (
        <footer className="py-4 mt-4 bg-dark text-center text-light w-100">
            <p className="mb-0">© {props.year} {props.text}</p>
        </footer>
    )
}

export default Footer;