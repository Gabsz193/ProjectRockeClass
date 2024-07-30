import React from "react";

const ProfessorPerfil = ({image,props}) => {
    return(
        <div className="professor-perfil">
            <img src={image} />
            <div>
                <p>
                    {props} <br/>
                    <span className="ver-perfil">Ver perfil {'>'}</span>
                </p>
            </div>
        </div>
    )
}

export default ProfessorPerfil