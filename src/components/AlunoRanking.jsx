import React, { useEffect, useState } from "react";
import AlunoRankingCard from "./AlunoRankingCard";
import imagePlaceholder from '../images/aluno-placeholder.png'
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const firebaseConfig = {
  // Configuração do Firebase
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

const AlunoRanking = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "aluno"));
      const dataList = querySnapshot.docs.map((doc) => doc.data());
      
      setList(dataList);
    };

    fetchData();
  }, [db]);

  const calculateAverage = (provas) => {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += provas[i];
    }
    return sum / 9;
  };

  const components = list.map((item, index) => (
    <AlunoRankingCard
      key={index}
      nome={item.nomeCompleto}
      turma={item.turma}
      num={index + 1}
      bold={index == 0}
      image={imagePlaceholder}
    />
  ));

  return (
    <nav className="Aluno-Ranking">
      <p>Ranking de alunos</p>
      <ul>{components}</ul>
    </nav>
  );
};

export default AlunoRanking;
