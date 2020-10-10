/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-10-10 11:07:53
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-10 11:38:47
 */
import React, { useContext } from 'react'
import { ColorContext } from './color'

function ShowArea() {
  const { color } = useContext(ColorContext)
  return <div style={{ color: color }}>字体反应为{color}</div>
}

export default ShowArea
