/*
 * @Description: stateHook
 * @Author: xiao.zhang
 * @Date: 2020-09-28 23:09:47
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-09 16:42:41
 */
import React, { useState } from 'react'
let showSex = true
function ErrorDemo() {
  const [count, setCount] = useState(0)
  if (showSex) {
    const [age, setAge] = useState(0)
    showSex = false
  }
  const [age1, setAge1] = useState(0)

  return (
    <div>
      <div>{count}</div>
      <div>{age}</div>
      <div>{age1}</div>
    </div>
  )
}

export { ErrorDemo }
