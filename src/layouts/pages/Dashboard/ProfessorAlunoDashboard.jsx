import React from "react";
import InfoBar from "../../../components/InfoBar";
import NavigationBar from "../../../components/NavigationBar";
import '../../../css/ProfessorAlunoDashboard.css'
import AlunoBanner from "../../../components/AlunoBanner";
import Button from '../../../components/Button';
import back from '../../../svg/arrow-left.svg';
import DisciplinaPie from "../../../components/DisciplinaPie";
import DisciplinaLine from "../../../components/DisciplinaLine";
import VisaoGeralCard from "../../../components/VisaoGeralCard";
import HabilidadeCard from "../../../components/HabilidadesCard";
import { Link, useLocation } from "react-router-dom";



const ProfessorAlunoDashboard = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("name");
    const turma = searchParams.get("turma");

        return (
            <div className="Professor-Aluno-Dashboard">
                <NavigationBar />
                <div className="content">
                    <AlunoBanner nome={name} turma={turma} />
                    <div>
                        <div className="top">
                            <Link to="/Professor/Filter-students"><Button title="Voltar" style="secondary-button" icon={back} /></Link>
                        </div>
                        <div className="visao-geral">
                            <p>Visão Geral</p>
                            <div>
                                <VisaoGeralCard title="Média do aluno:" result={Math.round(Math.random()*5) + 2.5} />
                                <VisaoGeralCard title="Exercícios feitos:" result={`${Math.round(Math.random()*124)} de 124`} />
                                <VisaoGeralCard title="Melhor disciplina:" result={Math.round(Math.random()) == 0 ? "Matemática" : "Português"} />
                            </div>
                        </div>
                        <div className="estatisticas">
                            <p>Estatísticas</p>
                            <div>
                                <DisciplinaPie
                                    matematica={10}
                                    portugues={20}
                                    ciencias={30}
                                    arte={40}
                                />
                                <DisciplinaLine alunos={name} />
                            </div>
                        </div>
                        <div className="habilidadesSuper">
                            <p>Habilidades</p>
                            <div>
                                <HabilidadeCard isForte={true} />
                                <HabilidadeCard isForte={false} />
                            </div>
                        </div> 
                    </div>
                </div>
                <InfoBar nome="Sérgio" />
            </div>
        )
}

export default ProfessorAlunoDashboard;