import React, { Component } from 'react'

export default class Login extends Component {
  state = {
    userName: '',
    password: '',
  }

  /**
   * 受控组件，不是现取现用，而是先存到状态里
   */
  demo1 = (event) => {
    this.setState({ userName: event.target.value })
  }
  demo2 = (event) => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = (event) => {
    // 阻止form的默认跳转事件
    event.preventDefault()
    const { userName, password } = this.state
    alert(`您输入的用户名是：${userName}，密码是：${password}`)
  }

  render() {
    return (
      <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
        用户名：
        <input type="text" onChange={this.demo1} name="userName"></input>
        密码：
        <input type="password" onChange={this.demo2} name="password"></input>
        <button>登录</button>
      </form>
    )
  }
}
