import React, { Component } from 'react'
import ReactDOM from 'react-dom'
/**
 * 新版生命周期和老版相比，新增2个，去掉三个，分别是：
 *   componentWillMount
 *   componentWillReceiveProps
 *   componentWillUpdate
 * 
 * 新增的：
 *   getDerivedStateFromProps()
 *   getSnapshotBeforeUpdate(prevProps, prevState)

 * 三个阶段：
 *   挂载
 *   更新
 *   卸载
 */

export default class newLife extends Component {
  // 初始化状态
  constructor(props) {
    console.log('Count-constructor')
    super(props)
    this.state = {
      count: 0,
    }
  }

  // 组件将要挂载的钩子
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }

  static getDerivedStateFromProps(nextProps, nextState) {
    // 返回状态对象或者null
    console.log('getDerivedStateFromProps', nextProps, nextState)
    return null
  }

  // 在更新之前获取快照
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState)
    return 'zx' // 返回快照值
  }

  // 组件挂载完毕的钩子
  componentDidMount() {
    console.log('componentDidMount')
    // this.setState({ count: 1 })
  }

  // 控制组件更新的阀门
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
    // hhh
  }

  // 组件更新完毕的钩子，当这个组件完成调用，就是相当于一次更新完成
  componentDidUpdate(prevProps, prevState, snapshotValue) {
    // 拿先前的props、state
    console.log('componentDidUpdate', prevProps, prevState, snapshotValue)
  }

  // 组件将要卸载的钩子
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  // 卸载组件按钮的回调
  death = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  // 强制更新组件按钮的回调
  force = () => {
    this.forceUpdate()
  }

  // 加1按钮的回调
  add = () => {
    let { count } = this.state
    count += 1
    this.setState({ count })
  }

  // 初始化渲染、状态更新之后
  render() {
    console.log('render')
    const { count } = this.state
    return (
      <div>
        <h2>新当前求和为{count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.death}>卸载组件</button>
        <button onClick={this.force}>
          不更改状态中的任何数据，强制更新一下
        </button>
      </div>
    )
  }
}
