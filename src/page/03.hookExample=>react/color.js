/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-10-10 11:27:13
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-10 11:46:59
 */
import React, { createContext, useReducer } from 'react'

export const ColorContext = createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR'

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}

export const Color = (props) => {
  const [color, dispatch] = useReducer(reducer, 'blue')
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  )
}
