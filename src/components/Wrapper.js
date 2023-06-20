import React, { Component } from 'react'
import ButtonBox from './ButtonBox'
import Screen from './Screen'
import '../style/Wrapper.css'
import calculate from '../tools/calculate'

export default class Wrapper extends Component {
  state = {
    total: null,
    next: null,
    operation: null
  }

  handleClick = (event) => {
    this.setState(calculate(this.state, event))
  }

  render() {
    return (
      <div className="component-app">
        <Screen value={this.state.next || this.state.total || '0'} />
        <ButtonBox clickHandler={this.handleClick} />
      </div>
    )
  }
}
