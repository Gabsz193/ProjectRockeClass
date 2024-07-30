import React from "react";
import "../css/Checkbox.css"

const Checkbox = (props) => {
    return (
        <div className="Checkbox">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="checkbox">{props.text}</label>
        </div>    
    )
}

export default Checkbox;