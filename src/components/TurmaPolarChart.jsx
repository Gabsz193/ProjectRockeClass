import React from "react";
import { VictoryArea, VictoryChart, VictoryLine, VictoryPolarAxis, VictoryScatter } from "victory";


const TurmaPolarChart = () => {
    const data = [
        { x: 'T1', y: 60 },
        { x: 'T2', y: 80 },
        { x: 'T3', y: 40 },
        { x: 'T4', y: 100 },
        { x: 'T5', y: 20 },
        { x: 'T6', y: 60 },
        { x: 'T7', y: 80 },
      ];

    return(
        <VictoryChart polar>
      <VictoryPolarAxis
        tickValues={['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']}
        labelPlacement="vertical"
        
        style={{
          grid: { stroke: '#644FE9', strokeWidth: 2 },
          axis: { stroke: 'none' },
        }}
        interpolation="linear"
      />
      <VictoryPolarAxis dependentAxis
        tickValues={[20, 40, 60, 80, 100]}
        interpolation="linear"
        style={{
          grid: { stroke: '#644FE9' },
          axis: { stroke: 'none' },
        }}
        
      />
      <VictoryArea
        data={data}
        style={{
          data: { fill: '#90F3A0', fillOpacity: 0.5 },
        }}
        interpolation="linear"
      />
      <VictoryLine
        data={data}
        style={{
          data: { stroke: '#00FF29', strokeWidth: 1 }
        }}
        interpolation="linear"
      />
      <VictoryScatter
        data={data}
        style={{
            data: { fill: "#165BAA"}
        }}
        size={3}/>
    </VictoryChart>
    )
}

export default TurmaPolarChart;