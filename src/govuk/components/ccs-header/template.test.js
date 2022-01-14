/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('header')

describe('header', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('header', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('has a role of `banner`', () => {
      const $ = render('header', examples.default)

      const $component = $('.ccs-header')
      expect($component.attr('role')).toEqual('banner')
    })
  })

  describe('custom options', () => {
    it('renders attributes correctly', () => {
      const $ = render('header', examples.attributes)

      const $component = $('.ccs-header')
      expect($component.attr('data-test-attribute')).toEqual('value')
      expect($component.attr('data-test-attribute-2')).toEqual('value-2')
    })

    it('renders classes', () => {
      const $ = render('header', examples.classes)

      const $component = $('.ccs-header')
      expect($component.hasClass('app-header--custom-modifier')).toBeTruthy()
    })

    it('renders custom container classes', () => {
      const $ = render('header', examples['full width'])

      const $component = $('.ccs-header')
      const $container = $component.find('.ccs-header__container')

      expect($container.hasClass('ccs-header__container--full-width')).toBeTruthy()
    })

    it('renders custom navigation classes', () => {
      const $ = render('header', examples['full width with navigation'])

      const $component = $('.ccs-header')
      const $container = $component.find('.ccs-header__navigation')

      expect($container.hasClass('ccs-header__navigation--end')).toBeTruthy()
    })

    it('renders home page URL', () => {
      const $ = render('header', examples['custom homepage url'])

      const $component = $('.ccs-header')
      const $homepageLink = $component.find('.ccs-header__link--homepage')
      expect($homepageLink.attr('href')).toEqual('/')
    })
  })

  describe('with product name', () => {
    it('renders product name', () => {
      const $ = render('header', examples['with product name'])

      const $component = $('.ccs-header')
      const $productName = $component.find('.ccs-header__product-name')
      expect($productName.text().trim()).toEqual('Product Name')
    })
  })

  describe('with service name', () => {
    it('renders service name', () => {
      const $ = render('header', examples['with service name'])

      const $component = $('.ccs-header')
      const $serviceName = $component.find('.ccs-header__link--service-name')
      expect($serviceName.text().trim()).toEqual('Service Name')
    })

    it('renders with service url', () => {
      const $ = render('header', examples['with service name'])

      const $component = $('.ccs-header')
      const $serviceName = $component.find('.ccs-header__link--service-name')
      expect($serviceName.attr('href')).toEqual('/components/ccs-header')
    })
  })

  describe('with navigation', () => {
    it('passes accessibility tests', async () => {
      const $ = render('header', examples['with navigation'])

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('renders navigation', () => {
      const $ = render('header', examples['with navigation'])

      const $component = $('.ccs-header')
      const $list = $component.find('ul.ccs-header__navigation-list')
      const $items = $list.find('li.ccs-header__navigation-item')
      const $firstItem = $items.find('a.ccs-header__link:first-child')
      expect($items.length).toEqual(4)
      expect($firstItem.attr('href')).toEqual('#1')
      expect($firstItem.text()).toContain('Navigation item 1')
    })

    it('renders navigation default label correctly', () => {
      const $ = render('header', examples['with navigation'])

      const $component = $('.ccs-header')
      const $nav = $component.find('nav')

      expect($nav.attr('aria-label')).toEqual('Menu')
    })

    it('allows navigation label to be customised', () => {
      const $ = render('header', examples['with custom navigation label'])

      const $component = $('.ccs-header')
      const $nav = $component.find('nav')

      expect($nav.attr('aria-label')).toEqual('Custom navigation label')
    })

    it('renders navigation with active item', () => {
      const $ = render('header', examples['with navigation'])

      const $activeItem = $('a.ccs-header__navigation-item:first-child')
      expect($activeItem.hasClass('ccs-header__navigation-item--active'))
    })

    it('allows navigation item text to be passed whilst escaping HTML entities', () => {
      const $ = render('header', examples['navigation item with html as text'])

      const $navigationLink = $('.ccs-header__navigation-item a')
      expect($navigationLink.html()).toContain('&lt;em&gt;Navigation item 1&lt;/em&gt;')
    })

    it('allows navigation item HTML to be passed un-escaped', () => {
      const $ = render('header', examples['navigation item with html'])

      const $navigationLink = $('.ccs-header__navigation-item a')
      expect($navigationLink.html()).toContain('<em>Navigation item 1</em>')
    })

    it('renders navigation item with text without a link', () => {
      const $ = render('header', examples['navigation item with text without link'])

      const $navigationItem = $('.ccs-header__navigation-item')
      expect($navigationItem.html().trim()).toEqual('Navigation item 1')
    })

    it('renders navigation item with html without a link', () => {
      const $ = render('header', examples['navigation item with html without link'])

      const $navigationItem = $('.ccs-header__navigation-item')
      expect($navigationItem.html()).toContain('<em>Navigation item 1</em>')
    })

    it('renders navigation item anchor with attributes', () => {
      const $ = render('header', examples['navigation item with attributes'])

      const $navigationLink = $('.ccs-header__navigation-item a')
      expect($navigationLink.attr('data-attribute')).toEqual('my-attribute')
      expect($navigationLink.attr('data-attribute-2')).toEqual('my-attribute-2')
    })

    describe('menu button', () => {
      it('has an explicit type="button" so it does not act as a submit button', () => {
        const $ = render('header', examples['with navigation'])

        const $button = $('.ccs-header__menu-button')

        expect($button.attr('type')).toEqual('button')
      })
      it('renders default label correctly', () => {
        const $ = render('header', examples['with navigation'])

        const $button = $('.ccs-header__menu-button')

        expect($button.attr('aria-label')).toEqual('Show or hide menu')
      })
      it('allows label to be customised', () => {
        const $ = render('header', examples['with custom menu button label'])

        const $button = $('.ccs-header__menu-button')

        expect($button.attr('aria-label')).toEqual('Custom button label')
      })
    })
  })

  describe('SVG logo', () => {
    const $ = render('header', examples.default)
    const $svg = $('.ccs-header__logotype-crown')

    it('sets focusable="false" so that IE does not treat it as an interactive element', () => {
      expect($svg.attr('focusable')).toEqual('false')
    })

    it('sets aria-hidden="true" so that it is ignored by assistive technologies', () => {
      expect($svg.attr('aria-hidden')).toEqual('true')
    })

    describe('fallback PNG', () => {
      const $fallbackImage = $('.ccs-header__logotype-crown-fallback-image')

      it('is invisible to modern browsers', () => {
        expect($fallbackImage.length).toEqual(0)
      })
    })
  })
})
