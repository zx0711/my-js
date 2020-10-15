/*
 * @Description: ContextHook
 * @Author: xiao.zhang
 * @Date: 2020-09-28 23:09:47
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-15 11:12:20
 */

import React, { createContext, useContext, useState } from 'react'

const CountContext = createContext(null)
const CountContext2 = createContext(null)

function Counter() {
  let count = useContext(CountContext)
  let count2 = useContext(CountContext2)
  return (
    <div>
      <h2>{count}</h2>
      <h2>{count2}</h2>
    </div>
  )
  // return (
  //   <CountContext.Consumer>
  //     {(value) => (
  //       <CountContext2.Consumer>
  //         {(value2) => (
  //           <div>
  //             <h2>{value}</h2>
  //             <h2>{value2}</h2>
  //           </div>
  //         )}
  //       </CountContext2.Consumer>
  //     )}
  //   </CountContext.Consumer>
  // )
}

function ContextHook() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div
        onClick={() => {
          setCount(count + 1)
        }}
      >
        点击修改+1
      </div>
      <CountContext.Provider value={count}>
        <CountContext2.Provider value={count + 1}>
          <Counter></Counter>
        </CountContext2.Provider>
      </CountContext.Provider>
    </div>
  )
}

export { ContextHook }
