/*
 * @Description:使用useContext 和 useReducer达到redux 的效果。useContext的使用一定是要和createContext配合使用的
 * @Author: xiao.zhang
 * @Date: 2020-10-10 11:20:11
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-10 19:51:38
 */
import React from 'react'
import ShowArea from './showArea'
import Buttons from './buttons'
import { Color } from './color'

function Index() {
  return (
    <div>
      <Color>
        <ShowArea></ShowArea>
        <Buttons></Buttons>
      </Color>
    </div>
  )
}

export default Index
