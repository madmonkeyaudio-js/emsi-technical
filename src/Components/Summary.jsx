import React from 'react'


const Summary = (props) => {

    if (!props.data.jobs) { return <div><p>Content Unavailable</p></div>}

    return (
        <div className="summary-container">
            <div className="summary-section">
                {props.data.jobs.regional}
                <div>
                    Jobs in {props.data.jobs.year}
                </div>
                <div>
                    {Math.floor((props.data.jobs.regional/props.data.jobs.national_avg)*100)} <p>% above national average</p>
                </div>
            </div>
            <div className="vertical-divider"></div>
            <div className="summary-section">
                <p>+{props.data.jobs_growth.regional}</p>
                <p>% change (2013-2018)</p>
                <p>+{props.data.jobs_growth.national_avg}</p>
            </div>
            <div className="vertical-divider"></div>
            <div className="summary-section">
                <p>${props.data.earnings.regional}/hour</p>
                <p>Median Hourly Earnings</p>
                <p>Nation: ${props.data.earnings.national_avg}/hour</p>
            </div>
        </div>
    )
}


export default Summary
