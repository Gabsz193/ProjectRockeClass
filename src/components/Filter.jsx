import React from "react";
import '../css/Filter.css'
import closeIcon from '../svg/close-icon.svg'

const Filter = (props) => {
    return (
        <div className="filter">
            <p>{props.title}<span><img src={closeIcon} alt="" /></span></p>
        </div>
    )
}

export default Filter;