import React, { Component } from 'react'


class Summary extends Component {

   state = {
        data: {}
   }

   componentDidUpdate(prevProps, prevState){
       if(prevProps.data !== this.props.data) {
           this.setState({
               data: this.props.data
           })
           console.log(this.props.data)
       }
   }
    render() {
        return (
            <div className="summary-container">
                <div className="summary-section">
                
                </div>
                <div className="vertical-divider"></div>
                <div className="summary-section"></div>
                <div className="vertical-divider"></div>
                <div className="summary-section"></div>
            </div>
        )
    }
}

export default Summary
