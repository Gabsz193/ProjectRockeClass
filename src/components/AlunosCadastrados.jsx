import React, { useState } from "react";
import AlunoCadastrado from "./AlunoCadastrado";
import alunoPlaceholder from '../images/aluno-placeholder.png'
import  '../css/AlunosCadastrados.css'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query } from "firebase/firestore";

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

const db = getFirestore(app)

const AlunosCadastrados = () => {

    const [alunosa, setAlunosa] = useState()

    var alunos = []

    getDocs(collection(db,"aluno")).then((snapshot)=>{
        snapshot.forEach(doc=>{

            var media = doc.data().provas.matematica.reduce((a, b) => {
                return a +  b
            })

            alunos.push(
                <AlunoCadastrado 
                    name={doc.data().nomeCompleto}
                    turma={doc.data().turma}
                    desempenho={Math.round(media*10/9)}
                    image={alunoPlaceholder}
                />
            )
            setAlunosa(alunos)
        })
    })

    

    return (
        <table className="Alunos-Cadastrados">
            <tr>
                <th>Nome</th>
                <th>Desempenho</th>
                <th>Turma</th>
                <th></th>
            </tr>
            {alunosa}
        </table>
    )
}

export default AlunosCadastrados;