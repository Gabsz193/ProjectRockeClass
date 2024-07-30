import React from "react";
import '../css/InfoBar.css'
import sinoIcon from '../svg/bell-icon.svg'
import professorPlaceholder from '../images/professor-placeholder.png'
import configIcon from '../svg/config-icon.svg'
import AlunoRanking from "./AlunoRanking";
import { Link } from "react-router-dom";

const InfoBar = (props) => {
    const sininho = (
        <Link to="/Construcao"><span><img src={sinoIcon} alt="" /><span style={props.not === true ?
            {
                display: "block",
                width: '10px',
                height: '10px',
                backgroundColor: 'var(--primary-green)',
                borderRadius: '100px',
                position: "relative",
                bottom: 15,
                right: -18
            } : {display: 'none'}
        }></span></span></Link>
    )

    const config = (
        <Link to="/Construcao"><span><img src={configIcon} alt="" /></span></Link>
    )

    return (
        <div className="Infobar">
            <div>
                <div className="sino-config">{[sininho,config]}</div>
                <div>
                    <div className="professor-card">
                        <img src={professorPlaceholder} alt="" />
                        <div>
                            <p>Luiz</p>
                            <span>Gestor escolar</span>
                        </div>
                    </div>
                </div>
                <AlunoRanking />
            </div>
        </div>
    )
}

export default InfoBar;