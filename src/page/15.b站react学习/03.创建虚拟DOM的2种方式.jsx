import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 使用jsx语法创建虚拟DOM
 */
const VDOM = <h1 id="title">hello，react</h1>
ReactDOM.render(VDOM, document.getElementById('root'))

/**
 * 使用js语法创建虚拟DOM
 * React.createElement(标签名，标签属性，标签内容)
 */
const VDOM2 = React.createElement('h1', { id: 'title' }, 'hello，react')
ReactDOM.render(VDOM2, document.getElementById('root'))

/**
 * jsx就是js写法的语法糖（就是js的便捷方式）
 * jsx格式的语法最终也会变成js格式
 */
