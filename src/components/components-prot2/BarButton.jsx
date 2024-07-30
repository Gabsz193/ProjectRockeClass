import React from "react";
import '../../css/Buttons.css'

const BarButton = ({image,props}) => {
    return(
        <div className="bar-button">
            <p><img src={image}/>{props}</p>
        </div>
    )
}

export default BarButton