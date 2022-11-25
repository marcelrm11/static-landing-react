import React from "react";

function Button(props) {
    return (
        <button type="button" className={`btn btn-${props.color}`}>{props.label}</button>
    )
}

export default Button;