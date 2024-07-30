import React, { useState } from "react";
import { VictoryPie } from 'victory'
import '../css/DisciplinaPie.css'
import CardExercicios from "./CardExercicios";


const DisciplinaPie = (props) => {

    const [selected1,setSelection1] = useState({backgroundColor: '#D9D9D9'})
    const [selected2,setSelection2] = useState({backgroundColor: 'none'})

    const [hover,setHover] = useState()

    const [data,setData] = useState(
        {
            matematica: props.matematica,
            portugues: props.portugues
        }
    )

    return(
        <div className="disciplina-pie">
            <p className="title">Disciplinas mais exercitadas</p>
            <div>
                <div className="range">
                    <button style={selected1} onClick={
                        () => {
                        setSelection1({backgroundColor: '#D9D9D9'})
                        setSelection2({background: 'none'})
                        setData(
                            {
                                matematica: props.matematica,
                                portugues: props.portugues,
                            }
                        )
                        }
                    }>Nesta semana</button>
                    <button style={selected2} onClick={
                        () => {
                            setSelection2({backgroundColor: '#D9D9D9'})
                            setSelection1({background: 'none'})
                            setData(
                                {
                                    matematica: 25,
                                    portugues: 13
                                }
                            )
                        }
                    } >Tudo</button>
                </div>
                 <VictoryPie
                    data={
                        [
                            {x: 'Matemática', y: data.matematica},
                            {x: 'Português', y: data.portugues}
                        ]
                    }

                    colorScale={['#5D45DB','#ECE9FF']}
                    innerRadius={70}
                    labels={()=>null}
                    animate={{duration: 1000}}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onMouseMove: (evt,obj) => {
                               setHover(<CardExercicios materia={obj.datum.x} exercicios={Math.round(obj.datum.y)} percentage={obj.datum.y.toFixed(1)} mouseX={evt.clientX} mouseY={evt.clientY} />)
                            },
                            onMouseLeave: () => setHover(null)
                        }
                    }]}

                 />
                 <div className="labels">
                    <p><span className="matematica"></span>Matemática</p>
                    <p><span className="portugues" ></span>Português</p>
                 </div>
            </div>
            {hover}
        </div>
    )
}

export default DisciplinaPie;