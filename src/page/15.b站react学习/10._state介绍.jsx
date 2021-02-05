import React, { Component } from 'react'
export default class FF extends Component {
  constructor(props, name) {
    super(props)
    this.name = 1
    // 拿原型上的handleFoo，生成一个新的函数名叫handleFoo，挂在实例对象身上
    this.handleFoo = this.handleFoo.bind(this)
    // 上面等于====
    this.demo = this.handleFoo.bind(this)
  }

  /**
   * 理解：
   *  1，组件被称为‘状态机’,通过更新组件的state来更新对应的页面显示（重新渲染组件）
   * 注意：
   *  1，组件中render方法中的this为组件实例对象
   *  2，组件自定义的方法中this为undefined,如何解决
   *    a, 强制绑定this:通过函数对象的bind()方法
   *    b, 箭头函数
   *  3，组件中只有被类的实例调用的方法里的this才为实例
   */

  handleFoo() {
    // handleFoo是放在哪里的？--- handleFoo是放在FF类的原型对象上，供FF类的实例对象使用
    // 只有通过FF实例对象调用的handleFoo时，handleFoo中的this才是FF实例对象
    // 由于handleFoo是作为onClick的回调，所以不是通过实例调用的，是直接调用
    // 类中的方法默认开启了局部的严格模式，所以handleFoo中的this为undefined
    console.log('我是标题被点击了1', this)
  }

  render() {
    console.log('我是标题被点击了2', this) // FF的实例对象
    // handleFoo在FF的实例对象上，render里的this就是指这个实例对象，所以handleFoo在this上
    return <div onClick={this.demo}>我是标题</div>
  }
}
