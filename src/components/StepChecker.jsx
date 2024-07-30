import React from "react";
import '../css/StepChecker.css'

const StepChecker = (props) => {
    return (
        <div className="Step-Checker">
            <div>
                <span className="green-ball">{props.num}</span>
                <div className="green-line" style={props.active ? {backgroundColor: "var(primary-green)"} : {backgroundColor: "#D9D9D9"} }></div>
            </div>
            <p>{props.title}</p>
        </div>
    )
}

export default StepChecker;