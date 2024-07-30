import React from "react";
import "../../css/Buttons.css"

const Button = ({props}) => {
    return (
        <>
            <button className="normal-button">{props}</button>
        </>
    )
}

export default Button;