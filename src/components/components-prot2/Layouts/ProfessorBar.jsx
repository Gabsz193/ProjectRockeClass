import React from "react";
import BarButton from "../BarButton";
import "../../../css/css-prot2/ProfessorBar.css"
import HomeIcon from "../../../svg/svg-prot2/HomeIcon.svg"
import CalendarIcon from '../../../svg/svg-prot2/CalendarIcon.svg'
import ClassIcon from '../../../svg/svg-prot2/ClassIcon.svg'
import PersonIcon from '../../../svg/svg-prot2/PersonIcon.svg'
import BookIcon from '../../../svg/svg-prot2/BookIcon.svg'
import SairIcon from '../../../svg/svg-prot2/SairIcon.svg'

const ProfessorBar = () => {
    return(
        <div className="professor-bar">
            <div>
                <p className="project-name">RocketClass</p>
            </div>
            <div>
                <BarButton props={"Início"} image={HomeIcon} />
                <BarButton props={"Estudantes"} image={PersonIcon} />
                <BarButton props={"Materiais"} image={BookIcon} />
                <BarButton props={"Calendário"} image={CalendarIcon} />
                <BarButton props={"Turmas"} image={ClassIcon} />
            </div>
            <div className="sair-button">
                <BarButton props={"Sair"} image={SairIcon} />
            </div>
        </div>
    )
}

export default ProfessorBar