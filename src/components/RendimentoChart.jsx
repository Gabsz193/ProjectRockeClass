import React from "react";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from "victory";

const RendimentoChart = () => {
    const data = [
        {x: "Fev", y: 20},
        {x: "Mar", y: 30},
        {x: "Abr", y: 20},
        {x: "Mai", y: 60},
        {x: "Jun", y: 50},
        {x: "Jul", y: 30},
        {x: "Ago", y: 70},
        {x: "Set", y: 10},
        {x: "Out", y: 70},
        {x: "Nov", y: 40}
    ]

    return(
        <VictoryChart theme={VictoryTheme.material}>
            <VictoryAxis 
                tickValues={[" Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov"]}
                style={{
                    tickLabels: { fontSize: 12 },
                  }}
                  
                />
            <VictoryAxis dependentAxis
                tickValues={[0,20,40,60,80,100]}/>
            <VictoryLine
                data={data}/>
        </VictoryChart>
    )
}
export default RendimentoChart;