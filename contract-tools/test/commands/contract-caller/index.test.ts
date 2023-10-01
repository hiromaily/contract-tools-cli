import {expect, test} from '@oclif/test'

describe('contract-caller index', () => {
  test
  .stdout()
  .command(['contract-caller', 'foobar', '--from=oclif'])
  .it('runs contract-caller cmd', ctx => {
    expect(ctx.stdout).to.contain('foobar is not defined:')
  })
})
