# Import CSS, assets and JavaScript

When importing CSS, assets and JavaScript for CCS Components, you will also need to import them for GOV.UK Frontend too.
A guide for this can be found on the [GOV.UK Frontend website](https://frontend.design-system.service.gov.uk/importing-css-assets-and-javascript/#import-css-assets-and-javascript).

## CSS

### Import all the CSS

To import all the Sass rules from CCS Components, add the following to your Sass file:

```scss
@import "node_modules/ts-ccs-components/ccs/all";
```

### Import specific parts of the CSS
If you want to improve how quickly your service’s pages load in browsers, you can import only the Sass rules you need.

1. Import `node_modules/ts-ccs-components/ccs/base` in your Sass file.
2. Import the parts of the CSS you need.

For example, add the following to your Sass file to import the CSS you need for a basic CCS page.

```scss
@import "node_modules/ts-ccs-components/ccs/base";

@import "node_modules/ts-ccs-components/ccs/components/footer/index";
@import "node_modules/ts-ccs-components/ccs/components/header/index";
```

You can remove lines that import parts of the CSS you do not need.

You do not need `/index` at the end of your component imports if you’re using Dart Sass, LibSass 3.6.0 or higher, or Ruby Sass 3.6.0 or higher.

### Import an individual component’s CSS using a single import
You can also import a component and all its dependencies without `importing node_modules/ts-ccs-components/ccs/base` first.

To import the header component for example, add the following to your Sass file:

```scss
@import "node_modules/ts-ccs-components/ccs/components/header/header";
```

### Simplify Sass import paths

If you want to make Sass import paths shorter, add `node_modules/ts-ccs-components` to either your:
- Sass load paths
- assets paths if you use Ruby in your project

You can then import without using `node_modules/ts-ccs-components/` in your import path. For example:

```scss
@import "ccs/components/header/header";
```

### Override with your own CSS

If you want to override CCS Components’ styles with your own styles, `@import` CCS Components’ styles before your own Sass rules.

### Silence deprecation warnings from dependencies in Dart Sass

If you’re using Dart Sass 1.33.0 or greater, you may see deprecation warnings when compiling your Sass. For example:

```
DEPRECATION WARNING: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.
```

We’re currently unable to fix these deprecation warnings without breaking support for LibSass. However, you can silence the warnings caused by CCS Components and other dependencies. Make sure you’re using Dart Sass 1.35.0 or greater, and then if you’re:

- calling the Sass compiler from the command line, [pass the `--quiet-deps` flag](https://sass-lang.com/documentation/cli/dart-sass#quiet-deps)
- using the JavaScript API, [include `quietDeps: true`](https://sass-lang.com/documentation/js-api#quietdeps) in the `options` object

You’ll still see deprecation warnings if you’re using `/` for division in your own Sass code.

## Image assets

To use the image assets from CCS Components, you can either:

- serve the assets from the CCS Components assets folder - recommended
- copy the image files into your application

### Serve the assets from the CCS Components assets folder - recommended

Set up your routing so that requests for files in `<YOUR-SITE-URL>/assets` are served from `/node_modules/ts-ccs-components/ccs/assets`.

For example if you’re using [express.js](https://expressjs.com/), add the following to your `app.js` file:

```js
var path = require('path');
app.use('/assets', express.static(path.join(__dirname, '/node_modules/ts-ccs-components/ccs/assets')))
```

### Copy the image files into your application

If you decide to copy the assets instead, copy the:
  - `/node_modules/ts-ccs-components/ccs/assets/images` folder to `<YOUR-APP>/assets/images`

You should use an automated task or your build pipeline to copy the files, so your project folder stays up to date when we update CCS Components.

#### If you have your own folder structure

If you use a different folder structure than `<YOUR-APP>/assets/images`, you can set Sass variables so that Sass builds the CSS to point to your folders.

Set `$ccs-images-path` before the `@import` line in your Sass file. For example:

```scss
$ccs-images-path: "/<YOUR-IMAGES-FOLDER>/";
```

You can also use your own function to generate paths, for example if you’re using `asset-pipeline` in [sass-rails](https://github.com/rails/sass-rails). Set the `$ccs-image-url-function` variable to the name of your function.

## JavaScript

To import the JavaScript from CCS Components, you can either:

- add CCS Components’ JavaScript file to your HTML
- import the JavaScript using a bundler like [Webpack](https://webpack.js.org/)

### Add the JavaScript file to your HTML

If you decide to add the JavaScript to your HTML, first either:

- set up your routing so that requests for the JavaScript file are served from `node_modules/ts-ccs-components/ccs/all.js`
- copy the `node_modules/ts-ccs-components/ccs/all.js` file into your application

Then import the JavaScript file before the closing `</body>` tag of your HTML page or page template, and run the `initAll` function to initialise all the components.

```html
<body>
...
  <script src="<YOUR-APP>/<YOUR-JS-FILE>.js"></script>
  <script>
    window.CCSComponents.initAll()
  </script>
</body>
```

### Import JavaScript using a bundler

If you decide to import using a bundler, use `import` to import all of CCS Components' components, then run the `initAll` function to initialise them:

```js
import { initAll } from 'ts-ccs-components'
initAll()
```

If you’re using a bundler that uses CommonJS like [Browserify](http://browserify.org/), you should use require:

```js
const CCSComponents = require('ts-ccs-components')
CCSComponents.initAll()
```

### Select and initialise part of a page

If you update a page with new markup, for example a modal dialogue box, you can run `initAll` with a `scope` parameter to initialise the components on part of a page.

For example:

```html
  <script>
    var $modal = document.querySelector('.modal')
    window.CCSComponents.initAll({
      scope: $modal
    })
  </script>
```

### If your JavaScript is not working properly

If your site has a Content Security Policy (CSP), the CSP may block the inline JavaScript in the page template. You may see a warning like the following in your browser’s developer tools:

```
Refused to execute inline script because it violates the following Content Security Policy directive: "default-src 'self'".
```

To unblock inline JavaScript, do one of the following:

- include a hash (recommended)
- use a nonce

Make sure you [understand the security implications of using either option](https://www.w3.org/TR/CSP/#security-considerations), as wrong implementation could affect your service’s security. If you’re not sure what to do, talk to a security expert.

#### Use a hash to unblock inline JavaScript

You can unblock inline JavaScript by including the following hash in your CSP:

```
sha256-+6WnXIl4mbFTCARd8N3COQmT3bJJmo32N8q8ZSQAIcU=
```
You do not need to make any changes to the HTML.

[Learn more about Content Security Policy on the MDN Web Docs website](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

#### Use a `nonce` attribute to unblock inline JavaScript

If you're unable to use the hash in your CSP, you can also use a `nonce` on inline JavaScript.

However, you should provide a nonce that hostile actors cannot guess. Otherwise, they could easily find a way around your CSP.

You should use a value which is:

- unique for each HTTP response
- generated using a cryptographically-secure random generator
- at least 32 characters for hex, or 24 characters for base64

Make sure your script tags do not have any untrusted or unescaped variables.

If you're using the Nunjucks page template, you can add the `nonce` attribute by setting the `cspNonce` variable.
