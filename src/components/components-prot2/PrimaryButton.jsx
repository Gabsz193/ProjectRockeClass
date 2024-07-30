import React from "react";
import "../../css/Buttons.css"

const PrimaryButton = ({props}) => {
    return (
        <>
            <button className="primary-button">{props}</button>
        </>
    )

}

export default PrimaryButton