import React from "react";
import '../../../css/ProfessorCadAlunoSucesso.css'
import NavigationBar from "../../../components/NavigationBar";
import CadAlunoSucesso from '../../../svg/cad-aluno-sucesso.svg'
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const ProfessorCadAlunoSucesso = () => {
    return (
        <div className="Professor-Cadastro-Aluno-Sucesso">
            <NavigationBar />
            <div className="Content">
                <div>
                    <div className="things">
                        <img src={CadAlunoSucesso} alt="icone" width={300} />
                        <div className="text">
                            <p className="title">
                                Parabéns! O aluno foi cadastrado com sucesso
                            </p>
                            <p>
                                As informações de acesso ao aplicativo foram enviadas ao e-mail do responsável. O aluno já
                                está apto a realizar as atividades da plataforma.
                            </p>
                        </div>
                        <div className="buttons">
                            <Link to="/Professor/Inicio"><Button style="primary-button" title="Voltar à tela inicial" /></Link>
                            <Link to="/Professor/Register-students"><Button style="secondary-button" title="Cadastrar outro aluno" /></Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default ProfessorCadAlunoSucesso