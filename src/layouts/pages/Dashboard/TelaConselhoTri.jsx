import React from "react";
import NavigationBar from "../../../components/NavigationBar";
import InfoBar from "../../../components/InfoBar";
import moreOptionsIcon from '../../../svg/more-options-icon.svg';
import Active from '../../../svg/selection-active-icon.svg'
import Inactive from '../../../svg/selection-inactive-icon.svg'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TelaConselhoTri = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const trimestre = searchParams.get("trimestre")
    

    return (
        <div className="Professor-Filter">
        <NavigationBar />
        <div className="Content">
            <div>
                <div style={{display: "flex",justifyContent: "space-between", alignItems: 'center', marginBottom: '46px'}}>
                    <p style={{fontSize: 32, fontWeight: 800}} className="title">Conselho de classe  - {trimestre}º Trimestre</p>
                </div>
                <table className="Alunos-Cadastrados">
                            <tr>
                                <th>Disciplina</th>
                                <th>Quantidade de alunos</th>
                                <th>Data</th>
                                <th></th>
                            </tr>
                            <tr className="Aluno-Cadastrado">
                                <td className="nome">
                                    <div style={{display: 'flex'}}>
                                        Matemática
                                    </div>
                                </td>
                                <td className="desempenho">78</td>
                                <td className="turma">30/04</td>
                                <td className="more">
                                    <Link to={`/Professor/Conselho/Trimestre/Materia?disciplina=matematica&trimestre=${trimestre}`}>
                                        <img src={moreOptionsIcon} alt="" />
                                    </Link>
                                </td>
                            </tr>
                            <tr className="Aluno-Cadastrado">
                                <td className="nome">
                                    <div>
                                        Português
                                    </div>
                                </td>
                                <td className="desempenho">56</td>
                                <td className="turma">30/07</td>
                                <td className="more">
                                    <Link to={`/Professor/Conselho/Trimestre/Materia?disciplina=portugues&trimestre=${trimestre}`}>
                                        <img src={moreOptionsIcon} alt="" />
                                    </Link>
                                </td>
                            </tr>
                        </table>
            </div>
        </div>
        <InfoBar nome="Sérgio" />
    </div>
    )
}

export default TelaConselhoTri;