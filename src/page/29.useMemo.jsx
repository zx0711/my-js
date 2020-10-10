/*
 * @Description:按照例子，又重新写了一个useMemo的用法，来验证useMemo的第二个参数
 * @Author: xiao.zhang
 * @Date: 2020-10-10 17:30:21
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-10 19:50:11
 */
import React, { useState, useMemo, memo } from 'react'
// , PureComponent, memo, useState, useMemo, useCallback

// function Count(props) {
//   return <div onClick={props.onClick}>子组件count值：{props.count}</div>
// }

const Count = memo(function Count(props) {
  console.log('count render')
  return <div onClick={props.onClick}>子组件count值：{props.double}</div>
})

function App(props) {
  const [count, setCount] = useState(0)

  // 第一个参数是要执行的函数
  // 第二个参数是执行函数依赖的变量组成的数据
  // 这里只有count发生变化double才会重新计算,没有改变的情况就是从缓存取的值
  const double = useMemo(() => {
    return count * 2
  }, [count > 3])

  const onClick = useMemo(() => {
    // 这里返回的依然是函数
    return () => {
      console.log('click')
    }
  }, [])

  return (
    <div className="app">
      <p>父组件count值：{count}</p>
      <Count double={double} onClick={onClick} />
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Add
      </button>
      <div>double值：{double}</div>
    </div>
  )
}

export default App
