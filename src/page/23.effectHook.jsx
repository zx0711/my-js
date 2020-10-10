/*
 * @Description: effectHook
 * @Author: xiao.zhang
 * @Date: 2020-09-28 23:09:47
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-09 17:46:58
 */
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  useEffect(() => {
    console.log('我来了,index页面')
    return () => {
      console.log('我走了，index页面')
    }
  }, [])
  return <h2>zxx.com</h2>
}

function List() {
  useEffect(() => {
    console.log('我来了，list页面')
    return () => {
      console.log('我走了，list页面')
    }
  })
  return <h2>list.com</h2>
}

function EffectHook() {
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
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list/">列表</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" exact component={List} />
      </Router>
    </div>
  )
}

export { EffectHook }
