import React from "react";
import moreOptionIcon from '../svg/more-options-icon.svg'
import { Link } from "react-router-dom";

const AlunoRankingCard = (props) => {
    return (
        <li className="aluno-ranking-card">
            <img src={props.image} alt="" />
            <div style={props.bold === true ? {fontWeight: 600} : null} >{props.num}. {props.nome}</div>
            <Link to={`/Professor/Filter-students/Aluno?name=${props.nome}&turma=${props.turma}`} >
                <img src={moreOptionIcon} alt="" />
            </Link>
        </li>
    )
}

export default AlunoRankingCard;