import React, { Component } from 'react'
import '../../css/EmConstrucao.css'
import constructionIcon from '../../svg/construction-icon.svg'
import HomeBar from '../HomeBar'

class EmConstrucaoScreen extends Component {
    render() {
        return (
            <div className='Em-Construcao'>
                <HomeBar />
                <div className='content'>
                    <div style={{textAlign: 'center'}}>
                        <img src={constructionIcon} width="300px" height="300px" alt="" />
                        <p style={{color: '#898989'}} >Página em construção</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmConstrucaoScreen;