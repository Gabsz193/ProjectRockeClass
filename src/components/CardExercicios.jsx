import React from "react";
import '../css/CardExercicios.css'

const CardExercicios = (props) => {
    return (
        <div className="card-exercicios" style={{ position: "fixed", left: props.mouseX, top: props.mouseY }} >
            <li>{props.materia}</li>
            <p>{props.exercicios} dos exercícios feitos</p>
            <div className="bar"><span style={{width:props.percentage+"%"}}>{props.percentage}%</span></div>
        </div>
    )
}

export default CardExercicios;