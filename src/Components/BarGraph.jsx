import React, { Component } from 'react'

class BarGraph extends Component {
    state = {
        data: ''
   }

   componentDidUpdate(prevProps, prevState){
       if(prevProps.data !== this.props.data) {
           this.setState({
               data: this.props.data
           })
       }
   }
    render() {
        return (
            <div>
             
            </div>
        )
    }
}

export default BarGraph
