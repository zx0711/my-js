import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// 创建类式组件
class Person extends Component {
  render() {
    // render是放在哪里的？--- render是放在Person类的原型对象上，供Person类的实例对象使用
    // render中的this是谁？--- Person类的实例对象 === Person组件实例对象
    console.log(this)
    return <div>我是用类定义的组件(适用于复杂组件)</div>
  }
}

export default Person

/**
 * 执行了ReactDOM.render(<MyComponent/>...之后，发生了什么
 *   1，React解析了组件标签，找到了MyComponent组件
 *   2，发现组件是使用类定义的，随后new出该类的实例，并通过该实例调用到原型上的render方法
 *   3，将render返回的虚拟DOM转为真实DOM
 */

// ReactDOM.render(<Person/>,document.getElementById('root'))
