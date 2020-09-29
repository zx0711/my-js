/*
 * @Description: 
 * @Author: xiao.zhang
 * @Date: 2020-09-18 11:06:27
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-29 14:12:59
 */
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
