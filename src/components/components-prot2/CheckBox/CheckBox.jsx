import React from "react";
import "../../css/CheckBox.css"

const CheckBox = ({props}) => {
    return(
        <div className="checkbox">
            <input type="checkbox"/>
            <label>{props}</label>
        </div>
    )
}

export default CheckBox