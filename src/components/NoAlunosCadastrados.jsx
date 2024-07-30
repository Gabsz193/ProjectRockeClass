import React from "react";
import noAlunosCadastrados from '../images/no-alunos-cadastrados-placeholder.png'

const NoAlunosCadastrados = () => {
    return (
        <div className="No-alunos-cadastrados">
            <div style={{textAlign: 'center'}}>
                <img src={noAlunosCadastrados} alt="" />
                <p style={{color: '#828282'}}>Não há alunos cadastrados</p>
            </div>
        </div>
    )
}

export default NoAlunosCadastrados;