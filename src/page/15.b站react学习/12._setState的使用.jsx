import React, { Component } from 'react'

export default class TestSetState extends Component {
  // 构造器调用几次？ --- 1次
  constructor(props) {
    console.log('constructor')
    super(props)
    // 构造器作用1: 初始化状态
    this.state = {
      isHot: false,
      wind: '微风',
    }
    // 构造器作用2: 解决change中this指向问题
    this.change = this.change.bind(this)
  }

  // change调用几次？ --- 点几次调几次
  change() {
    console.log('我是change', this)
    const { isHot } = this.state
    // 严重注意： 状态不可直接更改，要借助一个内置的API去更改
    // this.state.isHot = !isHot

    //
    this.setState({ isHot: !isHot })
  }

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
