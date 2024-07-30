import React from "react"
import "../css/UserAuth.css"
import PrimaryButton from "./Buttons/PrimaryButton.jsx"
import Button from "./Buttons/Button.jsx"

const UserAuth = () => {
    return (
        <div className="user-auth">
            <Button props={"Entrar"} />
            <PrimaryButton props={"Cadastre-se"} />
        </div>
    )
}   

export default UserAuth