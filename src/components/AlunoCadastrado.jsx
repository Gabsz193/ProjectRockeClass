import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/AlunoCadastrado.css';
import moreOptionsIcon from '../svg/more-options-icon.svg';
import AddObservacaoPopup from "./AddObservacaoPopup";

const AlunoCadastrado = (props) => {
  const [observacaoPopup, setObservacaoPopup] = useState('');

  const closeHandle = () => {
    setObservacaoPopup('');
  };

  return (
    <tr className="Aluno-Cadastrado">
      {observacaoPopup}
      <td className="nome">
        <div onClick={() => { setObservacaoPopup(<AddObservacaoPopup close={closeHandle} aluno={props.name} turma={props.turma} />) }}>
          <img src={props.image} alt="" />
          <p>{props.name}</p>
        </div>
      </td>
      <td className="desempenho">
        <div>
          <div>
            <span className="bar" style={{ width: `${props.desempenho}%` }}></span>
          </div>
          <p>{props.desempenho}%</p>
        </div>
      </td>
      <td className="turma">{props.turma}</td>
      <td className="more">
        <Link to={`/Professor/Filter-students/Aluno?name=${props.name}&turma=${props.turma}`}>
          <img src={moreOptionsIcon} alt="" />
        </Link>
      </td>
    </tr>
  );
}

export default AlunoCadastrado;
