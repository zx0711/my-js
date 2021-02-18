import React from 'react'
import PropTypes from 'prop-types'

function FuncProps({ name, age, sex }) {
  return (
    <ul>
      <li>姓名:{name}</li>
      <li>性别：{age}</li>
      <li>年龄：{sex}</li>
    </ul>
  )
}

FuncProps.propTypes = {
  name: PropTypes.string, // 非必传
  age: PropTypes.number.isRequired, // 限制必传，且为数字类型
  speak: PropTypes.func, // 限制传入的是一个函数
}

// 指定默认标签属性值
FuncProps.defaultProps = {
  name: 'zx',
}
export default FuncProps
