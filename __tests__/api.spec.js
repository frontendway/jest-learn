import {
  fetchData1,
  fetchData2,
  fetchData3
} from '../src/api/index.js'

it('测试 fetchData1', (done) => {
  fetchData1(resp => {
    expect(resp.data).toEqual({name: 'zhangsan'})
    done()
  })
})

it('测试 fetchData2 return promise', () => {
  return fetchData2()
  .then(resp => {
    expect(resp.data).toEqual({name: 'zhangsan'})
  })
})

it('测试 fetchData2 async await', async () => {
  await fetchData2()
  .then(resp => {
    expect(resp.data).toEqual({name: 'zhangsan'})
  })
})

it('测试 fetchData2 响应包含 {name: "zhangsan"}', () => {
  return expect(fetchData2()).resolves.toMatchObject({
    data: {name: 'zhangsan'}
  })
})

it('测试 fetchData2 响应包含 {name: "zhangsan"} async await', async () => {
  await expect(fetchData2()).resolves.toMatchObject({
    data: {name: 'zhangsan'}
  })
})
