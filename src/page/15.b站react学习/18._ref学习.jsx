import React, { Component } from 'react'

// 字符串形式的ref，存在一些效率问题，具体react也没反馈，所以不推荐使用，已过时，可能会在未来的版本移除
class TestRefs extends Component {
  showData = () => {
    // 组件内的标签可以定义ref属性来标识别自己，就相当于原生的id,用法和获取到id是一样的，获取到的是真实dom
    console.log(
      '点击按钮',
      this.refs.input1 === document.getElementById('input1')
    )
    const { input1 } = this.refs
    alert(input1.value)
  }

  showData2 = () => {
    const { input2 } = this.refs
    alert(input2.value)
  }
  render() {
    return (
      <div>
        <input
          ref="input1"
          id="input1"
          type="text"
          placeholder="点击按钮提示数据"
        ></input>
        <button ref="button2" onClick={this.showData}>
          点我提示左侧的数据
        </button>
        <input
          ref="input2"
          type="text"
          placeholder="失去焦点提示数据"
          onBlur={this.showData2}
        ></input>
      </div>
    )
  }
}
export default TestRefs
