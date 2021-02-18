import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ConstructorProps extends Component {
  // 对标签属性进行类型、必要性的限制
  static propTypes = {
    name: PropTypes.string, // 非必传
    age: PropTypes.number.isRequired, // 限制必传，且为数字类型
    speak: PropTypes.func, // 限制传入的是一个函数
  }

  // 指定默认标签属性值
  static defaultProps = {
    name: 'zx',
  }

  constructor(props) {
    console.log('===props---', props)
    // 构造器是否接受props,是否传递给super,取决于：是否需要在构造器中通过this访问props
    // 类中的构造器能省略就省略
    // 如果不写super(props),则打印this.props为undefined
    super(props)
  }
  render() {
    const { name, age, sex } = this.props
    return (
      <ul>
        <li>姓名:{name}</li>
        <li>性别：{age}</li>
        <li>年龄：{sex}</li>
      </ul>
    )
  }
}

export default ConstructorProps
