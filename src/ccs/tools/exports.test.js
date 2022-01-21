/* eslint-env jest */

const { renderSass } = require('../../../lib/jest-helpers')

const sassConfig = {
  outputStyle: 'compressed'
}

describe('@mixin ccs-exports', () => {
  it('will only output a named section once', async () => {
    const sass = `
      @import "tools/exports";

      @include ccs-exports(foo) {
        .foo {
          color: red;
        }
      }

      @include ccs-exports(foo) {
        .foo {
          color: blue;
        }
      }`

    const results = await renderSass({ data: sass, ...sassConfig })

    expect(results.css.toString().trim()).toEqual('.foo{color:red}')
  })

  it('will export differently named sections', async () => {
    const sass = `
      @import "tools/exports";

      @include ccs-exports(foo) {
        .foo {
          color: red;
        }
      }

      @include ccs-exports(bar) {
        .bar {
          color: blue;
        }
      }`

    const results = await renderSass({ data: sass, ...sassConfig })

    expect(results.css.toString().trim())
      .toEqual('.foo{color:red}.bar{color:blue}')
  })
})
