import {expect, test} from '@oclif/test'

describe('contract-reader balanceOf', () => {
  test
  .stdout()
  .command(['contract-reader:balanceOf'])
  .it('runs contract-reader balanceOf cmd', ctx => {
    expect(ctx.stdout).to.contain('WIP')
  })
})
