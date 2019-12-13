import React from 'react'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'

function LinearGraph(props) {

    if (!props.data.nation) { 
        return <div><p>Content Unavailable</p></div>
    }

    //Set date array from props for Victory line

    let dateRange = [];
    if(props.yearRange) {
        dateRange = props.yearRange
        console.log(dateRange)
    }

    return (
        
        <div>
            This is a linear graph
            <div>

            </div>
            <div className="regional-trend-graph">
            <VictoryChart
                theme={VictoryTheme.material}>
            <VictoryLine
            categories={{
                x: dateRange, 
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
            <div className="linear-graph-compare">
                <div className="label">
                    <div className="label-primary">Region</div>
                    <div className="label-details">
                        <h3>2013 Jobs</h3>
                        <h3>2018 Jobs</h3>
                        <h3>Percent</h3>
                        <h3>Percent Change</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinearGraph;