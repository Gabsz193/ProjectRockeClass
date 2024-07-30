import React from "react";
import AlunoRanking from "./AlunoRanking";
import NotifConfig from "./NotifConfig";
import ProfessorPerfil from "./ProfessorPerfil";
import Person from '../../images/Person.png'
import "../../css/ProfessorPerfil.css"

const ProfessorPerfilBar = () => {
    return(
        <div className="professor-perfil-bar">
            <NotifConfig />
            <ProfessorPerfil props={"Gabriel Araújo"} image={Person} />
            <div className="ranking-aluno">
                <p>Ranking de alunos</p>
                <AlunoRanking/>
            </div>
        </div>
    )
}

export default ProfessorPerfilBar