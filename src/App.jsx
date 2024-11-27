import React, { Component } from 'react'
import Bike from "./Bike"
export default class App extends Component {
  // Mounting
  // 1.
  constructor(){
    super()
    this.state={
      colour:"Red",
      model:"650"
    }
  }
  render() {
    return (
      <div>
        {this.state.colour} <br />
        {this.state.model} <br />
        <Bike bike={this.state}></Bike>
      </div>
    )
  }
}
