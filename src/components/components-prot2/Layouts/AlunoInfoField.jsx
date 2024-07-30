import React from "react";
import Field from "../Fields/Field";
import ProcessBar from "./ProcessBar";
import "../../../css/css-prot2/AlunoInfoField.css"
import PrimaryButton from "../Buttons/PrimaryButton";

const AlunoInfoField = () => {
    return(
        <div className="aluno-info-field">
            <ProcessBar number={"1"} props={"Dados do aluno"} />
            <div className="col1">
                <Field props={"Insira o nome completo do aluno"} title={"Nome completo"} />
                <div className="col12">
                    <Field props={"Série do aluno"} title={"Série"} />
                    <Field props={"Turma do aluno"} title={"Turma"} />
                </div>
            </div>
            <div className="col2">
                <Field props={"Dia/Mês/Ano"} title={"Data de nascimento"} />
                <div>
                    <p>O aluno precisa de atendimento médico?</p>
                    <div className="col2-options">
                        <PrimaryButton props={"Sim"}/>
                        <PrimaryButton props={"Não"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlunoInfoField