# JavaScript style guide

The source for this document can be [found on GOV.UK Frontend](https://github.com/alphagov/govuk-frontend/blob/main/docs/contributing/coding-standards/js.md) but the same guidance applies to CCS Components.
## Files

JavaScript files have the same name as the component's folder name. Test files have a `.test` suffix placed before the file extension.

```
header
├── header.js
└── header.test.js
```

## Skeleton

```js
import { nodeListForEach } from '../vendor/common'

function Header ($module) {
  // code goes here
}

Header.prototype.init = function () {
  // code goes here
}

export default Header
```

## Use data attributes to initialise component JavaScript

Use `data-module` attributes in HTML to initialise a component in JavaScript. For example:

```html
data-module="ccs-header"
```

## Use classes to target DOM elements

After you initialise a component, use `ccs-js-*` classes to target DOM elements. For example:

```html
class="ccs-js-header-toggle"
```

## Comments

Use `/** ... */` for multi-line comments. Include a description, and specify types and values for all parameters and return values.

```js
/**
* Get the nearest ancestor element of a node that matches a given tag name
* @param {object} node element
* @param {string} match tag name (e.g. div)
* @return {object} ancestor element
*/

function (node, match) {
  // code goes here
  return ancestor
}
```

Use `//` for single-line comments. Place single-line comments on a new line above the subject of the comment.

Use `// FIXME:` to annotate problems.

Use `// TODO:` to annotate solutions to problems.

## Constructors and methods

Use the prototype design pattern to structure your code.

Create a constructor and define any variables that the object needs.

```js
function Header ($module) {
  // code goes here
}
```

Assign methods to the prototype object. Do not overwrite the prototype with a new object as this makes inheritance impossible.

```js
// bad
Header.prototype = {
  init: function () {
    // code goes here
  }
}

// good
Header.prototype.init = function () {
  // code goes here
}
```

When initialising an object, use the `new` keyword.

```js
// bad
var myHeader = Header().init()

// good
var myCHeader = new Header().init()
```

## Modules

Use ES6 modules (`import`/`export`) over a non-standard module system. You can always transpile to your preferred module system.

```js
import { nodeListForEach } from '../vendor/common'
// code goes here
export default Header
```

Avoid using wildcard (`import * as nodeListForEach`) imports.

Use default export over named export.

## Polyfilling

If you need to support older browsers, import the necessary [polyfills](/src/ccs/vendor/polyfills) and they will be added to the environment when the feature is not supported.

For example, if you want to polyfill `addEventListener` for IE8, import the Event polyfills.

```js
import '../vendor/polyfills/Event'
```

If you need polyfills for features that are not yet included in this project, please see the following guide on [how to add polyfills](../polyfilling.md).

## Formatting and linting

CCS Components uses [standardjs](http://standardjs.com/), an opinionated JavaScript linter. All JavaScript files follow its conventions, and it runs on CI to ensure that new pull requests are in line with them.

The standard docs have a [complete list of rules and some reasoning behind them](http://standardjs.com/rules.html).

Read more about [running standard manually, or in your editor, on the 'JavaScript coding style' page of the GDS Way](https://gds-way.cloudapps.digital/manuals/programming-languages/js.html#linting).

See also [testing and linting](/docs/releasing/testing-and-linting.md).
