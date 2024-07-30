import React from "react";

const Title = () => {
    let style = {fontSize: "var(--title)",fontWeight:"bold", cursor:"pointer"}

    return <p style={style}>Rocket<span style={{color: "var(--primary-purple)"}} >Class</span></p>
}

export default Title;