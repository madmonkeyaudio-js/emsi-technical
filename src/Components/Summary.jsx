import React from 'react'


const Summary = (props) => {

    console.log("❌", props)

    if (!props.data.jobs) { return <div><p>Content Unavailable</p></div>}

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
                <p>+{props.data.jobs_growth ? props.data.jobs_growth.regional : "No regional job growth data"}</p>
                <p>% change (2013-2018)</p>
                <p>+{props.data.jobs_growth ? props.data.jobs_growth.national_avg : "No national job growth data"}</p>
            </div>
            <div className="vertical-divider"></div>
            <div className="summary-section">
                <p>${props.data.earnings ? props.data.earnings.regional : "No earnings data"}/hour</p>
                <p>Median Hourly Earnings</p>
                <p>Nation: ${props.data.earnings ? props.data.earnings.national_avg : "No national earnings data"}/hour</p>
            </div>
        </div>
    )
}


export default Summary
