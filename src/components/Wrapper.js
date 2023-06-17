import React, { Component } from 'react'
import ButtonBox from './ButtonBox'
import Screen from './Screen'
import '../style/Wrapper.css'

export default class Wrapper extends Component {
  state = {
    result: '',
    expression: ''
  }

  handleClick = (event) => {
    switch (event) {
      case 'AC':
        this.setState({
          result: '',
          expression: ''
        })
        break
      case '=':
        try {
          const result = eval(this.state.expression).toString()
          this.setState({
            result: result,
            expression: result
          })
        } catch (error) {
          this.setState({
            result: 'Error',
            expression: ''
          })
        }
        break
      default:
        this.setState((prevState) => ({
          result: prevState.result + event,
          expression: prevState.expression + event
        }))
    }
  }

  render() {
    return (
      <div className="component-app">
        <Screen value={this.state.result || '0'} />
        <ButtonBox clickHandler={this.handleClick} />
      </div>
    )
  }
}
