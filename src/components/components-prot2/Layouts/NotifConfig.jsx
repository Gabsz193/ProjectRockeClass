import React from "react";
import NotificationIcon from '../../svg/NotificationIcon.svg'
import ConfigurationIcon from '../../svg/ConfigurationIcon.svg'
import "../../css/NotifConfig.css"

const NotifConfig = () => {
    return(
        <div className="notif-config">
            <img src={NotificationIcon} />
            <img src={ConfigurationIcon} />
        </div>
    )
}

export default NotifConfig