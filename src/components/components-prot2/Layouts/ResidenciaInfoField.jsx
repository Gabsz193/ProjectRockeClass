import React from "react";
import Field from "../Fields/Field";
import ProcessBar from "./ProcessBar";

const ResidencialInfoField = () => {
    return(
        <div className="aluno-info-field">
           <ProcessBar number={"3"} props={"Dados de residência"} />
            <div className="col1">
                <Field props={"Insira o CEP da residência"} title={"CEP"} />
                <div className="col12">
                    <Field title={"Número da residência"} />
                    <Field title={"Complemento"} />
                </div>
                <Field title={"Cidade"} />
            </div>
            <div className="col2">
                <Field title={"Logradouro"} />
                <Field title={"Bairro"} />
                <Field title={"Estado"} />
            </div> 
        </div>
    )
}

export default ResidencialInfoField