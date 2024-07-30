import React,{ useState } from "react";
import '../../css/Login.css'
import Button from "../../components/Button";
import icon from '../../svg/google-icon.svg'
import Field from "../../components/Field";
import HorizontalRuler from "../../components/HorizontalRuler";
import Checkbox from "../../components/Checkbox";
import { Link } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAniJm3NmOhJKNowoirC3JvPfzv6B4vAsY",
  authDomain: "projeto-aprendizado-infantil.firebaseapp.com",
  projectId: "projeto-aprendizado-infantil",
  storageBucket: "projeto-aprendizado-infantil.appspot.com",
  messagingSenderId: "426664506799",
  appId: "1:426664506799:web:c0af84641a24100914ab5a",
  measurementId: "G-MZPZNFXLQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const CadastroScreen = () => {
    const [fields, setFields] = useState({
        params: {
            email: "",
            senha: ""
        }
    })

    const handleFields = (change, a, b) => {
        var newFields = fields
        newFields[a][b] = change

        setFields(newFields)
    }

        return (
            <div className="Login">
                <div className="Login-Placeholder">
                </div>
                <div className="Login-Content">
                    <div>
                        <div className="Title">
                            <p className="title"><span className="green-line"></span>Cadastro</p>
                            <label style={{color: "#828282"}} >Insira as suas credenciais e tenha acesso ao sistema</label>
                        </div>
                        <div className="Google">
                            <Button title="Entre pela sua conta Google" style="secondary-button" icon={icon} />
                        </div>
                        <HorizontalRuler text="ou com" />
                        <div className="Fields">
                            <Field handleField={handleFields} title="E-mail" keya={["params", "email"]} placeholder="Insira o seu endereço de e-mail" />
                            <Field title="Senha" handleField={handleFields} keya={["params","senha"]} placeholder="Insira a sua senha de acesso" type="password" spanText="Esqueci minha senha" />
                        </div>
                        <Checkbox text="Mantenha-me conectado" />
                        <div className="Buttons">
                            <Link className="button" onClick={()=> {
                                createUserWithEmailAndPassword(auth, fields.params.email, fields.params.senha)
                                console.log(fields.params.email)
                                console.log(fields.params.senha)
                            }} to="/Professor/Filter-students"><Button title="Entrar" style="primary-button" /></Link>
                            <Link className="button" to="/Login" ><Button title="Cancelar" style="secondary-button" /></Link>
                        </div>
                    </div>
                    <p className="copyright">Projeto de Aprendizado Infantil©  ·  2023</p>
                </div>
            </div>
        )
}

export default CadastroScreen;
