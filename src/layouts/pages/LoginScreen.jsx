import React, { useState } from "react";
import '../../css/Login.css'
import Button from "../../components/Button";
import icon from '../../svg/google-icon.svg'
import Field from "../../components/Field";
import HorizontalRuler from "../../components/HorizontalRuler";
import Checkbox from "../../components/Checkbox";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

const LoginScreen = () => {

    const [entrar,setEntrar] = useState('/Login')

    const [fields, setFields] = useState({
        params: {
            email: "",
            senha: ""
        }
    })

    function handleFields(change, a, b) {
        var newFields = fields
        newFields[a][b] = change

        setFields(newFields)
    }


    function a() {
        signInWithEmailAndPassword(auth, fields.params.email, fields.params.senha).then(()=>{
        setEntrar("/Professor/Filter-students")})
    }

        return (
            <div className="Login">
                <div className="Login-Placeholder">
                </div>
                <div className="Login-Content">
                    <div>
                        <div className="Title">
                            <p className="title"><span className="green-line"></span>Login</p>
                            <label style={{color: "#828282"}} >Insira as suas credenciais e tenha acesso ao sistema</label>
                        </div>
                        <div className="Google">
                            <Button title="Entre pela sua conta Google" style="secondary-button" icon={icon} />
                        </div>
                        <HorizontalRuler text="ou com" />
                        <div className="Fields">
                            <Field title="E-mail" handleField={handleFields} keya={["params","email"]} placeholder="Insira o seu endereço de e-mail" />
                            <Field title="Senha" a={a} handleField={handleFields} keya={["params","senha"]} placeholder="Insira a sua senha de acesso" type="password" spanText="Esqueci minha senha" />
                        </div>
                        <Checkbox text="Mantenha-me conectado" />
                        <div className="Buttons" onClick={()=>{
                            signInWithEmailAndPassword(auth, fields.params.email, fields.params.senha).then(()=>{
                            setEntrar("/Professor/Filter-students")
                            })
                        }}>
                            <Link className="button"
                            to={entrar}><Button title="Entrar" style="primary-button" /></Link>
                            <Link className="button" to="/" ><Button title="Cancelar" style="secondary-button" /></Link>
                        </div>
                    </div>
                    <p className="copyright">Projeto de Aprendizado Infantil©  ·  2023</p>
                </div>
            </div>
        )
}

export default LoginScreen
