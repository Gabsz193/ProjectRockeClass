import React from "react";
import AlunoPerfil from "./AlunoPerfil";

const AlunoRanking = () => {
    return(
        <div className="aluno-ranking">
            <AlunoPerfil props={"1. Luana Moura"}/>
            <AlunoPerfil props={"2. Yan Silva"} />
            <AlunoPerfil props={"3. Toinho Cardozo"} />
        </div>
    )
}
export default AlunoRanking