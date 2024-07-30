import React, { Component } from "react";
import HomeBar from "../HomeBar";
import '../../css/Home.css'
import Button from "../../components/Button";
import icon from '../../svg/arrow-right.svg'
import icon2 from '../../svg/playstore-button.svg'
import PurpleLine from "../PurpleLine";
import homeImage1 from '../../images/homeImage1.png'
import homeImage2 from '../../images/homeImage2.png'
import { Link } from "react-router-dom";

class HomeScreen extends Component {
    render() {
        return (
            <div className="Home">
                <HomeBar />
                <div className="Home-content">
                    <div className="Home-infos">
                        <p className="title">Aprendizado e acompanhamento pedagógico</p>
                        <p className="big-text">
                            Uma plataforma especializada <br />
                            em aprendizado infantil e <br />
                            acompanhamento escolar
                        </p>
                        <p className="small-text">
                            O <span style={{fontWeight: 600}}>Rocket<span style={{color: "var(--primary-purple)"}} >Class</span></span> busca facilitar o processo de ensino e fixação de conteúdos <br />
                            do ensino fundamental I a partir de uma interface interativa para os alunos e um <br />
                            sistema de fácil acesso para professores e instituições
                        </p>
                    </div>
                    <div className="Home-buttons">
                        <Link to="/Construcao"><Button title="Começar" style="primary-button" icon={icon} /></Link>
                        <Link to="/Construcao"><Button title={"Saiba Mais +"} style="secondary-button" /></Link>
                    </div>
                </div>
                <div className="ImagePlaceholder">
                    <img src={homeImage1} alt="" />
                    <img src={homeImage2} alt="" />
                </div>
                <PurpleLine />
            </div>
        )
    }
}

export default HomeScreen;