import { expect, test } from '@oclif/test';

describe('contract-reader index', () => {
  test
    .stdout()
    .command(['contract-reader', 'foobar', '--from=oclif'])
    .it('runs contract-reader cmd', (ctx) => {
      expect(ctx.stdout).to.contain('foobar is not defined:');
    });
});
