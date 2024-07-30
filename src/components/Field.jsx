import React from "react";
import '../css/Field.css'
import Active from '../svg/selection-active-icon.svg'
import Inactive from'../svg/selection-inactive-icon.svg'

const Field = (props) => {
    const spanText = <span style={
        {
            alignSelf: "flex-end",
            cursor: "pointer",
            color: "var(--primary-green)",
            lineHeight: "35px"
        }
    } >{props.spanText}</span>

    const handleChange = (change) => {
        var list = props.keya
        props.handleField(change.target.value,list[0],list[1])
    }

    return (
        <div className="Field">
            <p>{props.title}</p>
            <input onChange={handleChange} onMouseLeave={props.a} type={props.type} placeholder={props.placeholder} style={props.type == "checkbox" ? {display: 'none'} : null} />
            {spanText}
        </div>
    )
}

export default Field