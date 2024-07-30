import React from "react"
import UserAuth from "../UserAuth.jsx"
import "../../css/HomeBar.css"

const HomeBar = () => {
    return (
        <div className="home-bar">
            <div className="title">
                <h2>Rocket<b>Class</b></h2>
            </div>
            <div className="home-bar-options">
                <p>Quem Somos?</p>
                <p>Disciplinas</p>
                <p>Aplicativo</p>
                <p>FAQ</p>
            </div>
            <div>
                <UserAuth />
            </div>
        </div>
    )
} 

export default HomeBar