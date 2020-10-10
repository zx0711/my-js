import React, { useReducer } from 'react'

function ReducerDemo() {
  const [state, dispatch] = useReducer(countReducer, 0)
  return (
    <div>
      <h2>现在的分数是{state}</h2>
      <button
        onClick={() => {
          dispatch('add')
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch('sub')
        }}
      >
        Decrement
      </button>
    </div>
  )
}

function countReducer(state, action) {
  switch (action) {
    case 'add':
      return state + 1
    case 'sub':
      return state - 1
    default:
      return state
  }
}

export default ReducerDemo
