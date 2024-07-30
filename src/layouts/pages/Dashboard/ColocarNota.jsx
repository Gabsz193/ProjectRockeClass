import React from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, doc } from "firebase/firestore";

const ColocarNota = () => {
    return (
        <div>
            <label htmlFor="">Nome aluno</label>
            <input type="text"/>
            <label htmlFor="">Matéria</label>
            <input type="text"/>
            <label>Nota 1</label>
            <input type="text"/>
            <label>Nota 2</label>
            <input type="text"/>
            <label>Nota 3</label>
            <input type="text"/>
            <label>Nota 4</label>
            <input type="text"/>
            <label>Nota 5</label>
            <input type="text"/>
            <label>Nota 6</label>
            <input type="text"/>
            <label>Nota 7</label>
            <input type="text"/>
            <label>Nota 8</label>
            <input type="text"/>

            <input type="button" value="Enviar" />
        </div>
    )
}

export default ColocarNota;