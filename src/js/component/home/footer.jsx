import React from "react";

function Footer(props) {
    return (
        <footer className="py-4 bg-dark text-center text-light position-absolute bottom-0 w-100">
            <p className="mb-0">© {props.year} {props.text}</p>
        </footer>
    )
}

export default Footer;