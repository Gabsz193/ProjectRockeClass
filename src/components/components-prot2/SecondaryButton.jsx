import React from "react";
import "../../css/Buttons.css"

const SecondaryButton = ({props,image}) => {
    return (
        <>
            <button className="secondary-button">{props} <img src={image}/> </button>
        </>
    )

}

export default SecondaryButton;