import React from 'react'

function BarGraph(props) {

    let industries = [];

    if (!props.data) { return <div><p>Content Unavailable</p></div>}
    if(props.data){
       industries = props.data.industries.map((i, idx)=> {
           return (
               <div key={idx} className="linear-grid-section">
                   <div>
                        {i.title}
                   </div>
                   <div className="trend-details">
                        <div>
                                {i.in_occupation_jobs}
                        </div>
                        <div>
                            {(((i.in_occupation_jobs)/props.data.jobs)*100).toFixed(1)}%
                        </div>
                        <div>
                            {((i.in_occupation_jobs)/i.jobs * 100).toFixed(1)}%
                        </div>
                   </div>
               </div>
           )
       })
    }



    return (
        <div className="bargraph">
            <div className="title">
                <h3>Industries Employing {props.title}</h3>
            </div>
            <div className="linear-grid-section">
                    <div>
                        <h3>Industry</h3>
                    </div>
                    <div className="trend-details">
                        <h5>
                            Occupation Jobs In Industry ({props.data.year})
                        </h5>
                        <h5>
                            % of Occupation in Industry ({props.data.year})
                        </h5>
                        <h5>
                            % of Total Jobs in Industry ({props.data.year})
                        </h5>
                    </div>
            </div>
            {industries}
        </div>
    )
}

export default BarGraph;