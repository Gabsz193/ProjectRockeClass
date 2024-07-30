import React, { Component } from "react";
import InfoBar from "../../../components/InfoBar";
import NavigationBar from "../../../components/NavigationBar";
import '../../../css/ProfessorInicio.css'

class ProfessorInicioScreen extends Component {
    render() {
        return (
            <div className="Professor-Inicio">
                <NavigationBar />
                <div className="Content">
                    <div>
                        <div>
                            <p>Bem-vindo, Gabriel Araújo</p>
                        </div>
                    </div>
                </div>
                <InfoBar not={false} nome={"Sérgio"} />
            </div>
        )
    }
}

export default ProfessorInicioScreen;