import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class index extends Component {
  render() {
    console.log('jjjjjj', this.props)
    return <NavLink {...this.props} />
  }
}
