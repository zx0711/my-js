import React, { Component } from 'react'

// 字符串形式的ref
export default class TT extends Component {
  state = {
    isHot: true,
  }
  showData = () => {
    // 组件内的标签可以定义ref属性来标识别自己，就相当于原生的id,用法和获取到id是一样的，获取到的是真实dom
    const { input1 } = this
    alert(input1.value)
  }

  changeWeather = () => {
    const { isHot } = this.state
    this.setState({ isHot: !isHot })
  }

  saveInput = (c) => {
    console.log('@', c)
    this.input1 = c
  }

  render() {
    const { isHot } = this.state
    return (
      <div>
        <h2>今天天气很{isHot ? '炎热' : '凉爽'}</h2>
        {/* <input
          ref={(c) => {
            this.input1 = c
            console.log('@@', c)
          }}
          type="text"
          placeholder="点击按钮提示数据"
        ></input> */}
        <input
          ref={this.saveInput}
          type="text"
          placeholder="点击按钮提示数据"
        ></input>
        <button onClick={this.showData}>点我提示输入的数据</button>
        <button onClick={this.changeWeather}>点我切换天气</button>
      </div>
    )
  }
}
