import React from "react";
import OptionsIcon from '../../svg/OptionsIcon.svg'
import "../../css/AlunoPerfil.css"

const AlunoPerfil = ({image, props}) => {
    return(
        <div className="aluno-perfil">
            <div>
                <div className="aluno-foto"></div>
                <p>{props}</p>
            </div>
            <img className="options" src={OptionsIcon} />
        </div>
    )
}

export default AlunoPerfil