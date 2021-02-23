import React, { Component } from 'react'

export default class ReactEvent extends Component {
  /**
   * 1,通过onXxx属性指定事件处理函数
   *  （1),React使用的是自定义事件，而不是原生的Dom事件----为了更好的兼容性，自定义事件里有兼容代码
   *  （2),React事件是使用事件委托的形式
   * 2,通过event.target得到发生事件的DOM元素对象
   * 3,不要过度使用ref,是可以避免的，发生事件的元素正好是要操作的元素就可以使用event.target
   */
  myRef = React.createRef()
  myRef2 = React.createRef()
  showData = () => {
    console.log('点击按钮', this.myRef.current)
  }

  showData2 = (e) => {
    console.log('点击按钮', e.target.value)
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
          点我提示左侧的数据，事件处理机制
        </button>
        <input
          onBlur={this.showData2}
          type="text"
          placeholder="失去焦点提示数据"
        ></input>
      </div>
    )
  }
}
