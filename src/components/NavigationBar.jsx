import React from "react";
import {ReactComponent as ReactInicio} from '../svg/inicio-icon.svg'
import {ReactComponent as ReactAluno} from '../svg/aluno-icon.svg'
import {ReactComponent as ReactMateriais} from '../svg/materiais-icon.svg'
import {ReactComponent as ReactCalendario} from '../svg/calendario-icon.svg'
import {ReactComponent as ReactTurmas} from '../svg/turmas-icon.svg'
import {ReactComponent as ReactSair} from '../svg/sair-icon.svg'
import { ReactComponent as ReactInstituicao } from "../svg/instituicaoIcon.svg";
import { Link } from "react-router-dom";
import '../css/NavigationBar.css'

const NavigationBar = () => {
    return (
        <div className="NavigationBar">
            <div className="innerNavigationBar">
                <Link to="/"><p style={{paddingLeft: 22}} className="title">RocketClass</p></Link>
                <nav>
                    <ul>
                        <Link to="/Professor/Inicio"><li><ReactInicio className="svg"/><a href="">Início</a></li></Link>
                        <Link to="/Professor/Filter-students"><li><ReactAluno className="svg"/><a href="">Aluno</a></li></Link>
                        <Link to="/Professor/Visualizar-Geral"><li><ReactInstituicao className="svg"/><a href="">Instituição</a></li></Link>
                        <Link to="/Construcao"><li><ReactMateriais className="svg"/><a href="">Materiais</a></li></Link>
                        <Link to="/Professor/Conselho"><li><ReactCalendario className="svg"/><a href="">Conselho</a></li></Link>
                        <Link to="/Construcao"><li><ReactTurmas className="svg"/><a href="">Turmas</a></li></Link>
                    </ul>
                    <div className="Sair">
                        <Link to="/Home"><ReactSair className="svg" /><a className="sair" href="">Sair</a></Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavigationBar;