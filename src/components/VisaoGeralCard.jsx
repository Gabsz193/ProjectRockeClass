import React from 'react'

import '../css/VisaoGeralCard.css'

const VisaoGeralCard = (props) => {
    return (
        <div className='visao-geral-card'>
            <div>
                <span className='ball'></span>
                <div>
                    <p className='title'>{props.title}</p>
                    <p className='result'>{props.result}</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default VisaoGeralCard;