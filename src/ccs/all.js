import Header from './components/header/header'

function initAll (options) {
  // Set the options to an empty object by default if no options are passed.
  options = typeof options !== 'undefined' ? options : {}

  // Allow the user to initialise CCS Frontend in only certain sections of the page
  // Defaults to the entire document if nothing is set.
  var scope = typeof options.scope !== 'undefined' ? options.scope : document

  // Find first header module to enhance.
  var $toggleButton = scope.querySelector('[data-module="ccs-header"]')
  new Header($toggleButton).init()
}

export {
  initAll,
  Header
}
