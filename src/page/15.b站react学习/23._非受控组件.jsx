import React, { Component } from 'react'

export default class Login extends Component {
  /**
   * 现取现用
   */
  handleSubmit = (event) => {
    // 阻止form的默认跳转事件
    event.preventDefault()
    const { userName, password } = this
    alert(`您输入的用户名是：${userName.value}，密码是：${password.value}`)
  }

  render() {
    return (
      <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
        用户名：
        <input
          type="text"
          ref={(c) => (this.userName = c)}
          name="userName"
        ></input>
        密码：
        <input
          type="password"
          ref={(c) => (this.password = c)}
          name="password"
        ></input>
        <button>登录</button>
      </form>
    )
  }
}
