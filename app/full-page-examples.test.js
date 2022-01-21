/* eslint-env jest */

const request = require('request')
const cheerio = require('cheerio')

const configPaths = require('../config/paths.json')
const PORT = configPaths.ports.test

const expectedPages = [
  'facilities-management'
]

// Returns a wrapper for `request` which applies these options by default
const requestPath = request.defaults({
  baseUrl: `http://localhost:${PORT}/full-page-examples/`,
  headers: {
    'Content-Type': 'text/plain'
  }
})

describe(`http://localhost:${PORT}/full-page-examples/`, () => {
  describe.each(expectedPages)('%s', path => {
    it('should resolve with a http status code of 200', done => {
      requestPath.get(path, (err, res) => {
        expect(res.statusCode).toEqual(200)
        done(err)
      })
    })

    it('should resolve with a ‘Content-Type’ header of "text/html"', done => {
      requestPath.get(path, (err, res) => {
        expect(res.headers['content-type']).toContain('text/html')
        done(err)
      })
    })

    it('should prevent search indexing', done => {
      requestPath.get(path, (err, res) => {
        expect(res.headers['x-robots-tag']).toEqual('none')
        done(err)
      })
    })
  })

  describe('/full-page-examples/', () => {
    describe('facilities-management', () => {
      it('should show the header', (done) => {
        requestPath.get('facilities-management', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('Find a facilities management supplier')

          // Check that the header is visible
          const $header = $('.ccs-header ')
          expect($header.length).toBeTruthy()
          done(err)
        })
      })
      it('should show the footer with the correct link text', (done) => {
        requestPath.get('facilities-management', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('Find a facilities management supplier')

          // Check that the links are visible
          const $footerLinks = $('.ccs-footer__inline-list')
          expect($footerLinks.length).toBeTruthy()

          // The links have the correct text
          const linkText = [1, 2, 3, 4].map(index => $(`ul.ccs-footer__inline-list > li:nth-of-type(${index})`).first().text().trim())
          expect(linkText).toEqual([
            'Cookie policy',
            'Cookie settings',
            'Privacy policy',
            'Accessibility statement'
          ])

          done(err)
        })
      })
    })
  })
})
