import React from 'react'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'

function LinearGraph(props) {

    if (!props.data.nation) { return <div><p>Content Unavailable</p></div>}
    return (
        <div>
            This is a linear graph
            <VictoryChart
                theme={VictoryTheme.material}>
            <VictoryLine
            categories={{
                x: ["2013", "2014", "2015", "2016", "2017"], 
                y: ["0", "10", "20", "30", "40"]
              }}
                style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
                }}
                data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
                ]}
            />
                </VictoryChart>
        </div>
    )
}

export default LinearGraph;