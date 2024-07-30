import React, { Component, useState } from "react";
import Button from "../../../components/Button";
import '../../../css/ProfessorCadastraAluno.css'
import NavigationBar from "../../../components/NavigationBar";
import StepChecker from "../../../components/StepChecker";
import Field from "../../../components/Field";
import Active from '../../../svg/selection-active-icon.svg'
import Inactive from '../../../svg/selection-inactive-icon.svg'
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAniJm3NmOhJKNowoirC3JvPfzv6B4vAsY",
  authDomain: "projeto-aprendizado-infantil.firebaseapp.com",
  projectId: "projeto-aprendizado-infantil",
  storageBucket: "projeto-aprendizado-infantil.appspot.com",
  messagingSenderId: "426664506799",
  appId: "1:426664506799:web:c0af84641a24100914ab5a",
  measurementId: "G-MZPZNFXLQY"
};

const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const ProfessorCadastraAluno = () => {

    const [atendEsp,setAtendEsp] = useState(false)
    const [fields,setFields] = useState(
        {
            aluno: {
                nomeCompleto: "",
                serie: "",
                turma: "",
                dataNasc: "",
                isEspecial: false,
            },
            responsavel: {
                nomeCompleto: "",
                email: "",
                cpf: "",
                telNum: ""
            },
            residencia: {
                cep: "",
                numResidencia: "",
                complemento: "",
                cidade: "",
                logradouro: "",
                bairro: "",
                estado: ""
            }
        }
    )

    function handleFields(change, a, b) {
        var newFields = fields
        newFields[a][b] = change

        setFields(newFields)
    }

    function checkParamsFilled(obj) {
        for (const key in obj) {
          if (typeof obj[key] === 'object') {
            if (!checkParamsFilled(obj[key])) {
              return false;
            }
          } else {
            if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
              return false;
            }
          }
        }
        return true;
    }

    const checkParams = (obj) => {
        return true
    }

    const [dadosAluno, setDadosAluno] = useState(false)

    return (
        <div className="Professor-Cadastra-Aluno">
            <NavigationBar />
            <div className="Content">
                <div>
                    <div className="header">
                        <div>
                            <p>Cadastrar aluno</p>
                            <span>Insira as informações do aluno para cadastro</span>
                        </div>
                        <Link to="/Professor/Filter-students" className="buttonVoltar"><Button style="secondary-button" title="Voltar <" /></Link>
                    </div>
                    <hr />
                    <form className="cadastrar-content" onKeyDown={()=>console.log(checkParams(fields.aluno))}>
                        <StepChecker title="Dados do aluno" num="1" active={dadosAluno} />
                        <div className="fields">
                            <Field handleField={handleFields} keya={["aluno","nomeCompleto"]} title="Nome Completo" placeholder="Insira o nome completo do aluno" />
                            <div className="duplo">
                                <Field handleField={handleFields} keya={["aluno","serie"]} title="Série" />
                                <Field handleField={handleFields} keya={["aluno","turma"]} title="Turma" />
                            </div>
                        </div>
                        <div className="fields">
                            <Field handleField={handleFields} keya={["aluno","dataNasc"]} title="Data de nascimento" type="date" />
                            <p style={{marginTop: '3px'}}>O aluno precisa de cuidado especial?</p>
                            <div className="duplo">
                                <div className="atend" style={atendEsp ? {border: '1px solid var(--primary-green)'} : null} onClick={()=>{if(!atendEsp){setAtendEsp(!atendEsp);handleFields(!atendEsp,"aluno","isEspecial")}}}>
                                    <img src={atendEsp ? Active : Inactive} width={20} height={20} />
                                    <span style={atendEsp ? {color: 'var(--primary-green)'} : null}>Sim</span>
                                </div>
                                <div className="atend" style={!atendEsp ? {border: '1px solid var(--primary-green)'} : null} onClick={()=>{if(atendEsp){setAtendEsp(!atendEsp);handleFields(!atendEsp,"aluno","isEspecial")}}}>
                                    <img src={!atendEsp ? Active : Inactive} width={20} height={20} />
                                    <span style={!atendEsp ? {color: 'var(--primary-green)'} : null}>Não</span>
                                </div>
                            </div>
                        </div>
                        <StepChecker title="Dados do responsável" num="2" />
                        <div className="fields">
                            <Field handleField={handleFields} keya={["responsavel","nomeCompleto"]} title="Nome completo" placeholder="Insira o nome completo do responsável" />
                            <Field handleField={handleFields} keya={["responsavel","email"]} title="Endereço de e-mail" placeholder="Insira o e-mail do responsável" />
                        </div>
                        <div className="fields">
                            <Field handleField={handleFields} keya={["responsavel","cpf"]} title="CPF" placeholder="000.000.000-00" />
                            <Field handleField={handleFields} keya={["responsavel","telNum"]} title="Número de telefone" placeholder="(00) 0 00000-0000" />
                        </div>
                        <StepChecker title="Dados de residência" num="3" />
                        <div className="fields">
                            <Field handleField={handleFields} keya={["residencia","cep"]} title="CEP" placeholder="Insira o CEP da residência" />
                            <div className="duplo">
                                <Field handleField={handleFields} keya={["residencia","numResidencia"]} title="Número da residência" placeholder="Nº da casa" />
                                <Field handleField={handleFields} keya={["residencia","complemento"]} title="Complemento" placeholder="Complemento" />
                            </div>
                            <Field handleField={handleFields} keya={["residencia","cidade"]} title="Cidade" />
                        </div>
                        <div className="fields">
                            <Field handleField={handleFields} keya={["residencia","logradouro"]} title="Logradouro" />
                            <Field handleField={handleFields} keya={["residencia","bairro"]} title="Bairro" placeholder="Insira o nome do bairro" />
                            <Field handleField={handleFields} keya={["residencia","estado"]} title="Estado" />
                        </div>
                        <StepChecker title="Finalizar cadastro" num="4" />
                        <div className="buttons">
                            <Link to={checkParamsFilled() ? "/Professor/AlunoCadastrado" : null} onClick={()=>{
                                setDoc(doc(db, "aluno", fields.aluno.nomeCompleto), fields.aluno)
                                setDoc(doc(db, "responsavel", fields.responsavel.cpf), fields.responsavel)
                            }}><Button title="Finalizar cadastro" style="primary-button" /></Link>
                            <Link to="/Professor/Filter-students"><Button title="Cancelar" style="secondary-button" /></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfessorCadastraAluno;