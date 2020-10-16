/*
 * @Description:自定义一个hook,返回页面的宽和高度，
 * @Author: xiao.zhang
 * @Date: 2020-10-10 15:46:02
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-16 17:26:53
 */
import React, { useState, useEffect, useCallback } from 'react'

// 获取浏览器窗口大小
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  // 重新计算大小
  // useCallback两个参数： 回调函数，数组。回调函数只在依赖数组改变时候才会更新
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])

  console.log('====onResize====', onResize)

  useEffect(() => {
    // console.log('不停的加入监听事件')
    window.addEventListener('resize', onResize)
    return () => {
      // console.log('不停的清除监听事件')
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return size
}

function DefineHook() {
  const size = useWinSize()
  return (
    <div>
      页面size: {size.width}*{size.height}
    </div>
  )
}

export default DefineHook

// 测试useRef，因为useRef不受任何影响，所以写定时器可以达到，数据已修改，但页面没有重新刷新
// import React, { useState, useEffect, useMemo, useRef } from 'react'

// export default function App(props) {
//   const [count, setCount] = useState(0)

//   const doubleCount = useMemo(() => {
//     return 2 * count
//   }, [count])

//   const couterRef = useRef()

//   // useEffect(() => {
//   //   document.title = `The value is ${count}`
//   //   console.log(couterRef.current)
//   // }, [count])
//   useEffect(() => {
//     console.log('zou')
//     couterRef.current = setInterval(() => {
//       setCount((count) => count + 1)
//     }, 1000)
//   }, [])

//   useEffect(() => {
//     if (count > 4) {
//       clearInterval(couterRef.current)
//       setCount(0)
//     }
//   })

//   return (
//     <>
//       <button
//         ref={couterRef}
//         onClick={() => {
//           setCount(count + 1)
//         }}
//       >
//         Count: {count}, double: {doubleCount}
//       </button>
//     </>
//   )
// }
