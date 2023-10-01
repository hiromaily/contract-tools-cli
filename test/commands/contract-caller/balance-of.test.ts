import { expect, test } from '@oclif/test';

describe('contract-caller balanceOf', () => {
  test
    .stdout()
    .command(['contract-caller:balanceOf'])
    .it('runs contract-caller balanceOf cmd', (ctx) => {
      expect(ctx.stdout).to.contain('WIP');
    });
});
