import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SimpleProps extends Component {
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
  render() {
    console.log('类', SimpleProps.propTypes)
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

export default SimpleProps
