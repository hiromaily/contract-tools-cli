import {expect, test} from '@oclif/test'

describe('hogehoge', () => {
  test
  .stdout()
  .command(['hogehoge'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['hogehoge', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
