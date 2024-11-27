import React, { Component } from 'react'
import Unmout from './Unmout'

export default class Bike extends Component {
    constructor(props){
        super(props)
        this.state={
          colour:"blue",
          model:"800",
          Unmount:false
        }
    }
// 2.
    // static getDerivedStateFromProps(props,state){
    //   return {colour:props.bike.colour,model:props.bike.model}
    // }
    // 3.
    componentDidMount(){
      setTimeout(()=>{
        this.setState({colour:"red",model:"650"})
      },4000)
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
      console.log(prevstate.colour)
      document.getElementById("div1").innerHTML=prevstate.colour
      document.getElementById("div2").innerHTML=prevstate.model

      return null
    }
    componentDidUpdate(){
      console.log()
    }
    unmout=()=>{
      this.setState({Unmount:true})
    }
    
  render() {
    let component="hello"
    if(this.state.Unmount){
      component=<Unmout/>
    }
    return (
      <div>
        Update Value <br />
        {this.state.colour} <br />
        {this.state.model} <br />
        PreviousValue <br />
        <div id="div1"></div>
        <div id="div2"></div>
        {component}
        <button onClick={this.unmout}>unmount</button>
      </div>
    )
  }
}
