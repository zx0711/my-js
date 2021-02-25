import React, { Component } from 'react'

export default class App extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  render() {
    const { date } = this.state
    return (
      <div>
        <h2>hello</h2>
        <input type="text" />
        <span>现在是：{date.toTimeString()}</span>
      </div>
    )
  }
}
