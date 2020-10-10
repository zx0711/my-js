/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-10-10 11:07:35
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-10 11:50:05
 */
import React, { useContext } from 'react'
import { ColorContext, UPDATE_COLOR } from './color'

function Buttons() {
  const { dispatch } = useContext(ColorContext)
  return (
    <div>
      <buttons
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: 'red' })
        }}
      >
        红色
      </buttons>
      <buttons
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: 'yellow' })
        }}
      >
        黄色
      </buttons>
    </div>
  )
}

export default Buttons
