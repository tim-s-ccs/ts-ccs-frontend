'use strict'

// Convert component name to macro name
//
// This helper function takes a component name and returns the corresponding
// macro name.
//
// Component names are lowercase, dash-separated strings (button, date-input),
// whilst macro names have a `govuk` prefix and are camel cased (govukButton,
// govukDateInput).
const componentNameToMacroName = componentName => {
  const macroName = componentName
    .toLowerCase()
    .split('-')
    // capitalize each 'word'
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  return `ccs${macroName}`
}
exports.componentNameToMacroName = componentNameToMacroName

// Convert component name to JavaScript UMD module name
//
// This helper function takes a component name and returns the corresponding
// module name, which is used by rollup to set the `window` global and UMD/AMD export name
//
// Component names are lowercase, dash-separated strings (button, date-input),
// whilst module names have a `CCSFrontend.` prefix and are pascal cased (CCSFrontend.Header,
// CCSFrontend.Footer).
const componentNameToJavaScriptModuleName = componentName => {
  const macroName = componentName
    .toLowerCase()
    .split('-')
    // capitalize each 'word'
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  return `CCSFrontend.${macroName}`
}
exports.componentNameToJavaScriptModuleName = componentNameToJavaScriptModuleName
