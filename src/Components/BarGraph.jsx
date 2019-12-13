import React from 'react'

function BarGraph(props) {

    let industries = [];

    if (!props.data) { return <div><p>Content Unavailable</p></div>}
    if(props.data){
       industries = props.data.industries.map(i => {
           return (
               <div className="linear-grid-section">
                   <div>
                        {i.title}
                   </div>
                   <div>
                        {i.in_occupation_jobs}
                   </div>
                   <div>
                       {((i.in_occupation_jobs)/i.jobs * 100).toFixed(1)}%
                   </div>
               </div>
           )
       })
       console.log(props.data.industries)
    }



    return (
        <div className="bargraph">
            <h3>Industries Employing {props.title}</h3>
          {industries}
        </div>
    )
}

export default BarGraph;