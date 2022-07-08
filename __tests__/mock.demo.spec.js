jest.mock('../src/mock/mock.demo')
import { fetchData } from '../src/mock/mock.demo'
const { sum } = jest.requireActual('../src/mock/mock.demo')

it('mock fetchData', async () => {
  await fetchData()
  .then(resp => {
    expect(resp).toEqual({name: 'lisi'})
  })
})

it('test sum', () => {
  expect(sum(1, 2)).toBe(3)
})
