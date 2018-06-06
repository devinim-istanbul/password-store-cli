import {expect, test} from '@oclif/test'

describe('show', () => {
  test
  .stdout()
  .command(['show'])
  .it('runs show', ctx => {
    expect(ctx.stdout).to.contain('Encode file')
  })

  test
  .stdout()
  .command(['show', '--password', 'sh3lf1shJ3an'])
  .it('runs show --password sh3lf1shJ3an', ctx => {
    expect(ctx.stdout).to.contain('sh3lf1shJ3an')
  })
})
