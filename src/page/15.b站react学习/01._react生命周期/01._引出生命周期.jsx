import React, { Component } from 'react'
import ReactDOM from 'react-dom'
let timer = null
export default class Life extends Component {
  /**
   * 渲染：挂载 mount
   * 卸载：unmount
   * 生命周期回调函数===生命周期钩子函数===生命周期函数===生命周期钩子
   */

  state = {
    opacity: 1,
  }

  // 组件挂载完毕，只调用一次，在render初始化渲染完成之后
  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    clearInterval(timer)
  }

  handleDeath = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  action = () => {
    timer = setInterval(() => {
      let { opacity } = this.state

      opacity -= 0.1
      if (opacity <= 0) {
        opacity = 1
      }
      console.log(opacity)
      this.setState({ opacity })
    }, 200)
  }

  // render调用时机：初始化渲染，状态更新之后
  render() {
    console.log('render')
    return (
      <div>
        <h2 style={{ opacity: this.state.opacity }}>学不会，怎么办</h2>
        <button onClick={this.handleDeath}>不活了</button>
        <button onClick={this.action}>开始</button>
      </div>
    )
  }
}
