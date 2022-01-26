/* eslint-env jest */

const sassdoc = require('sassdoc')

const configPaths = require('../../config/paths.json')
const PORT = configPaths.ports.test

const { renderSass } = require('../../lib/jest-helpers')

const baseUrl = 'http://localhost:' + PORT

beforeAll(() => {
  // Capture JavaScript errors.
  page.on('pageerror', error => {
    // If the stack trace includes 'all.js' then we want to fail these tests.
    if (error.stack.includes('all.js')) {
      throw error
    }
  })
})

describe('CCS Frontend', () => {
  describe('javascript', () => {
    it('can be accessed via `CCSFrontend`', async () => {
      await page.goto(baseUrl + '/', { waitUntil: 'load' })

      const CCSFrontendGlobal = await page.evaluate(() => window.CCSFrontend)

      expect(typeof CCSFrontendGlobal).toBe('object')
    })
    it('exports `initAll` function', async () => {
      await page.goto(baseUrl + '/', { waitUntil: 'load' })

      const typeofInitAll = await page.evaluate(() => typeof window.CCSFrontend.initAll)

      expect(typeofInitAll).toEqual('function')
    })
    it('exports Components', async () => {
      await page.goto(baseUrl + '/', { waitUntil: 'load' })

      const CCSFrontendGlobal = await page.evaluate(() => window.CCSFrontend)

      var components = Object.keys(CCSFrontendGlobal).filter(method => method !== 'initAll')

      // Ensure GOV.UK Frontend exports the expected components
      expect(components).toEqual([
        'Header'
      ])
    })
    it('exported Components have an init function', async () => {
      await page.goto(baseUrl + '/', { waitUntil: 'load' })

      var componentsWithoutInitFunctions = await page.evaluate(() => {
        var components = Object.keys(window.CCSFrontend)
          .filter(method => method !== 'initAll')

        return components.filter(component => {
          var prototype = window.CCSFrontend[component].prototype
          return typeof prototype.init !== 'function'
        })
      })

      expect(componentsWithoutInitFunctions).toEqual([])
    })
  })

  // Sass functions will be automatically evaluated at compile time and the
  // return value from the function will be used in the compiled CSS.
  //
  // However, CSS has native 'function'-esque syntax as well
  // (e.g. `background-image: url(...)`) and so if you call a non-existent
  // function then Sass will just include it as part of your CSS. This means if
  // you rename a function, or accidentally include a typo in the function name,
  // these function calls can end up in the compiled CSS.
  //
  // Example:
  //
  //   @function govuk-double($number) {
  //     @return $number * 2;
  //   }
  //
  //   .my-class {
  //     height: govuk-double(10px);
  //     width: govuk-duoble(10px);
  //   }
  //
  // Rather than throwing an error, the compiled CSS would look like:
  //
  //   .my-class {
  //     height: 20px;
  //     width: govuk-duoble(10px); // intentional typo
  //   }
  //
  // This test attempts to match anything that looks like a function call within
  // the compiled CSS - if it finds anything, it will result in the test
  // failing.
  it('does not contain any unexpected govuk- function calls', async () => {
    const sass = '@import "all"'

    const results = await renderSass({ data: sass })
    const css = results.css.toString()

    const functionCalls = css.match(/_?govuk-[\w-]+\(.*?\)/g)

    expect(functionCalls).toBeNull()
  })

  describe('Sass documentation', () => {
    it('associates everything with a group', async () => {
      return sassdoc.parse([
        `${configPaths.src}/**/*.scss`,
        `!${configPaths.src}/vendor/*.scss`
      ])
        .then(docs => docs.forEach(doc => {
          return expect(doc).toMatchObject({
            // Include doc.context.name in the expected result when this fails,
            // giving you the context to be able to fix it
            context: {
              name: doc.context.name
            },
            group: [
              expect.not.stringMatching('undefined')
            ]
          })
        }))
    })
  })
})
