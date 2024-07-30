import React from "react";

import '../css/AddObservacaoPopup.css'
import Button from "./Button";

import Calendar from '../svg/calendar-purple.svg'
import Check from '../svg/check-circle-purple.svg'
import Arrow from '../svg/arrow-right.svg'
import XIcon from '../svg/X-purple.svg'

const AddObservacaoPopup = (props) => {
    return (
        <div className="add-observacao-popup">
            <div>
                <div>
                    <div className="title">
                        <p><span></span>{props.aluno} ({props.turma})</p>
                        <Button style="secondary-button" title="Fechar" icon={XIcon} action={props.close} />
                    </div>
                    <p className="legenda">Adicione uma observação ao aluno e compartilhe com os outros professores</p>
                    <div className="row">
                        <div className="indicador">
                            <span className="ball"><img src={Check} /></span>
                            <div>
                                <p className="gabrielchato">Indicador:</p>
                                <p>Selecione um motivo {`>`}</p>
                            </div>
                        </div>
                        <div className="data">
                            <span className="ball"><img src={Calendar} /></span>
                            <div>
                                <p className="gabrielchato">Data de publicação:</p>
                                <p>12 de maio de 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="lalala">
                        <p>Observação:</p>
                        <textarea  placeholder="Insira a observação aqui" className="observacao-field"></textarea>
                    </div>
                    <Button title="Enviar observação" style="primary-button" icon={Arrow} action={props.close} />
                </div>
            </div>
        </div>
    )
}

export default AddObservacaoPopup