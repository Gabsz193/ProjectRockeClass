import React from "react";
import '../css/SearchField.css'

const SearchField = (props) => {
    return (
        <input className="Search-Field" type="text" placeholder={props.placeholder} />
    )
}

export default SearchField;