import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Second extends Component {
  render() {
    console.log('second路由组件收到的props', this.props)
    return <div>我是second</div>
  }
}
export default withRouter(Second)
