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
<!-- Add templates -->
1. Create a page in your project using the HTML found in [example-page.html](../examples/pages/example-page.html). 
   In your live application, you should use the CCS Design System page template, which will be added in the future, instead.

2. Replace `<VERSION-NUMBER>` so the 3 filenames match the files you [copied from CCS Frontend’s GitHub repo](#copy-the-files).

3. Run your application - you can check it works the same way as the CCS Design System header example, which will be added in the future, by making your screen smaller which should make the `Menu` button appear.
   You should then be able to click this button which will reveal and hide the navigation links.

You can now get the full code for page layouts and other components by [running this project locally](/docs/contributing/running-locally.md).
In the future we will host these examples on the CCS Design System website.

If the header menu does not work, you can [find out more about how to import CCS Frontend’s CSS and JavaScript](/docs/guides/import-assets.md).
