import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Second from './second'

export default class index extends Component {
  componentDidMount() {
    PubSub.subscribe('zxTest', this.mySubscriber)
  }
  mySubscriber = (msg, data) => {
    console.log('我是订阅到的消息', msg, data)
  }
  render() {
    // console.log('路由组件收到的props', this.props)
    return (
      <div>
        <h3>我是About的内容</h3>
        <Second />
      </div>
    )
  }
}
