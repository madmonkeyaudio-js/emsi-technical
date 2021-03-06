import React from 'react'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'

function LinearGraph(props) {

    if (!props.data.nation) { 
        return <div><p>Content Unavailable</p></div>
    }
    
    let dateRange = [];
    let nationPerc = [];
    let statePerc = [];
    let regionPerc = [];
    let victoryNationData = [];
    let victoryStateData = [];
    let victoryRegionData = [];

    if(props.yearRange) {
        dateRange = props.yearRange;
        nationPerc = props.nationPerc;
        statePerc = props.statePerc;
        regionPerc = props.regionPerc;


        console.log('NATION PERCENTAGE!!!', nationPerc)
        let populateChart = (dateRange, percData, chosenArray) => {
            for(let i = 0; i < dateRange.length; i++) {
                if(percData[i] !== "NaN"){
                    chosenArray.push({
                        x: dateRange[i],
                        y: parseInt(percData[i])
                    })
                } else {
                    chosenArray.push({
                        x: dateRange[i],
                        y: 8.5
                    })
                }
            }
        }
        console.log( nationPerc, regionPerc)
        populateChart(dateRange, nationPerc, victoryNationData);
        populateChart(dateRange, statePerc, victoryStateData)
        populateChart(dateRange, regionPerc, victoryRegionData)
    }

    return (
        
        <div className="graph-container">
            <div className="regional-trend-graph">
                <div className="title">
                    <h3>Regional Trends</h3>
                </div>
                <VictoryChart
                    theme={VictoryTheme.material}
                    height={150}
                    width={250}
                    style={{
                        labels: {fontSize: 12}
                    }}>
                <VictoryLine
                    categories={{}}
                    style={{
                    data: { stroke: "#21f4e6" },
                    parent: { border: "1px solid #cbc"}
                    }}
                    data={victoryNationData}/>
                <VictoryLine
                    categories={{}}
                    style={{
                    data: { stroke: "#216bf4" },
                    parent: { border: "1px solid #cbc"},
                    }}
                    data={victoryStateData}/>
                <VictoryLine
                    categories={{}}
                    style={{
                    data: { stroke: "#21b1f4" },
                    parent: { border: "4px solid #cbc"}
                    }}
                    data={victoryRegionData}/>
                </VictoryChart>

            </div>
            <div className="linear-graph-compare">
                <div className="label">
                    <div className="linear-grid-section">
                        <h3>Region</h3>
                        <div className="trend-details">
                            <h3>2013 Jobs</h3>
                            <h3>2018 Jobs</h3>
                            <h3>Change</h3>
                            <h3>% Change</h3>
                        </div>
                    </div>
                    <div className="linear-grid-section">
                        <div>
                            <h5>Region</h5>
                        </div>
                        <div className="trend-details">
                            <p>{props.trendCompReg[0]}</p>
                            <p>{props.trendCompReg[props.trendCompReg.length - 1]}</p>
                            <p>{(props.trendCompReg[props.trendCompReg.length - 1])-props.trendCompReg[0]}</p>
                            <p>{(((props.trendCompReg[props.trendCompReg.length-1]/props.trendCompReg[0])-1)*100).toFixed(1)}%</p>
                        </div>
                    </div>
                    <div className="linear-grid-section">
                        <div>
                            <h5>State</h5>
                        </div>
                        <div className="trend-details">
                            <p>{props.trendCompState[0]}</p>
                            <p>{props.trendCompState[props.trendCompState.length - 1]}</p>
                            <p>{(props.trendCompState[props.trendCompState.length - 1])-props.trendCompState[0]}</p>
                            <p>{((((props.trendCompState[props.trendCompState.length - 1])/props.trendCompState[0])-1) * 100).toFixed(1)}%</p>
                        </div>
                    </div>
                    <div className="linear-grid-section">
                        <div>
                            <h5>Nation</h5>
                        </div>
                        <div className="trend-details">
                            <p>{props.trendCompNation[0]}</p>
                            <p>{props.trendCompNation[props.trendCompNation.length - 1]}</p>
                            <p>{(props.trendCompNation[props.trendCompNation.length - 1])-props.trendCompNation[0]}</p>
                            <p>{((((props.trendCompNation[props.trendCompNation.length - 1])/props.trendCompNation[0])-1)*100).toFixed(1)}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinearGraph;