import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import '../css/HomeBar.css'
import { Link } from "react-router-dom";

class HomeBar extends React.Component {
    render() {
        return (
            <div className="HomeBar">
                <Link to="/"><Title /></Link>
                <div>
                    <Link to='/Construcao' ><a href="#">Quem somos?</a></Link>
                    <Link to='/Construcao'><a href="#">Disciplinas</a></Link>
                    <Link to='/Construcao' ><a href="#">Aplicativo</a></Link>
                    <Link to='/Construcao'><a href="#">FAQ</a></Link>
                </div>
                <div>
                    <Link to="/Login" ><a href="#" className="entrar-button">Entrar</a></Link>
                    <Link to="/Cadastro"><Button title="Cadastre-se" style="primary-button" /></Link>
                </div>
            </div>
        )
    }
}

export default HomeBar;