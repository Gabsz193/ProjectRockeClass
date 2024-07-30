import React from "react";
import "../../../css/css-prot2/ProcessBar.css"

const ProcessBar = ({props, number}) => {
    return(
        <div className="process-bar">
            <div>
                <div className="bola-verde">{number}</div>
                <p>{props}</p>
            </div>
            <div className="bar">
                <div className="barra-verde"></div>
            </div>
        </div>
    )
}

export default ProcessBar