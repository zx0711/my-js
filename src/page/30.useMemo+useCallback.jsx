// import React, { useState, useMemo } from 'react'

// const set = new Set()
// let showFruit = true
// function expensiveCalculate(num) {
//   console.log('expensive calculate')
//   return num.join(',')
// }

// function App() {
//   const [num, setNum] = useState([1, 2, 3])

//   if (showFruit) {
//     const [num1, setNum1] = useState([4, 5, 6])
//     showFruit = false
//   }

//   console.log('每次都走一遍吗', num)

//   const result = useMemo(() => expensiveCalculate(num), [num])

//   return (
//     <>
//       <ChildrenApp num={num} num1={10} result={result} />
//       <button onClick={() => setNum([7, 8, 9])}>change num</button>
//       {/* <button onClick={() => setNum1([10, 11, 12])}>change num1</button> */}
//     </>
//   )
// }

// function ChildrenApp({ num, num1, result }) {
//   set.add(result)

//   console.log(set)

//   return (
//     <div>
//       {num} - {num1} - {result}
//     </div>
//   )
// }

// export default App

// import React, { useState, useMemo } from 'react'

// export default function WithMemo() {
//   const [count, setCount] = useState(1)
//   const [val, setValue] = useState('小明')
//   const add = useMemo(() => {
//     console.log('compute')
//     return count
//   })

//   return (
//     <div>
//       <h4>
//         {count}-{add}
//       </h4>
//       {val}
//       <div>
//         <button onClick={() => setCount(count + 1)}>+1</button>
//         <input value={val} onChange={(event) => setValue(event.target.value)} />
//       </div>
//     </div>
//   )
// }

// !没搞明白的setState封装
import React, { useEffect, useRef, useState } from 'react'

const useXState = (initState) => {
  const [state, setState] = useState(initState)
  let isUpdate = useRef()
  const setXState = (state, cb) => {
    setState((prev) => {
      console.log('======prev======', prev)
      isUpdate.current = cb
      return typeof state === 'function' ? state(prev) : state
    })
  }
  useEffect(() => {
    console.log('=======useEffect')
    if (isUpdate.current) {
      isUpdate.current()
    }
  })

  return [state, setXState]
}

function App() {
  const [state, setXState] = useXState(0)
  return (
    <div
      onClick={() => {
        setXState(state + 1, () => {
          console.log('=====state=====', state)
        })
      }}
    >
      {state}
    </div>
  )
}

export default App
