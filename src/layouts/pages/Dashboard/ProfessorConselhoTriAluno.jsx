import React from "react";
import AlunoReprovados from "../../../components/AlunoReprovados";
import SearchField from "../../../components/SearchField";
import { Link } from "react-router-dom";
import NavigationBar from "../../../components/NavigationBar";
import filterIcon from '../../../svg/filter-icon.svg'
import Filter from "../../../components/Filter";
import Button from "../../../components/Button";
import InfoBar from "../../../components/InfoBar";

const ProfessorConselhoTriAluno = () => {
    return (
        <div className="Professor-Filter">
                <NavigationBar />
                <div className="Content">
                    <div>
                        <div style={{display: "flex",justifyContent: "space-between", alignItems: 'center', marginBottom: '46px'}}>
                            <p className="title">Alunos Reprovados</p>
                        </div>
                        <SearchField placeholder="Pesquisar estudante por nome" />
                        <div className="Filter">
                            <AlunoReprovados />
                        </div>
                    </div>
                </div>
                <InfoBar nome="Sérgio" />
        </div>
    )
}

export default ProfessorConselhoTriAluno;