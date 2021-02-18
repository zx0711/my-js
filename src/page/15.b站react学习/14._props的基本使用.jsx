import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TestProps extends Component {
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
// react15的写法
// TestProps.propTypes = {
//   name: React.PropTypes.number,
// }

// 对标签属性进行类型、必要性的限制
TestProps.propTypes = {
  name: PropTypes.string, // 非必传
  age: PropTypes.number.isRequired, // 限制必传，且为数字类型
  speak: PropTypes.func, // 限制传入的是一个函数
}

// 指定默认标签属性值
TestProps.defaultProps = {
  name: 'zx',
}

export default TestProps
