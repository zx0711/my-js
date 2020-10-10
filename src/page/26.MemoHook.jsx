/*
 * @Description:useMemo的使用，根据胖老师的讲解写的，useMemo返回的只是一个值
 * @Author: xiao.zhang
 * @Date: 2020-10-10 13:50:13
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-10 19:45:47
 */
import React, { useState, useMemo } from 'react'

function MemoHook() {
  const [xiaohong, setxiaohong] = useState('小红在待客状态')
  const [xiaoming, setxiaoming] = useState('小明在待客状态')
  return (
    <>
      <button
        onClick={() => {
          setxiaohong(new Date().getTime())
        }}
      >
        小红
      </button>
      <button
        onClick={() => {
          setxiaoming(new Date().getTime() + '小明向我们走来')
        }}
      >
        小明
      </button>
      <ChildComponent name={xiaohong}>{xiaoming}</ChildComponent>
    </>
  )
}

function ChildComponent({ name, children }) {
  function changexiaohong() {
    console.log('他来了，他来了，小红向我们走来了')
    return name + ',小红向我们走来了'
  }

  const actionxiaohong = useMemo(() => changexiaohong(name), [name])

  return (
    <>
      <div>{actionxiaohong}</div>
      <div>{children}</div>
    </>
  )
}

export default MemoHook
