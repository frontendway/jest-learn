import { generatorConfig } from '../src/snapshot/index.js'

it('生成 config 配置', () => {
  expect(generatorConfig()).toMatchSnapshot()
})
