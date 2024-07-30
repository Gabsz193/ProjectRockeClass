import React from "react";
import "../../../css/css-prot2/Buttons.css"

const SecondaryButton = ({props,image}) => {
    return (
        <>
            <button className="secondary-button">{props} <img src={image} alt=""/> </button>
        </>
    )

}

export default SecondaryButton;