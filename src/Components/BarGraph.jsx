import React from 'react'

function BarGraph(props) {

    let industries = [];

    if (!props.data) { return <div><p>Content Unavailable</p></div>}
    if(props.data){
       industries = props.data.industries.map(i => {
           return (
               <div>
                   {i.title}
               </div>
           )
       })
       console.log(props.data.industries)
    }



    return (
        <div className="bargraph">
            This is a bar graph
          {industries}
        </div>
    )
}

export default BarGraph;