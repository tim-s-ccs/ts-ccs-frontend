/* eslint-env jest */

const { renderSass } = require('../../../lib/jest-helpers')

const sassConfig = {
  outputStyle: 'compact'
}

describe('@function ccs-colour', () => {
  let sassBootstrap = ''

  beforeEach(() => {
    sassBootstrap = `
      @import "helpers/colour";
    `
  })

  it('returns a colour from the colour palette', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        color: ccs-colour('red');
      }`

    const results = await renderSass({ data: sass, ...sassConfig })

    expect(results.css.toString().trim()).toBe('.foo { color: #9b1a47; }')
  })

  it('works with unquoted strings', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        color: ccs-colour(red);
      }`

    const results = await renderSass({ data: sass, ...sassConfig })

    expect(results.css.toString().trim()).toBe('.foo { color: #9b1a47; }')
  })

  it('throws an error if a non-existent colour is requested', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        color: ccs-colour('hooloovoo');
      }`

    await expect(renderSass({ data: sass, ...sassConfig }))
      .rejects
      .toThrow(
        'Unknown colour `hooloovoo`'
      )
  })
})
