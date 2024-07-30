import React from "react";
import '../css/AlunoBanner.css'
import studentPhoto from '../images/aluno-placeholder2.png'

const AlunoBanner = (props) => {
    return(
        <div className="aluno-banner">
            <div className="aluno-info">
                <img src={studentPhoto} alt="" />
                <p className="name">{props.nome}</p>
                <p className="class">Aluno do {props.turma}</p>
            </div>
        </div>
    )
}

export default AlunoBanner;