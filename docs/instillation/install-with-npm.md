# Install with Node.js package manager (npm)

## Requirements

1.  [Install Node.js](https://nodejs.org/en/).

    If you have not already installed version 4.2.0 or later of Node.js, install the latest Long Term Support (LTS) version.

2.  cd to the root of your project and check if you have a [`package.json` file](https://docs.npmjs.com/files/package.json).   
    If you do not have the file, create it by running:
    ```
    npm init
    ```

3.  Install [Dart Sass](https://www.npmjs.com/package/sass) - version 1.0.0 or higher.

    If you’re using Dart Sass 1.33.0 or greater, you may see deprecation warnings when compiling your Sass. You can [silence deprecation warnings caused by dependencies](/docs/guides/import-assets.md#silence-deprecation-warnings-from-dependencies-in-dart-sass) if required.

    We recommend you do not use either LibSass or Ruby Sass, as they are deprecated.

    Currently, CCS Components supports:

    - LibSass - version 3.3.0 and greater
    - Ruby Sass - version 3.4.0 and greater

    However, we may stop supporting LibSass and Ruby Sass in future

<!-- Create guide for nunjucks -->
You can also [install Nunjucks v3.0.0 or later](https://www.npmjs.com/package/nunjucks) if you want to [use CCS Components' Nunjucks macros](/docs/guides/use-nunjucks.md).

## Install CCS Components

Run:
```
npm install ts-ccs-components --save
```
When the installation finishes, the `ts-ccs-components` package will be in your `node_modules` folder.

If it is not already installed, you will also find the `govuk-frontend` package in your `node_modules` folder as this is a dependency of CCS Components.

You should now get started by [getting the CSS, assets and JavaScript working](/docs/guides/get-started.md).
