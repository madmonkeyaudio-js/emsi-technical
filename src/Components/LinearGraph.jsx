import React, { Component } from 'react'

class LinearGraph extends Component {

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

export default LinearGraph
