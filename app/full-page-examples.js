const fileHelper = require('../lib/file-helper')

module.exports = (app) => {
  app.get('/full-page-examples', (req, res, next) => {
    res.locals.examples = fileHelper.fullPageExamples()

    res.render('full-page-examples/index', (error, html) => {
      if (error) {
        next(error)
      } else {
        res.send(html)
      }
    })
  })

  // Display full page examples index by default if not handled already
  app.get('/full-page-examples/:example', function (req, res, next) {
    res.render(`${req.params.example}/index`, function (error, html) {
      if (error) {
        next(error)
      } else {
        res.send(html)
      }
    })
  })
}
