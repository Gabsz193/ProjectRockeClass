import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from '../Buttons/SecondaryButton.jsx'
import ProcessBar from "./ProcessBar";

const FinalizaCadastro = () => {
    return(
        <div className="aluno-info-field">
            <ProcessBar number={"4"} props={"Finalizar cadastro"} />
            <div className="finaliza-cadastro">
                <PrimaryButton props={"Finalizar cadastro"}/>
                <SecondaryButton props={"Cancelar"} />
            </div>
        </div>
    )
}

export default FinalizaCadastro