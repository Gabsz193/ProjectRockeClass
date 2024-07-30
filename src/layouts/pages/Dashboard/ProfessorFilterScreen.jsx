import React, { Component } from "react";
import Button from "../../../components/Button";
import InfoBar from "../../../components/InfoBar";
import NavigationBar from "../../../components/NavigationBar";
import SearchField from "../../../components/SearchField";
import filterIcon from '../../../svg/filter-icon.svg'
import '../../../css/ProfessorFilter.css'
import Filter from "../../../components/Filter";
import NoAlunosCadastrados from "../../../components/NoAlunosCadastrados";
import AlunosCadastrados from "../../../components/AlunosCadastrados";
import { Link } from "react-router-dom";

class ProfessorFilterScreen extends Component {
    render() {
        return (
            <div className="Professor-Filter">
                <NavigationBar />
                <div className="Content">
                    <div>
                        <div style={{display: "flex",justifyContent: "space-between", alignItems: 'center', marginBottom: '46px'}}>
                            <p className="title">Alunos</p>
                            <Link to="/Professor/Register-students"><Button  style="primary-button" title="Adicionar aluno +" /></Link>
                        </div>
                        <SearchField placeholder="Pesquisar estudante por nome" />
                        <div className="Filter">
                            <div>
                                <div className="filtro-class">
                                    <p>Classificar por</p>
                                    <img src={filterIcon} alt="" />
                                </div>
                                <div className="filters">
                                    <Filter title="Turmas" />
                                </div>
                            </div>
                            <AlunosCadastrados />
                        </div>
                    </div>
                </div>
                <InfoBar nome="Sérgio" />
            </div>
        )
    }
}

export default ProfessorFilterScreen;