import React, { Component } from 'react'

// 字符串形式的ref
export default class CreateRefs extends Component {
  /**
   * React.createRef调用后返回一个容器，该容器可以存储被ref所标识的节点,该容器是‘专人专用的’
   */
  myRef = React.createRef()
  myRef2 = React.createRef()
  showData = () => {
    console.log('点击按钮', this.myRef.current)
  }

  showData2 = () => {
    console.log('点击按钮', this.myRef2.current)
  }
  render() {
    return (
      <div>
        <input
          ref={this.myRef}
          type="text"
          placeholder="点击按钮提示数据"
        ></input>
        <button ref="button2" onClick={this.showData} ref={this.myRefss}>
          点我提示左侧的数据
        </button>
        <input
          ref={this.myRef2}
          onBlur={this.showData2}
          type="text"
          placeholder="失去焦点提示数据"
        ></input>
      </div>
    )
  }
}
