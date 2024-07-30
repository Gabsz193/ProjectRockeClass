import React from "react";
import InfoBar from "../../../components/InfoBar";
import NavigationBar from "../../../components/NavigationBar";
import '../../../css/ProfessorAlunoDashboard.css'
import Button from '../../../components/Button'
import back from '../../../svg/arrow-left.svg'
import VisaoGeralCard from "../../../components/VisaoGeralCard";
import HabilidadeCard from "../../../components/HabilidadesCard";
import { Link } from "react-router-dom";
import InstituicaoBanner from "../../../components/InstituicaoBanner";
import TurmaPolarChart from "../../../components/TurmaPolarChart";
import RendimentoChart from "../../../components/RendimentoChart";

const ProfessorVisualizarGeral = () => {
    return (
        <div className="Professor-Aluno-Dashboard">
            <NavigationBar />
            <div className="content">
                <InstituicaoBanner />
                <div>
                    <div className="top">
                        <Link to="/Professor/Filter-students"><Button title="Voltar" style="secondary-button" icon={back} /></Link>
                    </div>
                    <div className="visao-geral">
                        <p>Visão Geral</p>
                        <div>
                            <VisaoGeralCard title="Número de alunos:" result="1.352" />
                            <VisaoGeralCard title="Média dos alunos:" result="8,2" />
                            <VisaoGeralCard title="Avaliação:" result="4,4/5" />
                        </div>
                    </div>
                    <div className="estatisticas">
                        <p>Estatísticas</p>
                        <div style={{height: 500}}>
                            <TurmaPolarChart />
                            <RendimentoChart />
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

export default ProfessorVisualizarGeral;