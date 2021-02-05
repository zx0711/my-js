import React, { Component } from 'react'

export default class SimpleSetState extends Component {
  state = {
    isHot: false,
    wind: '微风',
  }

  // change调用几次？ --- 点几次调几次
  // 给SimpleSetState实例对象绑定了一个属性
  // 赋值语句的形式+箭头函数
  change = () => {
    console.log('ss,', this)
    const { isHot } = this.state

    this.setState({ isHot: !isHot })
  }

  // 给SimpleSetState实例对象绑定了一个属性
  // change = function () {}

  // 给SimpleSetState原型绑定了方法
  // change() {}

  // render调用几次？ --- 1+n次，1是初始化那次，n是状态更新次数
  render() {
    const { isHot, wind } = this.state
    // handleFoo在FF的实例对象上，render里的this就是指这个实例对象，所以handleFoo在this上
    return (
      <div onClick={this.change}>
        今天天气很{isHot ? '炎热' : '凉爽'},{wind}
      </div>
    )
  }
}
