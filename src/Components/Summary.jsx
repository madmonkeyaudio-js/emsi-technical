import React from 'react'


const Summary = (props) => {

    console.log("❌", props)

    if (!props.data.jobs) { return <div><p>Content Unavailables</p></div>}

    return (
        <div className="summary-container">
            <div className="summary-section">
                {props.data.jobs ? props.data.jobs.regional : "Props failed"}
                <div>Jobs in {props.data.jobs.year}</div>
                <div>
                {props.data.jobs? Math.floor((props.data.jobs.regional/props.data.jobs.national_avg)*100) : 'Props failed'} <p>% above national average</p>
                </div>

            </div>
            <div className="vertical-divider"></div>
            <div className="summary-section">

            </div>
            <div className="vertical-divider"></div>
            <div className="summary-section"></div>
        </div>
    )
}


export default Summary
