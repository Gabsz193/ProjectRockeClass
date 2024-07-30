import React from "react";
import '../css/InstituicaoBanner.css'
import instituicaoPhoto from '../images/fundacao-image.png'

const InstituicaoBanner = () => {
    return(
        <div className="instituicao-banner">
            <div className="instituicao-info">
                <img src={instituicaoPhoto} alt="" />
                <p className="name">Fundação Matias Machline</p>
                <p className="class">Manaus, AM</p>
            </div>
        </div>
    )
}

export default InstituicaoBanner;