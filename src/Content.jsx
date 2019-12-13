import React, { Component } from 'react'
import axios from 'axios'
import LinearGraph from './Components/LinearGraph'
import BarGraph from './Components/BarGraph'
import Summary from './Components/Summary'

class Content extends Component {

    state = {
        occupation: [],
        region: {},
        summary: {},
        trendComparison: {
            endYear: '',
            nation: [],
            regional: [],
            startYear: '', 
            state: []
        },
        employingIndustries: {
            industries: [],
            jobs: '', 
            year: ''
        }, 
        yearRange: []
    }

    componentDidMount() {
        this.emsiRequest();
    }

    emsiRequest = () => {
        let yearArray = [];
        axios.get('http://www.mocky.io/v2/5a29b5672e00004a3ca09d33')
        .then(response => {
            let myData = response.data
            console.log(myData)
            for(let i = myData.trend_comparison.start_year; i < myData.trend_comparison.end_year; i++) {
                console.log(yearArray.push(`${i}`))
            }
            this.setState({
                occupation: myData.occupation,
                region: myData.region,
                summary: myData.summary, 
                trendComparison: myData.trend_comparison, 
                employingIndustries: myData.employing_industries, 
                yearRange: yearArray
            })
        })
        .catch(err => {
            console.log('There was an error in your request', err)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.region !== this.state.region) {
            this.setState({
                region: this.state.region, 
                occupation: this.state.occupation,
                summary: this.state.summary, 
                trendComparison: this.state.trendComparison,
                employingIndustries: this.state.employingIndustries, 
                yearRange: this.state.yearRange
            })
        }
      
    }

    render() {
        return (
            <div>
                <header>
                    Occupation Overview
                    <br/>
                    {this.state.occupation.title} in {this.state.region.title}
                    <br/>
                    Occupation Summary for {this.state.occupation.title}
                </header>
                <Summary data={this.state.summary} title={this.state.occupation.title}/>
                <LinearGraph data={this.state.trendComparison} yearRange={this.state.yearRange}/>
                <BarGraph data={this.state.employingIndustries}/>
            </div>
        )
    }
}

export default Content
