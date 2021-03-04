import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class index extends Component {
  render() {
    return (
      <h3
        onClick={() => {
          PubSub.publish('zxTest', 'hello world!')
          this.props.history.push('/about')
        }}
      >
        我是Home的内容
      </h3>
    )
  }
}
