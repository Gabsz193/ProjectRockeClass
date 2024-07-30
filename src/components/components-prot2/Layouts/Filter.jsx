import React from "react";
import "../../css/Filter.css"

const Filter = ({props}) => {
    return(
        <button className="filter">
            <span>{props}  X</span>
        </button>
    )
}

export default Filter;