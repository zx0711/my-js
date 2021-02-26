import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Son2 extends Component {
  mySubscriber = function (_, data) {
    console.log('mag data', _, data)
  }
  componentDidMount() {
    PubSub.subscribe('MY TOPIC', this.mySubscriber)
  }
  render() {
    return <div>我是儿子2</div>
  }
}
