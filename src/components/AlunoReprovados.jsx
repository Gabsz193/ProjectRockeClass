import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import AlunoCadastrado from "./AlunoCadastrado";
import alunoPlaceholder from '../images/aluno-placeholder.png';

const firebaseConfig = {
    apiKey: "AIzaSyAniJm3NmOhJKNowoirC3JvPfzv6B4vAsY",
  authDomain: "projeto-aprendizado-infantil.firebaseapp.com",
  projectId: "projeto-aprendizado-infantil",
  storageBucket: "projeto-aprendizado-infantil.appspot.com",
  messagingSenderId: "426664506799",
  appId: "1:426664506799:web:c0af84641a24100914ab5a",
  measurementId: "G-MZPZNFXLQY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const calculateAverage = (provas) => {
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += provas[i];
  }
  return sum / 9;
};

const AlunoReprovados = (props) => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "aluno"));
      const filteredList = [];
      querySnapshot.forEach((item) => {
        if (calculateAverage(item.data().provas.matematica) <= 6) {
          filteredList.push(item.data());
        }
      });
      setLista(filteredList.map((aluno) => (
        <AlunoCadastrado
          key={aluno.id} // Certifique-se de ter uma chave única para cada elemento na lista
          name={aluno.nomeCompleto}
          turma="I3A"
          desempenho="54"
          image={alunoPlaceholder}
        />
      )));
    };

    fetchData();
  }, []); // Passando um array vazio como segundo argumento para executar o useEffect apenas uma vez

  console.log(lista);

  return (
    <table className="Alunos-Cadastrados">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Desempenho</th>
          <th>Turma</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {lista}
      </tbody>
    </table>
  );
};

export default AlunoReprovados;
