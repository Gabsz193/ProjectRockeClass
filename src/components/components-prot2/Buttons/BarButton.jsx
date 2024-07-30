import React from "react";
import '../../../css/css-prot2/Buttons.css'

const BarButton = ({image,props}) => {
    return(
        <div className="bar-button">
            <p><img src={image} alt=""/>{props}</p>
        </div>
    )
}

export default BarButton