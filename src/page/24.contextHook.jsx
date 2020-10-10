/*
 * @Description: ContextHook
 * @Author: xiao.zhang
 * @Date: 2020-09-28 23:09:47
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-09 19:12:38
 */
import React, { useState, useEffect, createContext, useContext } from 'react'

const CountContext = createContext()

function Counter() {
  let count = useContext(CountContext)
  return <h2>{count}</h2>
}

function ContextHook() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('你点了多少', count)
    return () => {
      console.log('++++++++++')
    }
  })

  return (
    <div>
      <p>你点击了{count}次</p>
      <div
        onClick={() => {
          setCount(count + 1)
        }}
      >
        click me
      </div>
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  )
}

export { ContextHook }
