import React from "react";

import '../css/HabilidadesCard.css'

const HabilidadeCard = (props) => {
    return (
        <div className="habilidades-card">
            <div className="title">
                <p className={props.isForte ? "forte" : "melhorar"}><span className={props.isForte ? "ballGreen" : "ballRed"}></span>{props.isForte ? "Habilidades fortes" : "Habilidades a melhorar"}</p>
            </div>
            <div className="habilidades">
                <div className="habilidade">
                    <p className="competencia">
                        EF04MA11 - Matemática (4º ano)
                    </p>
                    <p className="descricao">
                        Identificar regularidades em sequências numéricas compostas por múltiplos de um número natural.
                    </p>
                </div>
                <div className="habilidade">
                    <p className="competencia">
                        EF04MA27 - Matemática (4º ano)
                    </p>
                    <p className="descricao">
                        Analisar dados apresentados em tabelas simples ou de dupla entrada e em gráficos de colunas ou pictóricos, com base em informações das diferentes áreas do conhecimento, e produzir texto com a síntese de sua análise.
                    </p>
                </div>
                <div className="habilidade">
                    <p className="competencia">
                        EF03CI10 - Ciências (3º ano)
                    </p>
                    <p className="descricao">
                        Identificar os diferentes usos do solo (plantação e extração de materiais, dentre outras possibilidades), reconhecendo a importância do solo para a agricultura e para a vida.
                    </p>
                </div>
                <div className="habilidade">
                    <p className="competencia">
                        EF15AR19 - Arte (1º ao 5º ano)
                    </p>
                    <p className="descricao">
                        Descobrir teatralidades na vida cotidiana, identificando elementos teatrais (variadas entonações de voz, diferentes fisicalidades, diversidade de personagens e narrativas etc.).
                    </p>
                </div>

            </div>
        </div>
    )
}

export default HabilidadeCard;