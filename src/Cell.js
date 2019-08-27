import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }


  handleChange = () =>{
    this.setState ({
      color: this.props.getColor()
    })
    //debugger
    console.log(this.state)
        console.log(this.props.getColor)

  }
  
  render() {
    return (
      <div onClick = {this.handleChange} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
