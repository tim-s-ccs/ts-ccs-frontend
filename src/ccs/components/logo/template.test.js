/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('logo')

describe('logo', () => {
  it('default example passes accessibility tests', async () => {
    const $ = render('logo', examples.default)

    const results = await axe($.html())
    expect(results).toHaveNoViolations()
  })

  describe('SVG logo', () => {
    const $ = render('logo', examples.default)
    const $svg = $('.ccs-logo__svg')

    it('sets focusable="false" so that IE does not treat it as an interactive element', () => {
      expect($svg.attr('focusable')).toEqual('false')
    })

    it('sets aria-hidden="true" so that it is ignored by assistive technologies', () => {
      expect($svg.attr('aria-hidden')).toEqual('true')
    })

    describe('fallback PNG', () => {
      const $fallbackImage = $('.ccs-logo__fallback-image')

      it('is invisible to modern browsers', () => {
        expect($fallbackImage.length).toEqual(0)
      })
    })
  })
})
