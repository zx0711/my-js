import React, { Component } from 'react'
import Son1 from './02._son1'
import Son2 from './03._son2'

export default class Father extends Component {
  render() {
    return (
      <div>
        我是父亲
        <Son1></Son1>
        <Son2></Son2>
      </div>
    )
  }
}
