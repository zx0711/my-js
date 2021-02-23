import React, { Component } from 'react'
import ReactDOM from 'react-dom'
/**
 * 新版生命周期和老版相比，新增2个，去掉三个，分别是：
 *   componentWillMount
 *   componentWillReceiveProps
 *   componentWillUpdate
 * 三个阶段：
 *   挂载
 *   更新
 *   卸载
 */

/**
 * 1,初始化阶段：由ReactDOM.render()触发----初次渲染
 *          1.constructor
 *          2.componentWillMount
 *          3.render
 *          4.componentDidMount ===>常用
 *            一般在这个钩子中做一些初始化的事，例如：开启定时器，发送网络请求，订阅消息
 * 2,更新阶段：由组件内部setState()和父组件重新render触发
 *          1.componentWillReceiveProps
 *          2.shouldComponentUpdate
 *          3.componentWillUpdate
 *          4.render
 *          5.componentDidUpdate
 * 3，下载阶段：由ReactDOM.unmountComponentAtNode触发
 *          1.componentWillUnmount ====>常用
 *            一般在这个钩子里做一些收尾的事情，例如：关闭定时器，取消订阅
 */

export default class OldLife extends Component {
  // 初始化状态
  constructor(props) {
    console.log('Count-constructor')
    super(props)
    this.state = {
      count: 0,
    }
  }

  // 组件将要挂载的钩子
  componentWillMount() {
    console.log('componentWillMount')
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
  }

  // 组件将要更新的钩子
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  // 组件更新完毕的钩子
  componentDidUpdate() {
    console.log('componentDidUpdate')
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
        <h2>当前求和为{count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.death}>卸载组件</button>
        <button onClick={this.force}>
          不更改状态中的任何数据，强制更新一下
        </button>
        <A></A>
      </div>
    )
  }
}

class A extends Component {
  state = {
    carName: '奔驰',
  }

  changeCar = () => {
    this.setState({ carName: '奥迪' })
  }

  render() {
    return (
      <div>
        <div>我是A组件</div>
        <button onClick={this.changeCar}>换车</button>
        <B carName={this.state.carName}></B>
      </div>
    )
  }
}

class B extends Component {
  componentDidMount() {
    console.log('B-----componentDidMount')
  }
  componentWillReceiveProps(props) {
    console.log('B-----componentWillReceiveProps', props)
  }

  shouldComponentUpdate() {
    console.log('B------shouldComponentUpdate')
    return true
  }

  componentWillUpdate() {
    console.log('B------componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('B------componentDidUpdate')
  }

  render() {
    console.log('B------render')
    return <div>我是B组件,接收到的车是{this.props.carName}</div>
  }
}
