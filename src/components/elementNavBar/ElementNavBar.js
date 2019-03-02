import React, { Component } from 'react'
import './ElementNavBar.css'
export default class ElementNavBar extends Component {
  render() {
    return (
  
  <div className="ElementNavBar">
        <button className="buttonElem"><img src={this.props.srcImg}/>
        <span><a>{this.props.text}</a> </span>
        </button>
       
      </div>
    )
  }
}
