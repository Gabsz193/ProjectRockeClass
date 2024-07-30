import React, { useState } from "react";
import { VictoryChart, VictoryLabel } from 'victory'
import { VictoryLine } from 'victory'
import { VictoryAxis } from 'victory'
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import '../css/DisciplinaLine.css'

const firebaseConfig = {
    apiKey: "AIzaSyAniJm3NmOhJKNowoirC3JvPfzv6B4vAsY",
  authDomain: "projeto-aprendizado-infantil.firebaseapp.com",
  projectId: "projeto-aprendizado-infantil",
  storageBucket: "projeto-aprendizado-infantil.appspot.com",
  messagingSenderId: "426664506799",
  appId: "1:426664506799:web:c0af84641a24100914ab5a",
  measurementId: "G-MZPZNFXLQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const DisciplinaLine = (props) => {

    var data = []

    const [datasa, setData] = useState()

    getDoc(doc(db,"aluno",props.alunos)).then(doc=>{
        

        data.push(
            <VictoryLine data={[
                {x: "Fev", y: doc.data().provas.matematica[0] * 10},
                {x: "Mar", y: doc.data().provas.matematica[1] * 10},
                {x: "Abr", y: doc.data().provas.matematica[2] * 10},
                {x: "Mai", y: doc.data().provas.matematica[3] * 10},
                {x: "Jun", y: doc.data().provas.matematica[4] * 10},
                {x: "Jul", y: doc.data().provas.matematica[5] * 10},
                {x: "Set", y: doc.data().provas.matematica[6] * 10},
                {x: "Out", y: doc.data().provas.matematica[7] * 10},
                {x: "Nov", y: doc.data().provas.matematica[8] * 10}
            ]}

            labelComponent={<VictoryLabel renderInPortal dx={20} dy={10} />}
            labels={({datum})=>datum.x === 'Nov' ? `${datum.y}%` : null}
            style={{labels: {
                fontFamily: "var(--font-family)"
            }, data: {
                fontFamily: "var(--font-family)",
                stroke: '#5D45DB'
            }
            }}

            
            />
        )
        
        data.push(
            <VictoryLine data={[
                {x: "Fev", y: doc.data().provas.portugues[0] * 10},
                {x: "Mar", y: doc.data().provas.portugues[1] * 10},
                {x: "Abr", y: doc.data().provas.portugues[2] * 10},
                {x: "Mai", y: doc.data().provas.portugues[3] * 10},
                {x: "Jun", y: doc.data().provas.portugues[4] * 10},
                {x: "Jul", y: doc.data().provas.portugues[5] * 10},
                {x: "Set", y: doc.data().provas.portugues[6] * 10},
                {x: "Out", y: doc.data().provas.portugues[7] * 10},
                {x: "Nov", y: doc.data().provas.portugues[8] * 10}
            ]}

            labelComponent={<VictoryLabel renderInPortal dx={20} dy={10} />}
            labels={({datum})=>datum.x === 'Nov' ? `${datum.y}%` : null}

            style={{labels: {
                fontFamily: "var(--font-family)"
            }, data: {
                fontFamily: "var(--font-family)",
                stroke: '#FF696D'
            }}}
            />
        )

        setData(data)

    })

    return (
        <div className="disciplina-line">
            <p className="title">Rendimento por disciplina</p>
            <div>
                <VictoryChart
                    minDomain={{y: 0}}
                    maxDomain={{y: 100}}
                    style={{parent: {
                        width: 'calc(100% + 20px)'
                    }}}
                    >
                    <VictoryAxis style={{tickLabels: {angle: -60}, axis: {stroke: null}}} />
                    <VictoryAxis dependentAxis
                        tickCount={10}
                        style={{
                            axis: { transform: "translateX(-100px) translateY(-10px)" },
                            axisLabel: { padding: 35, fontFamily: "var(--font-family)" },
                            tickLabels: {fontFamily: 'var(--font-family)'}
                            
                        }}
                        label={"Porcentagem"}
                    />
                    
                    {datasa}

                </VictoryChart>
            </div>
            <div className="labels">
                    <p><span className="matematica"></span>Matemática</p>
                    <p><span className="ciencias" ></span>Português</p>
            </div>
        </div>
    )
}

export default DisciplinaLine;