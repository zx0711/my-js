import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Son1 extends Component {
  render() {
    return (
      <div
        onClick={() => {
          PubSub.publish('MY TOPIC', { name: 'zx' })
        }}
      >
        我是儿子1
      </div>
    )
  }
}
