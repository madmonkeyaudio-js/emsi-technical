import React from 'react'


const Summary = (props) => {

    if (!props.data.jobs) { return <div><p>Content Unavailable</p></div>}

    return (
        <div className="summary-container">
            <div className="summary-section">
                <h4>{props.data.jobs.regional}</h4>
                <div>
                    Jobs ({props.data.jobs.year})
                </div>
                <div>
                    <p>{Math.floor((props.data.jobs.regional/props.data.jobs.national_avg)*100)}% above national average</p>
                </div>
            </div>
            <div className="vertical-divider"></div>
            <div className="summary-section">
                <h4>+{props.data.jobs_growth.regional}%</h4>
                <p>% change ({props.data.jobs_growth.start_year} - {props.data.jobs_growth.end_year})</p>
                <p>+{props.data.jobs_growth.national_avg}</p>
            </div>
            <div className="vertical-divider"></div>
            <div className="summary-section">
                <h4>${props.data.earnings.regional}/hour</h4>
                <p>Median Hourly Earnings</p>
                <p>Nation: ${props.data.earnings.national_avg}/hour</p>
            </div>
        </div>
    )
}


export default Summary
