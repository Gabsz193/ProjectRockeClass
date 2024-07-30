import React from "react";
import Field from "../Fields/Field";
import ProcessBar from "./ProcessBar";

const ResponsavelInfoField = () => {
    return(
        <div className="aluno-info-field">
           <ProcessBar number={"2"} props={"Dados do responsável"} />
            <div className="col1">
                <Field props={"Insira o nome completo do responsável"} title={"Nome completo"} />
                <Field props={"Insira o e-mail do responsável"} title={"Endereço de e-mail"} />
            </div>
            <div className="col2">
                <Field props={"000.000.000-00"} title={"CPF"} />
                <Field props={"(00) 0 0000-0000"} title={"Número de telefone"} />
            </div> 
        </div>
    )
}

export default ResponsavelInfoField