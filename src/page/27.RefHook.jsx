/*
 * @Description:根据胖老师讲解的useRef，inputE1.current是可变的
 * @Author: xiao.zhang
 * @Date: 2020-10-10 14:40:12
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-10 19:46:40
 */
import React, { useRef, useState } from 'react'

function RefHook() {
  const inputE1 = useRef(null)
  console.log(inputE1)
  const onButtonClick = () => {
    inputE1.current.value = 'hello,zx'
  }
  return (
    <>
      <input ref={inputE1} type="text" />
      <button onClick={onButtonClick}>在input上展示文字</button>
    </>
  )
}
export default RefHook
