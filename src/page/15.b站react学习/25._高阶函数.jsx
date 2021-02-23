import React, { Component } from 'react'

export default class HightLogin extends Component {
  state = {
    userName: '',
    password: '',
  }

  /**
   * 高阶函数：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数
   *       1，若A函数，接收的参数是一个函数，那么A就称为高阶函数。
   *       2，若A函数，调用的返回值依然是一个函数，那么A就可以称为高阶函数
   * 常见的高阶函数：
   *       1，promise
   *       2, 定时器
   *       3，arr.map()
   *       4, arr.reduce()
   *
   * 函数的柯里化：通过函数调用继续返回函数的形式，实现多次接收参数最后统一处理的函数编码形式
   */

  /**
   * 高阶函数+柯里化
   */
  demo1 = (dataType) => {
    return (event) => {
      this.setState({ [dataType]: event.target.value })
      console.log('测试')
    }
  }

  /**
   * 不使用柯里化
   */
  demo2 = (dataType, value) => {
    this.setState({ [dataType]: value })
  }

  handleSubmit = (event) => {
    // 阻止form的默认跳转事件
    event.preventDefault()
    const { userName, password } = this.state
    alert(`您输入的用户名是：${userName}，密码是：${password}`)
  }

  render() {
    return (
      <div>
        <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
          用户名：
          <input
            type="text"
            onChange={this.demo1('userName')}
            name="userName"
          ></input>
          密码：
          <input
            type="password"
            onChange={(e) => this.demo2('password', e.target.value)}
            name="password"
          ></input>
          <button>登录</button>
        </form>
      </div>
    )
  }
}
