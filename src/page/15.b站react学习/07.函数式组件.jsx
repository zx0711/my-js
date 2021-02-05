import React from 'react'

function Foo() {
  console.log('this指向', this) // 此处的window是undefined,因为babel开启了严格模式
  return <h2>我是用函数定义的组件</h2>
}

export default Foo

/**
 * 执行了ReactDOM.render(<MyComponent/>...之后，发生了什么
 *   1，React解析了组件标签，找到了MyComponent组件
 *   2，发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM,转为真实DOM,呈现在页面
 */
// ReactDOM.render(<Foo></Foo>, '挂载地址')
