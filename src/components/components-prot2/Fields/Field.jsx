import React from "react";
import "../../../css/css-prot2/Field.css"


const Field = ({props,title}) => {
    return(
        <div className="field">
            <p>{title}</p>
            <input type={"text"} placeholder={props}/>
        </div>
    )
}

export default Field