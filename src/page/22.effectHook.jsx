/*
 * @Description: effectHook
 * @Author: xiao.zhang
 * @Date: 2020-09-28 23:09:47
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-29 19:31:32
 */
import React, { useState, useEffect, useRef } from 'react'

function ErrorDemo() {
  const [count, setCount] = useState(0)
  const dom = useRef(null)
  useEffect(() => {
    dom.current.addEventListener('click', () => setCount(count + 1))
  }, [])
  return <div ref={dom}>{count}</div>
}

export { ErrorDemo }
