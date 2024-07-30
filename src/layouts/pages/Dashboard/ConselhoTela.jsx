import React from "react";
import NavigationBar from "../../../components/NavigationBar";
import InfoBar from "../../../components/InfoBar";
import moreOptionsIcon from '../../../svg/more-options-icon.svg';
import Active from '../../../svg/selection-active-icon.svg'
import Inactive from '../../../svg/selection-inactive-icon.svg'
import { Link } from "react-router-dom";

const ConselhoTela = () => {
    return (
        <div className="Professor-Filter">
                <NavigationBar />
                <div className="Content">
                    <div>
                        <div style={{display: "flex",justifyContent: "space-between", alignItems: 'center', marginBottom: '46px'}}>
                            <p style={{fontSize: 32, fontWeight: 800}} className="title">Conselho de classe</p>
                        </div>
                        <table className="Alunos-Cadastrados">
                            <tr>
                                <th>Período</th>
                                <th>Quantidade de alunos</th>
                                <th>Data</th>
                                <th></th>
                            </tr>
                            <tr className="Aluno-Cadastrado">
                                <td className="nome">
                                    <div style={{display: 'flex'}}>
                                        <span style={{backgroundColor: '#1DEA3E', width: 20, height: 20, borderRadius: 100, display: 'flex'}}></span>
                                        <p>1º Trimestre</p>
                                    </div>
                                </td>
                                <td className="desempenho">398</td>
                                <td className="turma">30/04</td>
                                <td className="more">
                                    <Link to={`/Professor/Conselho/Trimestre?trimestre=1`}>
                                        <img src={moreOptionsIcon} alt="" />
                                    </Link>
                                </td>
                            </tr>
                            <tr className="Aluno-Cadastrado">
                                <td className="nome">
                                    <div>
                                        <img src={Active} />2º Trimestre
                                    </div>
                                </td>
                                <td className="desempenho">217</td>
                                <td className="turma">30/07</td>
                                <td className="more">
                                    <Link to={`/Professor/Conselho/Trimestre?trimestre=2`}>
                                        <img src={moreOptionsIcon} alt="" />
                                    </Link>
                                </td>
                            </tr>
                            <tr className="Aluno-Cadastrado">
                                <td className="nome">
                                    <div>
                                        <img src={Inactive} />3º Trimestre
                                    </div>
                                </td>
                                <td className="desempenho">255</td>
                                <td className="turma">30/11</td>
                                <td className="more">
                                    <Link to={`/Professor/Conselho/Trimestre?trimestre=3`}>
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

export default ConselhoTela;