import React from "react";
import '../css/Buttons.css'

const Button = (props) => {
    const img = <img src={props.icon} />

    return <button onClick={()=>props.action()} className={props.style}>{props.title}{props.icon ? img : null}</button>
}

export default Button;