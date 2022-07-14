import { runCallback, runPendingCallback } from '../src/timer/index.js'

jest.useFakeTimers()

it('测试定时器函数', () => {
  const fn = jest.fn()
  runCallback(fn)

  jest.runAllTimers()
  expect(fn).toBeCalled()
  expect(fn).toHaveBeenCalledTimes(1)
})

it('测试双重定时器函数', () => {
  const fn = jest.fn()
  runPendingCallback(fn)

  jest.runOnlyPendingTimers()
  expect(fn).toBeCalled()
  expect(fn).toHaveBeenCalledTimes(1)
})

it('测试快进指定时间定时器函数', () => {
  const fn = jest.fn()
  runPendingCallback(fn)

  jest.advanceTimersByTime(2000)
  expect(fn).toBeCalled()
  expect(fn).toHaveBeenCalledTimes(2)
})
