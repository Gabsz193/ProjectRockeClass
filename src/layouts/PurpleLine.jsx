import React from "react";

const PurpleLine = () => {
    const style = {
        backgroundColor: "var(--primary-purple)",
        width: "100%",
        minHeight: "50px",
        position: "absolute",
        bottom: 0,
        left: 0
    }
    return <div style={style}></div>
}

export default PurpleLine;