# Install using precompiled files

You can install CCS Frontend by copying our CSS, JavaScript and asset files into your project.
If you install this way, you can try CCS Frontend in your application without having to make many changes.

> :warning: In your live application, you should [install with Node.js package manager (npm) instead](install-with-npm.md).

## What you cannot do after installing

You’ll not be able to:

<!-- Add Nunjucks -->
- change [Sass settings](https://frontend.design-system.service.gov.uk/sass-api-reference/), for example override colours or set your own font
- use the [Nunjucks code](/docs/guides/use-nunjucks.md) to add components
- import an individual component’s CSS or JavaScript
- use CCS Frontend’s colours or mixins in your custom code

## Copy the files
1. Download the `release-<VERSION-NUMBER>.zip` file at the bottom of the [latest CCS Frontend release note](https://github.com/tim-s-ccs/ts-ccs-frontend/releases/latest).
2. Unzip the zip file.
3. Copy the `assets` folder to the root of your project’s public folder, so that for example `<YOUR-SITE-URL>/assets/ccs-logotype-crown.png` shows the `ccs-logotype-crown.png` image in your users’ browsers.
4. Copy the 2 `.css` files to a stylesheets folder in the root of your project’s public folder, so that for example `<YOUR-SITE-URL>/stylesheets/ts-ccs-frontend-<VERSION-NUMBER>.min.css` shows the CSS file in your users’ browsers.
5. Copy the `.js` file to a JavaScript folder in the root of your project’s public folder, so that for example `<YOUR-SITE-URL>/javascript/ts-ccs-frontend-<VERSION-NUMBER>.min.js` shows the JavaScript file in your users’ browsers.

Note, CCS Frontend has a dependency on GOV.UK Frontend so you will need to follow the steps for [downloading the GOVUK Frontend assets](https://frontend.design-system.service.gov.uk/install-using-precompiled-files/#copy-the-files) too before you continue.

## Check an example page
1. Create a page in your project using the following HTML (in your live application, you should use the [CCS Frontend page template](https://github.com/tim-s-ccs/ts-ccs-frontend/blob/main/package/ccs/template.njk) instead):
   ```html
   <!DOCTYPE html>
   <html lang="en" class="govuk-template ">
   <head>
      <title>Example - CCS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
      <!--[if !IE 8]><!-->
         <link rel="stylesheet" href="/stylesheets/govuk-frontend-<VERSION-NUMBER>.min.css">
         <link rel="stylesheet" href="/stylesheets/ts-ccs-frontend-<VERSION-NUMBER>.min.css">
      <!--<![endif]-->
      <!--[if IE 8]>
         <link rel="stylesheet" href="/stylesheets/govuk-frontend-ie8-<VERSION-NUMBER>.min.css">
         <link rel="stylesheet" href="/stylesheets/ts-ccs-frontend-ie8-<VERSION-NUMBER>.min.css">
      <![endif]-->
   </head>
   <body class="govuk-template__body ">
      <script>
         document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');
      </script>
      <script src="/javascript/govuk-frontend-<VERSION-NUMBER>.min.js"></script>
      <script src="/javascript/ts-ccs-frontend-<VERSION-NUMBER>.min.js"></script>
      <!-- component HTML -->
      <script>
         window.GOVUKFrontend.initAll()
         window.CCSFrontend.initAll()
      </script>
   </body>
   </html>
   ```

2. Replace `<VERSION-NUMBER>` so the 3 filenames match the files you [copied from CCS Frontend’s GitHub repo](#copy-the-files).

3. Run your application - you can check it works the same way as the CCS Design System header example, which will be added in the future, by making your screen smaller which should make the `Menu` button appear.
   You should then be able to click this button which will reveal and hide the navigation links.

You can now get the full code for page layouts and other components from the [CCS Frontend website](https://ts-ccs-frontend.herokuapp.com/).


If the header menu does not work, you can [find out more about how to import CCS Frontend’s CSS and JavaScript](/docs/guides/import-assets.md).
