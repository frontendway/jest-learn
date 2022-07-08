import {
  runtimeCallback,
  fetchData
} from '../src/mock/index.js'
import axios from 'axios'

jest.mock('axios')

it('测试函数被调用', () => {
  const fn = jest.fn()
  runtimeCallback(fn)
  expect(fn).toBeCalled()
})

it('测试函数被调用 2 次', () => {
  const fn = jest.fn()
  runtimeCallback(fn)
  runtimeCallback(fn)
  expect(fn.mock.calls.length).toBe(2)
})

it('改变 axios 内部实现', async () => {
  axios.get.mockResolvedValueOnce({data: 'hello'})
  await fetchData()
  .then(data => {
    expect(data).toEqual('hello')
  })
})
