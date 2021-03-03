import React, { Component } from 'react'

export default class SPA extends Component {
  /**
   * SPA的理解：
   * 1，单页Web应用
   * 2，整个页面只有一个完整的页面.html
   * 3，点击页面中的链接不会刷新页面，只会做页面的局部更新
   * 4，数据都需要通过ajax请求获取，并在前端异步展现
   * 5，特点总结：单页面多组件
   *
   * 路由的理解：
   * 1，什么是路由
   *    a,一个路由就是一个映射关系
   *    b,key为路径，value可能是function和component
   * 2,前端路由：
   *    a,浏览器端路由，value是component,用于展示页面内容
   *    b,注册路由：<Route path='/test' component={Test}/>
   *    c,工作过程：当浏览器的path变为/test时，当前路由组件就会变为Test组件
   */
  render() {
    return <div></div>
  }
}
