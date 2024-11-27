import React, { Component } from 'react'

export default class Unmout extends Component {
    componentWillUnmount(){
        alert("component is unmount")
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
